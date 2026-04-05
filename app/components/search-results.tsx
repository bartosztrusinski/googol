import { ArrowDown } from 'lucide-react';
import { Fragment, useState, useTransition } from 'react';
import { Link } from 'react-router';
import { RelatedSearches } from '~/components/related-searches';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { fetchSearchResults } from '~/lib/fetch-search-results';
import type { SearchResult } from '~/lib/sample-data';

type Props = {
	results: SearchResult['organic'];
	relatedSearches?: SearchResult['relatedSearches'];
	page: number;
	query: string;
};

export function SearchResults({ results, relatedSearches, page, query }: Props) {
	const [isPending, startTransition] = useTransition();
	const [searchResults, setSearchResults] = useState(results);
	const [hasMoreResults, setHasMoreResults] = useState(results.length > 0);
	const [currentPage, setCurrentPage] = useState(page);

	async function fetchMoreResults() {
		startTransition(async () => {
			const { organic, searchParameters } = await fetchSearchResults(query, currentPage + 1, false);
			setSearchResults((prevResults) => [...prevResults, ...organic]);
			setHasMoreResults(organic.length > 0);
			setCurrentPage(searchParameters.page);
		});
	}

	return (
		<>
			<ul className="space-y-4">
				{searchResults.map((result, index) => (
					<Fragment key={result.link}>
						<li>
							<Card className="shadow gap-3">
								<Link to={result.link} target="_blank" rel="noopener noreferrer" className="group">
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
	);
}
