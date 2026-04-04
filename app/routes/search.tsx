import { ArrowDown, SearchIcon } from 'lucide-react';
import { Fragment, useState, useTransition } from 'react';
import { Form, Link, useLoaderData, useSearchParams } from 'react-router';
import { ModeToggle } from '~/components/mode-toggle';
import { RelatedSearches } from '~/components/related-searches';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import type { Route } from './+types/search';

const sampleResponse = {
	searchParameters: {
		q: 'nike',
		gl: 'us',
		hl: 'en',
		type: 'search',
		num: 10,
		autocorrect: true,
		page: 1,
		engine: 'google',
	},
	knowledgeGraph: {
		title: 'Nike',
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYNPrmuNiWEWzv0FHSGFzW9jEd_h_oB4&s=0',
		description:
			"Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of...",
		descriptionSource: 'Wikipedia',
		descriptionLink: 'https://en.wikipedia.org/wiki/Nike,_Inc.',
		attributes: {
			'Customer service': '1 (800) 806-6453',
			CFO: 'Matthew Friend',
			CMO: 'Dirk Jan van Hameren',
			COO: 'Andrew Campion',
			President: 'Elliott Hill',
			Founders: 'Phil Knight and Bill Bowerman',
			Founded: 'January 25, 1964, Eugene, OR',
			Owner: 'Phil Knight',
		},
	},
	organic: [
		{
			title: 'Nike. Just Do It. Nike.com',
			link: 'https://www.nike.com/',
			snippet:
				"Inspiring the world's athletes, Nike delivers innovative products, experiences and services.",
			sitelinks: [
				{
					title: 'Men',
					link: 'https://www.nike.com/men',
				},
				{
					title: 'Women',
					link: 'https://www.nike.com/women',
				},
				{
					title: 'Kids',
					link: 'https://www.nike.com/kids',
				},
				{
					title: 'Shop All Sale',
					link: 'https://www.nike.com/w/sale-3yaep',
				},
				{
					title: "Men's Shoes & Sneakers",
					link: 'https://www.nike.com/w/mens-shoes-nik1zy7ok',
				},
			],
			position: 1,
		},
		{
			title: 'Nike Shoes, Apparel, and Accessories - Foot Locker',
			link: 'https://www.footlocker.com/category/brands/nike.html?srsltid=AfmBOopRCzKE3z9prm0ZBWpvpyYucEgPmFX5B8yw6Sco3J0GU0ugv3TW',
			snippet:
				'Shop the latest selection of Nike at Foot Locker. Find the hottest sneaker drops from brands like Jordan, Nike, Under Armour, New Balance, ...',
			position: 2,
		},
		{
			title: 'Nike - Amazon.com',
			link: 'https://www.amazon.com/stores/Nike/page/E9C7C6A6-9A88-4959-A67F-4D44FC67320F',
			snippet:
				'Collection: Move Easy. Feel Great. Collection: Strength Starts Here · Shoes · Clothing · Swim · Accessories · Shop by Color: Dark Neutrals · Shop by Color: ...',
			position: 3,
		},
		{
			title: 'r/Nike - Reddit',
			link: 'https://www.reddit.com/r/Nike/',
			snippet:
				'r/Nike: A community to post, appreciate, and discuss Nike. Please be respectful. Just do it.',
			position: 4,
		},
		{
			title: 'Nike (@nike) · Beaverton, OR - Instagram',
			link: 'https://www.instagram.com/nike/',
			snippet:
				'Introducing Nike Project Amplify,. Fast forward your stride—and the future of movement.',
			position: 5,
		},
		{
			title: 'Nike, Inc. - Wikipedia',
			link: 'https://en.wikipedia.org/wiki/Nike,_Inc.',
			snippet:
				"It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its ...",
			position: 6,
		},
		{
			title: 'Nike - YouTube',
			link: 'https://www.youtube.com/nike',
			snippet:
				'Nike Running · The Best of Nike Running · Breaking4 · Comfort Zones. Nike · Playlist. Best of Nike. 15 · Just Do It. Nike · Playlist · 25. So Win. Nike · ...',
			position: 7,
		},
	],
	relatedSearches: [
		{
			query: 'Nike France',
		},
		{
			query: 'Nike shoes',
		},
		{
			query: 'Nike Us',
		},
		{
			query: 'Nike company',
		},
		{
			query: 'Nike uk',
		},
		{
			query: 'Nike logo',
		},
		{
			query: 'Nike USA Sale',
		},
		{
			query: 'Nike China',
		},
	],
	credits: 1,
};

const nextPageResponse = {
	searchParameters: {
		q: 'nike',
		gl: 'us',
		hl: 'en',
		type: 'search',
		num: 10,
		autocorrect: true,
		page: 2,
		engine: 'google',
	},
	organic: [
		{
			title: 'Shop Nike Online | Nordstrom',
			link: 'https://www.nordstrom.com/brands/nike--535?srsltid=AfmBOopK91dj2jCI4bJ9lJBZhVCswPZhSWQUrO-lTkH7hcY8NEpRjut8',
			snippet: 'Free shipping and returns on Nike at Nordstrom.com. Top brands. New trends.',
			position: 1,
		},
		{
			title: "Shop Nike Clothing, Shoes & Socks - Kohl's",
			link: 'https://www.kohls.com/catalog/nike.jsp?CN=Brand:Nike',
			snippet:
				"At Kohl's you can find plenty of Nike clothing options for any occasion. Start your outfit off right with a stylish Nike top. No matter if it's a graphic tee or ...",
			currency: '$',
			price: 49,
			position: 2,
		},
		{
			title: 'Nike Shoes | Free Shipping for Rewards Members - Famous Footwear',
			link: 'https://www.famousfootwear.com/browse/brands/nike',
			snippet:
				'Shop Nike Shoes at Famous Footwear. Explore the latest Nike shoes, sneakers & slides for women, men & kids.',
			position: 3,
		},
		{
			title: 'Can Nike Stage Another Comeback? - YouTube',
			link: 'https://www.youtube.com/watch?v=T4MRIaMz2ks',
			snippet:
				"Nike's turnaround effort is facing challenges due to inventory clearance and the impact of the growing trade war.",
			date: 'Mar 21, 2025',
			position: 4,
		},
		{
			title: 'Shop Nike Sneakers and Apparel Online - Feature',
			link: 'https://feature.com/collections/nike?srsltid=AfmBOoqGALUmjj4XU-Pw-578EED2IzW9fqRtgKRkW8vnPZEKd99NMRFN',
			snippet:
				"Nike's latest footwear delivery has arrived. Tap to discover your new pair. Feature has the lastest 2022 Styles. Order Online & Get Fast Delivery plus ...",
			currency: '$',
			price: 140,
			position: 5,
		},
		{
			title: 'Nike | 6pm',
			link: 'https://www.6pm.com/b/nike/brand/111',
			snippet:
				'Nike is able to outfit an athlete from the top down with high performance shoes, clothing, socks, bags, watches and eyewear.',
			currency: '$',
			price: 100,
			position: 6,
		},
		{
			title: "Nike - Macy's",
			link: 'https://www.macys.com/shop/brands/nike?id=70897',
			snippet:
				"Discover the best of Nike Activewear at Macy's. Shop a wide range of footwear, apparel, and accessories. Free shipping available.",
			currency: '$',
			price: 49,
			position: 7,
		},
		{
			title: 'Drove Soooo Far For This Nike Outlet... - YouTube',
			link: 'https://www.youtube.com/watch?v=HmAAQfXJnC0',
			snippet:
				'We had to head out to Bakersfield... so you know what that means! We had to check out the Nike Factory Store at the Tejon Ranch Outlets.',
			date: 'Oct 21, 2025',
			position: 8,
		},
		{
			title: "Nike | DICK'S Sporting Goods",
			link: 'https://www.dickssportinggoods.com/s/brand-shop/nike?srsltid=AfmBOoo-vYo46G-AI9yOFz5hwrxo3B574g74ZSTdFmXgdnG-sBv7lTuY',
			snippet:
				'Our collection of Nike shoes includes shoes optimized for running, training, basketball and more. Shop sport-specific Nike cleats and shoes, including Nike ...',
			position: 9,
		},
	],
	credits: 1,
};

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q');
	const { organic, relatedSearches } = sampleResponse;
	return { results: organic, relatedSearches };
}

export default function Search() {
	const { results, relatedSearches } = useLoaderData<typeof loader>();
	const [searchParams] = useSearchParams();
	const [isPending, startTransition] = useTransition();
	const [searchResults, setSearchResults] = useState(results);
	const [hasMoreResults, setHasMoreResults] = useState(true);
	const query = searchParams.get('q');

	async function fetchMoreResults() {
		startTransition(async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setSearchResults((prevResults) => [...prevResults, ...nextPageResponse.organic]);
			setHasMoreResults(nextPageResponse.organic.length === 10);
		});
	}

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
				<Form action="/search" method="GET">
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
				{searchResults.length === 0 ? (
					<p className="text-center text-muted-foreground">No results found for "{query}"</p>
				) : (
					<>
						<ul className="space-y-4">
							{searchResults.map((result, index) => (
								<Fragment key={result.link}>
									<li>
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
									{index === results.length - 1 && (
										<li>
											<RelatedSearches searches={relatedSearches.map(({ query }) => query)} />
										</li>
									)}
								</Fragment>
							))}
						</ul>
						{hasMoreResults && (
							<Button
								variant="outline"
								size="lg"
								className="w-full h-10 dark:bg-secondary shadow disabled:pointer-events-none disabled:opacity-50"
								disabled={isPending}
								onClick={fetchMoreResults}
							>
								<ArrowDown /> More search results
							</Button>
						)}
					</>
				)}
			</main>
		</>
	);
}
