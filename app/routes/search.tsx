import { LoaderCircle, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form, Link, redirect, useNavigation } from 'react-router';
import { AllResultsSkeleton } from '~/components/all-results-skeleton';
import { ImageResultsSkeleton } from '~/components/image-results-skeleton';
import { ImageSearchResults } from '~/components/image-search-results';
import { ModeToggle } from '~/components/mode-toggle';
import { SearchResults } from '~/components/search-results';
import { Button } from '~/components/ui/button';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { VideoResultsSkeleton } from '~/components/video-results-skeleton';
import { VideoSearchResults } from '~/components/video-search-results';
import {
	fetchAllSearchResults,
	fetchImageSearchResults,
	fetchVideoSearchResults,
} from '~/lib/fetch-search-results';
import { buildSearchResultItems, cn } from '~/lib/utils';
import type { Route } from './+types/search';

type SearchType = (typeof searchTypes)[number];

const searchTypes = ['all', 'images', 'videos'] as const;

function normalizeQueryInput(value: string | null | undefined) {
	return value?.replace(/\s+/g, ' ').trim() ?? '';
}

function formatSearchTypeLabel(type: SearchType) {
	return type.charAt(0).toUpperCase() + type.slice(1);
}

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = normalizeQueryInput(url.searchParams.get('q'));
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

	const { organic, relatedSearches, knowledgeGraph, peopleAlsoAsk } = await fetchAllSearchResults(
		query,
		1,
	);

	return {
		results: buildSearchResultItems({
			organic,
			relatedSearches,
			peopleAlsoAsk,
			page: 0,
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
	const nextSearchParams = location ? new URLSearchParams(location.search) : null;
	const pendingQuery = normalizeQueryInput(nextSearchParams?.get('q'));
	const pendingType: (typeof searchTypes)[number] =
		searchTypes.find((type) => type === nextSearchParams?.get('type')) ?? searchType;
	const isSearchNavigation = location?.pathname === '/search';
	const [inputQuery, setInputQuery] = useState(query);
	const isSearching = Boolean(isSearchNavigation);
	const isSearchSubmit = formAction === '/search' && formMethod === 'GET';
	const normalizedInputQuery = normalizeQueryInput(inputQuery);
	const isDuplicatePendingSubmit =
		isSearching && pendingQuery === normalizedInputQuery && pendingType === searchType;

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
							required
						/>
						<input type="hidden" name="type" value={searchType} />
						<Button
							type="submit"
							size="icon-lg"
							className="size-11 rounded-2xl"
							disabled={isDuplicatePendingSubmit}
						>
							{isSearchSubmit ? <LoaderCircle className="animate-spin" /> : <SearchIcon />}
							<span className="sr-only">Search</span>
						</Button>
					</Field>
				</Form>
			</header>
			<main>
				<Tabs value={searchType} className="gap-4 py-4 px-2" aria-busy={isSearching}>
					<TabsList className="gap-1">
						{searchTypes.map((type) => {
							return type === searchType ? (
								<TabsTrigger key={type} value={type}>
									{formatSearchTypeLabel(type)}
								</TabsTrigger>
							) : (
								<TabsTrigger key={type} value={type} asChild>
									<Link
										to={{
											pathname: '/search',
											search: `?q=${encodeURIComponent(query)}&type=${type}`,
										}}
									>
										{formatSearchTypeLabel(type)}
									</Link>
								</TabsTrigger>
							);
						})}
					</TabsList>
					{results.length === 0 && isSearching ? (
						pendingType === 'images' ? (
							<ImageResultsSkeleton />
						) : pendingType === 'videos' ? (
							<VideoResultsSkeleton />
						) : (
							<AllResultsSkeleton />
						)
					) : results.length === 0 && !isSearching ? (
						<p className="text-center text-muted-foreground">No results found for "{query}"</p>
					) : (
						<div className="space-y-4">
							<TabsContent
								value="all"
								className={cn(
									'space-y-4 transition-opacity',
									isSearching && searchType === 'all' && 'opacity-85',
								)}
							>
								<SearchResults
									key={query}
									query={query}
									initialItems={searchType === 'all' ? results : []}
									knowledgeGraph={searchType === 'all' ? knowledgeGraph : undefined}
								/>
							</TabsContent>
							<TabsContent
								value="images"
								className={cn(
									'space-y-4 transition-opacity',
									isSearching && searchType === 'images' && 'opacity-85',
								)}
							>
								<ImageSearchResults
									query={query}
									initialImageResults={searchType === 'images' ? results : []}
								/>
							</TabsContent>
							<TabsContent
								value="videos"
								className={cn(
									'space-y-3 transition-opacity',
									isSearching && searchType === 'videos' && 'opacity-85',
								)}
							>
								<VideoSearchResults
									query={query}
									initialVideoResults={searchType === 'videos' ? results : []}
								/>
							</TabsContent>
						</div>
					)}
				</Tabs>
			</main>
		</>
	);
}
