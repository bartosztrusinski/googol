import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

type Props = {
	keywords: {
		position: number;
		keyword: string;
	}[];
};

export function SearchRelatedKeywords({ keywords }: Props) {
	return (
		<Card className="shadow">
			<CardHeader>
				<CardTitle className="text-lg font-medium">People also search for</CardTitle>
			</CardHeader>
			<CardContent>
				<ul>
					{keywords.map((keyword, index) => {
						const isLastKeyword = index === keywords.length - 1;
						return (
							<li key={keyword.position}>
								<Link
									to={`/search?q=${encodeURIComponent(keyword.keyword)}`}
									className="py-3 block text-base"
								>
									{keyword.keyword}
								</Link>
								{!isLastKeyword && <Separator />}
							</li>
						);
					})}
				</ul>
			</CardContent>
		</Card>
	);
}
