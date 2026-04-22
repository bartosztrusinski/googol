import { ArrowDown } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { fetchVideoSearchResults } from '~/lib/fetch-search-results';
import type { VideoSearchResponse } from '~/lib/types';

type Props = {
	initialVideoResults: VideoSearchResponse['videos'];
	query: string;
};

export function VideoSearchResults({ initialVideoResults, query }: Props) {
	const [isPending, startTransition] = useTransition();
	const [moreResults, setMoreResults] = useState<VideoSearchResponse['videos']>([]);
	const [hasMoreResults, setHasMoreResults] = useState(initialVideoResults.length > 0);
	const [page, setPage] = useState(1);
	const videoSearchResults = [...initialVideoResults, ...moreResults];

	async function fetchMoreVideos() {
		startTransition(async () => {
			const { videos, searchParameters } = await fetchVideoSearchResults(query, page + 1);
			setMoreResults((prevResults) => [...prevResults, ...videos]);
			setHasMoreResults(videos.length > 0);
			setPage(searchParameters.page);
		});
	}

	return (
		<>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{videoSearchResults.map((result) => (
					<li key={result.link}>
						<Link to={result.link} target="_blank" rel="noopener noreferrer" className="group">
							<Card className="relative shadow rounded-lg gap-0 p-0 flex-row">
								<div className="w-41.5 h-23 bg-primary rounded-lg overflow-hidden">
									{result.imageUrl && (
										<img
											src={result.imageUrl}
											alt={result.title}
											className="object-cover size-full rounded-lg"
										/>
									)}
								</div>
								<div className="absolute bottom-1 left-1 bg-primary-foreground/75 text-primary text-xs px-1.5 py-0.5 rounded-md">
									{result.duration ? result.duration : '▶'}
								</div>
								<CardHeader className="px-3 py-1.5 content-between grow">
									<CardTitle className="line-clamp-2 font-normal leading-tight group-visited:text-purple-700 dark:group-visited:text-purple-400">
										{result.title}
									</CardTitle>
									<CardDescription className="text-xs line-clamp-2">
										<span className="text-primary">{result.source}</span>
										{result.channel && (
											<>
												<span> • {result.channel}</span>
												<br />
											</>
										)}
										{result.date}
									</CardDescription>
								</CardHeader>
							</Card>
						</Link>
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
						onClick={fetchMoreVideos}
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
