import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form, Link, redirect, useNavigation } from 'react-router';
import { ImageSearchResults } from '~/components/image-search-results';
import { ModeToggle } from '~/components/mode-toggle';
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
import type { Route } from './+types/search';

const searchTypes = ['all', 'images', 'videos'] as const;

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

	const { organic, relatedSearches, knowledgeGraph } = await fetchSearchResults(query, 1);
	return {
		results: organic,
		relatedSearches,
		knowledgeGraph,
		query,
		searchType,
	};
}

export default function Search({ loaderData }: Route.ComponentProps) {
	const { results, relatedSearches, knowledgeGraph, query, searchType } = loaderData;
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
									initialResults={searchType === 'all' ? results : []}
									relatedSearches={searchType === 'all' ? relatedSearches : undefined}
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
