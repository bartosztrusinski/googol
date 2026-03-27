import { ArrowDown, SearchIcon } from 'lucide-react';
import { Form, Link, useLoaderData, useSearchParams } from 'react-router';
import { ModeToggle } from '~/components/mode-toggle';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import type { Route } from './+types/search';

const sampleResponse = {
	search_term: 'Nike',
	knowledge_panel: {
		name: 'Nike',
		label: 'Unternehmen',
		description: {
			text: 'Nike Inc. ist ein 1964 bzw. 1971 gegründeter, international tätiger, US-amerikanischer Sportartikelhersteller. Sein Firmensitz ist Beaverton im US-Bundesstaat Oregon. Nike ist seit 1989 weltweit führender Sportartikelanbieter.',
			url: 'https://de.wikipedia.org/wiki/Nike_(Unternehmen)',
			site: 'Wikipedia',
		},
		image: {
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:m8TS_7lVuPlJlM',
			width: 225,
			height: 225,
			page_url:
				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA',
		},
		info: [
			{
				title: 'Kundenservice',
				labels: ['1 (800) 806-6453'],
			},
			{
				title: 'Umsatz',
				labels: ['37,4 Milliarden USD'],
			},
			{
				title: 'Hauptsitz',
				labels: ['Beaverton, Oregon'],
			},
			{
				title: 'Gründer',
				labels: ['Philip Knight', 'Bill Bowerman'],
			},
			{
				title: 'CEO',
				labels: ['John Donahoe (13. Jan. 2020–)'],
			},
			{
				title: 'Tochtergesellschaften',
				labels: [
					'Converse',
					'Nike Vision',
					'Nike Korea LLC',
					'NIKE Tailwind',
					'NIKE Cortez',
					'NIKE Pegasus',
					'NIKE India Private Ltd',
					'NIKE Huarache',
					'Nike Deutschland',
					'NIKE European Operations Netherlands B.V.',
					'NIKE Japan Corp',
					'NIKE Retail B.V.',
					'NIKE Vietnam Co',
					'NIKE USA Inc',
					'NIKE Innovate C.V.',
					'Jordan Brand',
					'NIKE Flight',
					'NIKE 360 Holding B.V.',
					'NIKE Canada Corp',
					'NIKE Australia Pty. Ltd',
					'NIKE SALES (MALAYSIA) SDN. BHD.',
					'NIKE IHM Inc',
					'NIKE Waffle',
					'NIKE Retail Services Inc',
					'NIKE Lavadome',
					'Nike Terra LLC',
					'NIKE de Mexico S de R.L. de C.V.',
					'NIKE Hong Kong Ltd',
					'NIKE Trading Co B.V.',
					'NIKE TN Inc',
					'NIKE Canada Holding B.V.',
					'NIKE Italy S.R.L.',
					'NIKE GmbH',
					'Nike Thailand',
					'NIKE Japan Group LLC',
					'NIKE Sourcing India Private Ltd',
					'NIKE Europe Holding B.V.',
					'NIKE Argentina Srl',
				],
			},
			{
				title: 'Gründung',
				labels: ['25. Januar 1964, Eugene, Oregon'],
			},
		],
	},
	results: [
		{
			position: 1,
			url: 'https://www.nike.com/',
			title: 'Nike. Just Do It. Nike.com',
			description:
				'Nike delivers innovative products, experiences and services to inspire athletes.',
		},
		{
			position: 2,
			url: 'https://www.instagram.com/nike/?hl=de',
			title: 'Nike (@nike) • Instagram photos and videos',
			description:
				'255m Followers, 147 Following, 1019 Posts - See Instagram photos and videos from Nike (@nike)',
		},
		{
			position: 3,
			url: 'https://twitter.com/nike',
			title: 'Nike - Twitter',
			description:
				"Welcome to Nike FC. We're not a club. We're a community. If you love the game of football, you're a part of Nike FC. Let's change the game, ...",
		},
		{
			position: 4,
			url: 'https://en.wikipedia.org/wiki/Nike,_Inc.',
			title: 'Nike, Inc. - Wikipedia',
			description:
				'Nike, Inc is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, ...',
		},
		{
			position: 5,
			url: 'https://www.youtube.com/user/nike',
			title: 'Nike - YouTube',
			description:
				'We will continue to stand up for equality and work to break down barriers for athletes* all over the world. We will do and invest more to uphold ...',
		},
		{
			position: 6,
			url: 'https://www.footlocker.com/category/brands/nike.html',
			title: 'Nike Sneakers, Apparel, and Accessories - Foot Locker',
			description:
				'Shop the latest selection of Nike at Foot Locker. Find the hottest sneaker drops from brands like Jordan, Nike, Under Armour, ...',
		},
		{
			position: 7,
			url: 'https://stockx.com/nike',
			title: 'Buy Nike Shoes & New Sneakers - StockX',
			description:
				'Buy and sell Nike shoes at the best price on StockX, the live marketplace for StockX Verified Nike sneakers and other popular new releases.',
		},
		{
			position: 8,
			url: 'https://play.google.com/store/apps/details?id=com.nike.omega&hl=en_US&gl=US',
			title: 'Nike: Shoes, Apparel & Stories - Apps on Google Play',
			description:
				'Shop all perfect gifts for sport and style this Nike holiday season. Nike Member Exclusive products, end of year deals, and more - shop and ...',
		},
		{
			position: 9,
			url: 'https://de-de.facebook.com/nike/',
			title: 'Nike - Home | Facebook',
			description:
				'Nike, Beaverton, OR. 36093752 likes · 306235 talking about this · 7259 were here. Just Do It.',
		},
		{
			position: 10,
			url: 'https://www.linkedin.com/company/nike',
			title: 'Nike - LinkedIn',
			description:
				"NIKE, Inc., named for the Greek goddess of victory, is the world's leading designer, marketer, and distributor of authentic athletic footwear, apparel, ...",
		},
	],
	related_keywords: {
		spelling_suggestion_html: null,
		spelling_suggestion: null,
		keywords: [
			{
				position: 1,
				knowledge: null,
				keyword_html: 'nike',
				keyword: 'nike',
			},
			{
				position: 2,
				knowledge: null,
				keyword_html: 'nike<b> air force 1</b>',
				keyword: 'nike air force 1',
			},
			{
				position: 3,
				knowledge: null,
				keyword_html: 'nike<b> schuhe</b>',
				keyword: 'nike schuhe',
			},
			{
				position: 4,
				knowledge: null,
				keyword_html: 'nike<b> air force</b>',
				keyword: 'nike air force',
			},
			{
				position: 5,
				knowledge: null,
				keyword_html: 'nike<b> dunk low</b>',
				keyword: 'nike dunk low',
			},
			{
				position: 6,
				knowledge: null,
				keyword_html: 'nike<b> air max</b>',
				keyword: 'nike air max',
			},
			{
				position: 7,
				knowledge: null,
				keyword_html: 'nike<b> jordan</b>',
				keyword: 'nike jordan',
			},
			{
				position: 8,
				knowledge: null,
				keyword_html: 'nike<b> tech fleece</b>',
				keyword: 'nike tech fleece',
			},
			{
				position: 9,
				knowledge: null,
				keyword_html: 'nike<b> phantom gx</b>',
				keyword: 'nike phantom gx',
			},
			{
				position: 10,
				knowledge: null,
				keyword_html: 'nike<b> dunk</b>',
				keyword: 'nike dunk',
			},
		],
	},
};

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q');
	const { results } = sampleResponse;
	return { results };
}

export default function Search() {
	const { results } = useLoaderData<typeof loader>();
	const [searchParams] = useSearchParams();
	const query = searchParams.get('q');

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
				<Form action="/search">
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
						/>
						<Button type="submit" size="icon-lg" className="size-11 rounded-2xl">
							<SearchIcon />
							<span className="sr-only">Search</span>
						</Button>
					</Field>
				</Form>
			</header>
			<main className="p-4">
				{results.length === 0 ? (
					<p className="text-center text-muted-foreground">No results found for "{query}"</p>
				) : (
					<>
						<ul className="flex flex-col gap-4">
							{results.map((result) => (
								<li key={result.position}>
									<Card className="shadow gap-3">
										<Link
											to={result.url}
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
													{new URL(result.url).origin}
												</CardDescription>
											</CardHeader>
										</Link>
										<CardContent>
											<p className="text-pretty text-muted-foreground">{result.description}</p>
										</CardContent>
									</Card>
								</li>
							))}
						</ul>
						<Button
							variant="outline"
							size="lg"
							className="w-full mt-4 h-10 dark:bg-secondary shadow"
						>
							<ArrowDown /> More search results
						</Button>
					</>
				)}
			</main>
		</>
	);
}
