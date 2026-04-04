import { ArrowDown, SearchIcon } from 'lucide-react';
import { Fragment, useLayoutEffect, useState, useTransition } from 'react';
import { Form, Link, redirect, useLoaderData, useNavigation } from 'react-router';
import { ModeToggle } from '~/components/mode-toggle';
import { RelatedSearches } from '~/components/related-searches';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { type SearchResult, sampleData } from '~/lib/sample-data';
import type { Route } from './+types/search';

async function fetchSearchResults(
	query: string,
	page: number,
	showGenericResults = true,
): Promise<SearchResult> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return query + page in sampleData
		? sampleData[query + page]
		: showGenericResults
			? sampleData.other
			: {
					...sampleData.other,
					organic: [],
					relatedSearches: [],
					searchParameters: { ...sampleData.other.searchParameters, page },
				};
}

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q');

	if (!query) {
		return redirect('/');
	}

	const { organic, relatedSearches, searchParameters } = await fetchSearchResults(query, 1);
	return {
		results: organic,
		relatedSearches,
		query,
		page: searchParameters.page,
	};
}

export default function Search() {
	const { results, relatedSearches, query, page } = useLoaderData<typeof loader>();
	const [isPending, startTransition] = useTransition();
	const navigation = useNavigation();
	const [searchResults, setSearchResults] = useState(results);
	const [hasMoreResults, setHasMoreResults] = useState(results.length > 0);
	const [currentPage, setCurrentPage] = useState(page);
	const isSearching = navigation.formAction === '/search' && navigation.formMethod === 'GET';

	async function fetchMoreResults() {
		startTransition(async () => {
			const { organic, searchParameters } = await fetchSearchResults(query, currentPage + 1, false);
			setSearchResults((prevResults) => [...prevResults, ...organic]);
			setHasMoreResults(organic.length > 0);
			setCurrentPage(searchParameters.page);
		});
	}

	useLayoutEffect(() => {
		setSearchResults(results);
		setHasMoreResults(results.length > 0);
		setCurrentPage(1);
	}, [results]);

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
				<Form action="/search" method="GET">
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
							defaultValue={query ?? undefined}
							disabled={isSearching}
							required
						/>
						<Button
							type="submit"
							size="icon-lg"
							className="size-11 rounded-2xl"
							disabled={isSearching}
						>
							<SearchIcon />
							<span className="sr-only">Search</span>
						</Button>
					</Field>
				</Form>
			</header>
			<main className="p-4 space-y-4">
				{isSearching ? (
					<p className="text-center text-muted-foreground">Searching...</p>
				) : searchResults.length === 0 ? (
					<p className="text-center text-muted-foreground">No results found for "{query}"</p>
				) : (
					<>
						<ul className="space-y-4">
							{searchResults.map((result, index) => (
								<Fragment key={result.link}>
									<li>
										<Card className="shadow gap-3">
											<Link
												to={result.link}
												target="_blank"
												rel="noopener noreferrer"
												className="group"
											>
												<CardHeader className="gap-1.5">
													<CardTitle>
														<h2 className="text-xl text-blue-600 group-visited:text-purple-700 dark:text-blue-300 dark:group-visited:text-purple-400 font-normal leading-snug">
															{result.title}
														</h2>
													</CardTitle>
													<CardDescription className="text-xs row-start-1">
														{new URL(result.link).origin}
													</CardDescription>
												</CardHeader>
											</Link>
											<CardContent>
												<p className="text-pretty text-muted-foreground">{result.snippet}</p>
											</CardContent>
										</Card>
									</li>
									{relatedSearches && index === results.length - 1 && (
										<li>
											<RelatedSearches searches={relatedSearches.map(({ query }) => query)} />
										</li>
									)}
								</Fragment>
							))}
						</ul>
						<div className="h-10">
							{hasMoreResults ? (
								<Button
									variant="outline"
									size="lg"
									className="size-full shadow dark:bg-secondary disabled:pointer-events-none disabled:opacity-50"
									disabled={isPending}
									onClick={fetchMoreResults}
								>
									<ArrowDown /> More search results
								</Button>
							) : (
								<p className="h-full flex justify-center items-center text-muted-foreground">
									No more results
								</p>
							)}
						</div>
					</>
				)}
			</main>
		</>
	);
}
