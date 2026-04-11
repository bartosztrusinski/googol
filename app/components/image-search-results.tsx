import { ArrowDown } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { fetchImageSearchResults } from '~/lib/fetch-search-results';
import type { ImageSearchResult } from '~/lib/sample-data';

type Props = {
	initialImageResults: ImageSearchResult['images'];
	query: string;
};

export function ImageSearchResults({ initialImageResults, query }: Props) {
	const [isPending, startTransition] = useTransition();
	const [moreResults, setMoreResults] = useState<ImageSearchResult['images']>([]);
	const [hasMoreResults, setHasMoreResults] = useState(initialImageResults.length > 0);
	const [page, setPage] = useState(1);
	const imageSearchResults = [...initialImageResults, ...moreResults];

	async function fetchMoreImages() {
		startTransition(async () => {
			const { images, searchParameters } = await fetchImageSearchResults(query, page + 1);
			setMoreResults((prevResults) => [...prevResults, ...images]);
			setHasMoreResults(images.length > 0);
			setPage(searchParameters.page);
		});
	}

	return (
		<>
			<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-4 justify-between items-start">
				{imageSearchResults.map((result) => (
					<li key={result.thumbnailUrl}>
						<Card className="shadow gap-2 pb-2">
							<img
								src={result.thumbnailUrl}
								alt={result.title}
								className="object-cover rounded-xl"
							/>
							<Link to={result.link} target="_blank" rel="noopener noreferrer">
								<CardHeader className="px-2">
									<CardTitle className="text-sm line-clamp-1">{result.title}</CardTitle>
									<CardDescription className="text-xs row-start-1 line-clamp-1">
										{result.source}
									</CardDescription>
								</CardHeader>
							</Link>
						</Card>
					</li>
				))}
			</ul>
			<div className="h-10">
				{hasMoreResults ? (
					<Button
						variant="outline"
						size="lg"
						className="size-full shadow dark:bg-secondary disabled:pointer-events-none disabled:opacity-50"
						disabled={isPending}
						onClick={fetchMoreImages}
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
