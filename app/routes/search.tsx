import { SearchIcon } from 'lucide-react';
import { Form, Link, redirect, useLoaderData, useNavigation } from 'react-router';
import { ModeToggle } from '~/components/mode-toggle';
import { SearchResults } from '~/components/search-results';
import { Button } from '~/components/ui/button';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { fetchSearchResults } from '~/lib/fetch-search-results';
import type { Route } from './+types/search';

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
	const navigation = useNavigation();
	const isSearching = navigation.formAction === '/search' && navigation.formMethod === 'GET';

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
				) : results.length === 0 ? (
					<p className="text-center text-muted-foreground">No results found for "{query}"</p>
				) : (
					<SearchResults
						results={results}
						relatedSearches={relatedSearches}
						page={page}
						query={query}
					/>
				)}
			</main>
		</>
	);
}
