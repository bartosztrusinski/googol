import { Link } from 'react-router';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '~/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import type { PeopleAlsoAsk as PeopleAlsoAskData } from '~/lib/types';

type Props = {
	questions: PeopleAlsoAskData;
};

export function PeopleAlsoAsk({ questions }: Props) {
	return (
		<Card className="shadow">
			<CardHeader>
				<CardTitle className="text-xl font-medium">People also ask</CardTitle>
			</CardHeader>
			<CardContent>
				<Accordion type="multiple">
					{questions.map((item) => (
						<AccordionItem key={item.question} value={item.question}>
							<AccordionTrigger className="py-4 text-base">{item.question}</AccordionTrigger>
							<AccordionContent className="text-base">
								<p className="text-muted-foreground text-pretty">{item.snippet}</p>
								<Link
									to={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 visited:text-purple-700 dark:text-blue-300 dark:visited:text-purple-400"
								>
									{item.title}
								</Link>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</CardContent>
		</Card>
	);
}
