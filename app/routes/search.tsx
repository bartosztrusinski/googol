import { ArrowDown, SearchIcon } from 'lucide-react';
import { Form, Link, useLoaderData, useSearchParams } from 'react-router';
import { ModeToggle } from '~/components/mode-toggle';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { Separator } from '~/components/ui/separator';
import type { Route } from './+types/search';

const sampleResponse = {
	search_term: 'Nike',
	next_cursor: 'CAo=',
	knowledge_panel: null,
	results: [
		{
			url: 'https://www.nike.com/',
			title: 'Nike. Just Do It. Nike.com',
			description:
				"Inspiring the world's athletes, Nike delivers innovative products, experiences and services.",
			timestamp: null,
		},
		{
			url: 'https://www.instagram.com/nike/',
			title: 'Nike (@nike) · Beaverton, OR - Instagram',
			description:
				'Introducing Nike Project Amplify,. Fast forward your stride—and the future of movement.',
			timestamp: null,
		},
		{
			url: 'https://en.wikipedia.org/wiki/Nike,_Inc.',
			title: 'Nike, Inc. - Wikipedia',
			description:
				"It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its ...",
			timestamp: null,
		},
		{
			url: 'https://www.facebook.com/nike/',
			title: 'Nike - Facebook',
			description:
				"2014 design. Modern day technology. You're welcome. The Kobe 9 Elite High Protro is available 8.23 on SNKRS in select regions. The Low makes its return on 9.19.",
			timestamp: null,
		},
		{
			url: 'https://www.tiktok.com/@nike',
			title: 'Nike - TikTok',
			description:
				'Nike (@nike) on TikTok | 41.6M Likes. 8.3M Followers. Just Do It.Watch Nike\'s popular videos: "You reap what you sc...", "Bienvenidos al lado ...".',
			timestamp: null,
		},
		{
			url: 'https://www.footlocker.com/category/brands/nike.html?srsltid=AfmBOorc9dsr1tNbDeSVeJxsHjq9J3Ntu7ArX0ptXxHarE6Z-AkkOEOa',
			title: 'Nike Shoes, Apparel, and Accessories - Foot Locker',
			description:
				'Shop the latest selection of Nike at Foot Locker. Find the hottest sneaker drops from brands like Jordan, Nike, Under Armour, New Balance, ...',
			timestamp: null,
		},
		{
			url: 'https://www.linkedin.com/company/nike',
			title: 'Nike - LinkedIn',
			description:
				'NIKE, Inc. is a purpose-driven organization energized by a shared commitment to move the world forward through the power of sport.',
			timestamp: 1726556400,
		},
		{
			url: 'https://www.youtube.com/nike',
			title: 'Nike - YouTube',
			description:
				'Nike Running · The Best of Nike Running · Breaking4 · Comfort Zones. Nike · Playlist. Best of Nike. 15. Just Do It. Nike · Playlist · 25 · So Win. Nike · ...',
			timestamp: null,
		},
		{
			url: 'https://www.nikegrind.com/about/',
			title: 'About Nike Grind',
			description:
				'A global sustainability program that helps transform manufacturing scrap and end-of-life shoes into recycled Nike Grind materials.',
			timestamp: null,
		},
		{
			url: 'https://www.nikevision.com/',
			title: 'Nike Vision: Sports Sunglasses & Athletic Eyewear',
			description:
				'Shop sports sunglasses & athletic eyewear by Nike Vision. Our advanced frames & lenses are trusted by world-class athletes for performance & durability.',
			timestamp: null,
		},
	],
	related_keywords: {
		spelling_suggestion_html: null,
		spelling_suggestion: null,
		keywords: [
			{
				position: 1,
				knowledge: {
					title: 'Nike',
					label: '',
					image:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNqA5M4DIWkVZQ1raARt6N77-pT2RXdIhKr6L2llEOQ&s=10',
				},
				keyword_html: 'nike',
				keyword: 'nike',
			},
			{
				position: 2,
				knowledge: null,
				keyword_html: 'nike<b> tech</b>',
				keyword: 'nike tech',
			},
			{
				position: 3,
				knowledge: null,
				keyword_html: 'nike<b> shoes</b>',
				keyword: 'nike shoes',
			},
			{
				position: 4,
				knowledge: null,
				keyword_html: 'nike<b> mind 001</b>',
				keyword: 'nike mind 001',
			},
			{
				position: 5,
				knowledge: {
					title: 'Nike Factory Store',
					label: '',
					image:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHA-BXDHZYzvrQanalN6blMXSWmkxJyBjAV8Yp9MsKC7LgoqjDT5CuEYmZ0Wk&s=10',
				},
				keyword_html: 'nike outlet',
				keyword: 'nike outlet',
			},
			{
				position: 6,
				knowledge: null,
				keyword_html: 'nike<b> vomero 5</b>',
				keyword: 'nike vomero 5',
			},
			{
				position: 7,
				knowledge: {
					title: 'Nike Air Max',
					label: 'Shoes',
					image:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQo-KEWVVl1sjdsdORU1QKQy0ZiCqcBgdcuwAsxhkBg&s=10',
				},
				keyword_html: 'nike air max',
				keyword: 'nike air max',
			},
			{
				position: 8,
				knowledge: null,
				keyword_html: 'nike<b> air jordan x</b>',
				keyword: 'nike air jordan x',
			},
			{
				position: 9,
				knowledge: null,
				keyword_html: 'nike<b> vomero</b>',
				keyword: 'nike vomero',
			},
			{
				position: 10,
				knowledge: null,
				keyword_html: 'nike<b> slides</b>',
				keyword: 'nike slides',
			},
		],
	},
};

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q');
	const { results, related_keywords } = sampleResponse;
	return { results, relatedKeywords: related_keywords.keywords.slice(0, 6) };
}

export default function Search() {
	const { results, relatedKeywords } = useLoaderData<typeof loader>();
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
			<main className="p-4 space-y-4">
				{results.length === 0 ? (
					<p className="text-center text-muted-foreground">No results found for "{query}"</p>
				) : (
					<>
						<ul className="space-y-4">
							{results.map((result) => (
								<li key={result.url}>
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
						<Card className="shadow">
							<CardHeader>
								<CardTitle className="text-lg font-medium">People also search for</CardTitle>
							</CardHeader>
							<CardContent>
								<ul>
									{relatedKeywords.map((keyword, index) => (
										<li key={keyword.position}>
											<Link
												to={`/search?q=${encodeURIComponent(keyword.keyword)}`}
												className="py-3 block text-base"
											>
												{keyword.keyword}
											</Link>
											{index !== relatedKeywords.length - 1 && <Separator />}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<Button variant="outline" size="lg" className="w-full h-10 dark:bg-secondary shadow">
							<ArrowDown /> More search results
						</Button>
					</>
				)}
			</main>
		</>
	);
}
