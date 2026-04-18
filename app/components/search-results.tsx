import { ArrowDown } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Link } from 'react-router';
import { KnowledgeGraph } from '~/components/knowledge-graph';
import { PeopleAlsoAsk } from '~/components/people-also-ask';
import { RelatedSearches } from '~/components/related-searches';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { fetchSearchResults } from '~/lib/fetch-search-results';
import type { SearchResult } from '~/lib/sample-data';

type Props = {
	initialItems: SearchResultItem[];
	knowledgeGraph?: SearchResult['knowledgeGraph'];
	query: string;
};

export type SearchResultItem =
	| { type: 'result'; key: string; data: SearchResult['organic'][0] }
	| { type: 'people-also-ask'; key: string; data: Required<SearchResult>['peopleAlsoAsk'] }
	| { type: 'related-searches'; key: string; data: Required<SearchResult>['relatedSearches'] };

export function SearchResults({
	initialItems,
	knowledgeGraph,
	query,
}: Props) {
	const [isPending, startTransition] = useTransition();
	const [moreItems, setMoreItems] = useState<SearchResultItem[]>([]);
	const [hasMoreResults, setHasMoreResults] = useState(
		initialItems.some((item) => item.type === 'result'),
	);
	const [page, setPage] = useState(1);
	const renderedItems = [...initialItems, ...moreItems];

	async function fetchMoreResults() {
		startTransition(async () => {
			const {
				organic,
				relatedSearches: pageRelatedSearches,
				searchParameters,
			} = await fetchSearchResults(query, page + 1, false);

			const pageItems: SearchResultItem[] = [
				...organic.map((result, index) => ({
					type: 'result' as const,
					key: `batch-${searchParameters.page}-result-${index}-${result.link}`,
					data: result,
				})),
				...(pageRelatedSearches && pageRelatedSearches.length > 0
					? [
							{
								type: 'related-searches' as const,
								key: `related-searches-batch-${searchParameters.page}`,
								data: pageRelatedSearches,
							},
						]
					: []),
			];

			setMoreItems((prev) => [...prev, ...pageItems]);
			setHasMoreResults(organic.length > 0);
			setPage(searchParameters.page);
		});
	}

	return (
		<>
			{knowledgeGraph && <KnowledgeGraph {...knowledgeGraph} />}
			<ul className="space-y-4">
				{renderedItems.map((item) => {
					if (item.type === 'result') {
						const result = item.data;
						return (
							<li key={item.key}>
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
						);
					}
					if (item.type === 'people-also-ask') {
						return (
							<li key={item.key}>
								<PeopleAlsoAsk questions={item.data} />
							</li>
						);
					}
					if (item.type === 'related-searches') {
						return (
							<li key={item.key}>
								<RelatedSearches queries={item.data} />
							</li>
						);
					}
					return null;
				})}
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
