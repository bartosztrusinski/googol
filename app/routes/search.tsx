import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form, Link, redirect, useNavigation } from 'react-router';
import { ImageSearchResults } from '~/components/image-search-results';
import { ModeToggle } from '~/components/mode-toggle';
import type { SearchResultItem } from '~/components/search-results';
import { SearchResults } from '~/components/search-results';
import { Button } from '~/components/ui/button';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { VideoSearchResults } from '~/components/video-search-results';
import {
	fetchImageSearchResults,
	fetchSearchResults,
	fetchVideoSearchResults,
} from '~/lib/fetch-search-results';
import type { SearchResult } from '~/lib/sample-data';
import type { Route } from './+types/search';

const searchTypes = ['all', 'images', 'videos'] as const;

function buildSearchResultItems({
	organic,
	relatedSearches,
	peopleAlsoAsk,
	batch,
}: {
	organic: SearchResult['organic'];
	relatedSearches?: SearchResult['relatedSearches'];
	peopleAlsoAsk?: SearchResult['peopleAlsoAsk'];
	batch: number;
}): SearchResultItem[] {
	const resultItems = organic.map((result, index) => ({
		type: 'result' as const,
		key: `batch-${batch}-result-${index}-${result.link}`,
		data: result,
	}));

	const peopleAlsoAskItem: SearchResultItem[] =
		peopleAlsoAsk && peopleAlsoAsk.length > 0
			? [
					...resultItems.slice(0, 3),
					{
						type: 'people-also-ask' as const,
						key: 'people-also-ask',
						data: peopleAlsoAsk,
					},
					...resultItems.slice(3),
				]
			: resultItems;

	return relatedSearches && relatedSearches.length > 0
		? [
				...peopleAlsoAskItem,
				{
					type: 'related-searches' as const,
					key: `related-searches-batch-${batch}`,
					data: relatedSearches,
				},
			]
		: peopleAlsoAskItem;
}

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q')?.replace(/\s+/g, ' ').trim();
	const searchType: (typeof searchTypes)[number] =
		searchTypes.find((type) => type === url.searchParams.get('type')) ?? 'all';

	if (!query) {
		return redirect('/');
	}

	if (searchType === 'images') {
		const { images } = await fetchImageSearchResults(query, 1);
		return {
			results: images,
			query,
			searchType,
		};
	}

	if (searchType === 'videos') {
		const { videos } = await fetchVideoSearchResults(query, 1);
		return {
			results: videos,
			query,
			searchType,
		};
	}

	const { organic, relatedSearches, knowledgeGraph, peopleAlsoAsk } = await fetchSearchResults(
		query,
		1,
	);
	return {
		results: buildSearchResultItems({
			organic,
			relatedSearches,
			peopleAlsoAsk,
			batch: 0,
		}),
		relatedSearches,
		knowledgeGraph,
		peopleAlsoAsk,
		query,
		searchType,
	};
}

export default function Search({ loaderData }: Route.ComponentProps) {
	const { results, knowledgeGraph, query, searchType } = loaderData;
	const { formAction, formMethod, location } = useNavigation();
	const [inputQuery, setInputQuery] = useState(query);
	const isSearching = formAction === '/search' && formMethod === 'GET';
	const isNavigating = Boolean(location);

	function trimQueryInput() {
		setInputQuery((prevInput) => prevInput.replace(/\s+/g, ' ').trim());
	}

	useEffect(() => {
		setInputQuery(query);
	}, [query]);

	return (
		<>
			<title>Googol</title>
			<meta name="description" content="Googol frontend for searching the web" />
			<header className="px-4">
				<div className="grid grid-cols-[1fr_auto_1fr] py-4 items-center">
					<div aria-hidden></div>
					<h1 className="text-3xl font-medium text-center">
						<Link to="/">Googol</Link>
					</h1>
					<div className="justify-self-end">
						<ModeToggle />
					</div>
				</div>
				<Form action="/search" method="GET" onSubmit={trimQueryInput}>
					<Field orientation="horizontal" className="items-stretch gap-1.5">
						<FieldLabel htmlFor="search" className="sr-only">
							Search
						</FieldLabel>
						<Input
							id="search"
							type="search"
							name="q"
							title="Search"
							placeholder="Search"
							autoComplete="off"
							autoCapitalize="off"
							autoCorrect="off"
							spellCheck={false}
							className="h-auto rounded-2xl px-4 shadow-md dark:bg-secondary"
							value={inputQuery}
							onChange={(event) => setInputQuery(event.target.value)}
							disabled={isSearching}
							required
						/>
						<input type="hidden" name="type" value={searchType} />
						<Button
							type="submit"
							size="icon-lg"
							className="size-11 rounded-2xl"
							disabled={isSearching || isNavigating}
						>
							<SearchIcon />
							<span className="sr-only">Search</span>
						</Button>
					</Field>
				</Form>
			</header>
			<main>
				<Tabs value={searchType} className="gap-4 py-4 px-2">
					<TabsList className="gap-1">
						{searchTypes.map((type) => {
							return type === searchType || isNavigating ? (
								<TabsTrigger key={type} value={type} disabled={isNavigating}>
									{type.charAt(0).toUpperCase() + type.slice(1)}
								</TabsTrigger>
							) : (
								<TabsTrigger key={type} value={type} asChild>
									<Link
										to={{
											pathname: '/search',
											search: `?q=${encodeURIComponent(query)}&type=${type}`,
										}}
									>
										{type.charAt(0).toUpperCase() + type.slice(1)}
									</Link>
								</TabsTrigger>
							);
						})}
					</TabsList>
					{isSearching ? (
						<p className="text-center text-muted-foreground">Searching...</p>
					) : results.length === 0 ? (
						<p className="text-center text-muted-foreground">No results found for "{query}"</p>
					) : (
						<>
							<TabsContent value="all" className="space-y-4">
								<SearchResults
									key={query}
									query={query}
									initialItems={searchType === 'all' ? results : []}
									knowledgeGraph={searchType === 'all' ? knowledgeGraph : undefined}
								/>
							</TabsContent>
							<TabsContent value="images" className="space-y-4">
								<ImageSearchResults
									query={query}
									initialImageResults={searchType === 'images' ? results : []}
								/>
							</TabsContent>
							<TabsContent value="videos" className="space-y-3">
								<VideoSearchResults
									initialVideoResults={searchType === 'videos' ? results : []}
									query={query}
								/>
							</TabsContent>
						</>
					)}
				</Tabs>
			</main>
		</>
	);
}
