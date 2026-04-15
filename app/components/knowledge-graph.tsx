import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import type { SearchResult } from '~/lib/sample-data';

type Props = Required<SearchResult>['knowledgeGraph'];

export function KnowledgeGraph({
	title,
	imageUrl,
	description,
	descriptionLink,
	descriptionSource,
	attributes,
}: Props) {
	return (
		<Card className="shadow p-3">
			<CardHeader className="p-0 gap-3">
				<CardTitle className="text-2xl">{title}</CardTitle>
				<img src={imageUrl} alt={title} className="rounded-lg object-cover w-full" />
				<CardDescription>
					<Card className="p-3 gap-1 bg-secondary text-secondary-foreground">
						{description}
						<Link
							to={descriptionLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 visited:text-purple-700 dark:text-blue-300 dark:visited:text-purple-400"
						>
							{descriptionSource}
						</Link>
					</Card>
				</CardDescription>
			</CardHeader>
			<CardContent className="p-0">
				<ul className="grid grid-cols-2 gap-4">
					{Object.entries(attributes)
						.slice(0, 4)
						.map(([key, value]) => (
							<li key={key}>
								<Card className="p-3 bg-secondary text-secondary-foreground h-full">
									<Link
										to={{ pathname: '/search', search: `?q=${encodeURIComponent(value)}` }}
										className="flex flex-col justify-between h-full"
									>
										<div className="flex items-start justify-between font-medium pb-2.5 gap-2">
											{key} <ChevronRight className="size-5" />
										</div>
										<div>{value}</div>
									</Link>
								</Card>
							</li>
						))}
				</ul>
			</CardContent>
		</Card>
	);
}
