import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import type { RelatedSearches as RelatedSearchesData } from '~/lib/types';

type Props = {
	queries: RelatedSearchesData;
};

export function RelatedSearches({ queries }: Props) {
	return (
		<Card className="shadow">
			<CardHeader>
				<CardTitle className="text-xl font-medium">People also search for</CardTitle>
			</CardHeader>
			<CardContent>
				<ul>
					{queries.map(({ query }, index) => {
						const isLastQuery = index === queries.length - 1;
						return (
							<li key={query}>
								<Link
									to={{
										pathname: '/search',
										search: `?q=${encodeURIComponent(query)}`,
									}}
									className="py-4 block text-base"
								>
									{query}
								</Link>
								{!isLastQuery && <Separator />}
							</li>
						);
					})}
				</ul>
			</CardContent>
		</Card>
	);
}
