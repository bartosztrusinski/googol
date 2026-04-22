import { ArrowDown } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Link } from 'react-router';
import { KnowledgeGraph } from '~/components/knowledge-graph';
import { PeopleAlsoAsk } from '~/components/people-also-ask';
import { RelatedSearches } from '~/components/related-searches';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { fetchAllSearchResults } from '~/lib/fetch-search-results';
import type { AllSearchResponse, SearchResultItem } from '~/lib/types';

type Props = {
	initialItems: SearchResultItem[];
	knowledgeGraph?: AllSearchResponse['knowledgeGraph'];
	query: string;
};

export function SearchResults({ initialItems, knowledgeGraph, query }: Props) {
	const [isPending, startTransition] = useTransition();
	const [moreItems, setMoreItems] = useState<SearchResultItem[]>([]);
	const [hasMoreResults, setHasMoreResults] = useState(
		initialItems.some((item) => item.type === 'organic'),
	);
	const [page, setPage] = useState(1);
	const renderedItems = [...initialItems, ...moreItems];

	async function fetchMoreResults() {
		startTransition(async () => {
			const { organic, relatedSearches, searchParameters } = await fetchAllSearchResults(
				query,
				page + 1,
				false,
			);

			const organicItems: SearchResultItem[] = organic.map((data) => ({
				type: 'organic',
				key: `organic-${data.link}-page-${searchParameters.page}`,
				data,
			}));

			const relatedItems: SearchResultItem[] =
				relatedSearches && relatedSearches.length > 0
					? [
							{
								type: 'related-searches',
								key: `related-searches-page-${searchParameters.page}`,
								data: relatedSearches,
							},
						]
					: [];

			setMoreItems((prev) => [...prev, ...organicItems, ...relatedItems]);
			setHasMoreResults(organic.length > 0);
			setPage(searchParameters.page);
		});
	}

	return (
		<>
			{knowledgeGraph && <KnowledgeGraph {...knowledgeGraph} />}
			<ul className="space-y-4">
				{renderedItems.map((item) => {
					if (item.type === 'organic') {
						const result = item.data;
						const siteLinks = result.sitelinks ?? [];
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
									<CardContent className="space-y-3">
										<p className="text-pretty text-muted-foreground">{result.snippet}</p>
										{siteLinks.length > 0 && (
											<ul className="pt-2">
												{siteLinks.map((siteLink) => (
													<li key={siteLink.link}>
														<Separator className="my-0" />
														<Link
															to={siteLink.link}
															target="_blank"
															rel="noopener noreferrer"
															className="py-4 block text-base"
														>
															{siteLink.title}
														</Link>
													</li>
												))}
											</ul>
										)}
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
