export type SearchResult = {
	searchParameters: {
		q: string;
		gl: string;
		hl: string;
		type: string;
		num: number;
		autocorrect: boolean;
		page: number;
		engine: string;
	};
	knowledgeGraph?: {
		title: string;
		imageUrl: string;
		description: string;
		descriptionSource: string;
		descriptionLink: string;
		attributes: Record<string, string>;
	};
	organic: Array<{
		title: string;
		link: string;
		snippet: string;
		sitelinks?: Array<{
			title: string;
			link: string;
		}>;
		date?: string;
		currency?: string;
		price?: number;
		position: number;
	}>;
	peopleAlsoAsk?: Array<{
		question: string;
		snippet: string;
		title: string;
		link: string;
	}>;
	relatedSearches?: Array<{
		query: string;
	}>;
	credits: number;
};

export const sampleData: Record<string, SearchResult> = {
	nike1: {
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
	},
	nike2: {
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
	},
	adidas1: {
		searchParameters: {
			q: 'adidas',
			gl: 'us',
			hl: 'en',
			type: 'search',
			num: 10,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		organic: [
			{
				title: 'Sneakers and Activewear | adidas US',
				link: 'https://www.adidas.com/us',
				snippet:
					'Gear up for your favorite sport with adidas sneakers and activewear for men and women. From running to soccer and the gym to the trail, performance workout ...',
				position: 1,
			},
			{
				title: 'adidas Careers – Through sport, we have the power to ...',
				link: 'https://careers.adidas-group.com/',
				snippet:
					'Explore adidas careers now. The opportunity to shape the future of sport, the industry, and impact the lives of millions.',
				position: 2,
			},
			{
				title: 'Adidas',
				link: 'https://en.wikipedia.org/wiki/Adidas',
				snippet:
					'Adidas AG is a German multinational athletic apparel and footwear corporation headquartered in Herzogenaurach, Germany. It is the largest sportswear ...',
				position: 3,
			},
			{
				title: 'Shop Adidas Online',
				link: 'https://www.nordstrom.com/brands/adidas--1137?srsltid=AfmBOopFPNlClUREWJ9bn91AgaIg1QeGiLy1VdIZ_cHFMJknAa7QQIgX',
				snippet: 'Free shipping and returns on Adidas at Nordstrom.com. Top brands. New trends.',
				position: 4,
			},
			{
				title: 'adidas',
				link: 'https://www.youtube.com/adidas',
				snippet:
					'Welcome to the ultimate sport playlist, where we dive deep into the lives, careers and thoughts of the most iconic athletes on earth!',
				position: 5,
			},
			{
				title: 'Adidas',
				link: 'https://www.instagram.com/adidas/?hl=en',
				snippet:
					'Madness on the floor, the future feel of movement on your feet. Bespoke fit. Madness ...',
				position: 6,
			},
			{
				title: 'adidas NEWS | Press Resources for all Brands, Sports and ...',
				link: 'https://news.adidas.com/',
				snippet:
					'Welcome to adidas NEWS. Here you can download our latest news, images and videos. All content is rights-free for editorial purposes only.',
				position: 7,
			},
			{
				title: 'adidas Running | Running Plans to Get Fit',
				link: 'https://www.runtastic.com/',
				snippet:
					'Track your runs, bodyweight training sessions, and other fitness & sports activities with adidas Runtastic apps. Stay motivated with your friends, ...',
				position: 8,
			},
			{
				title: 'Which Adidas EVO SL Should You Buy in 2026? Full ...',
				link: 'https://www.youtube.com/watch?v=tSV95KS_adQ',
				snippet:
					'Key differences between each Adidas EVO SL model · Cushioning, ride feel & performance · Which is best for daily training vs faster runs · Fit and ...',
				date: '2 days ago',
				position: 9,
			},
			{
				title: 'adidas: Shop Shoes & Clothing - Apps on Google Play',
				link: 'https://play.google.com/store/apps/details?id=com.adidas.app&hl=en_US',
				snippet:
					'Shop online, get athlete inspiration, stories, and app exclusives – all available on adidas. Running, training, basketball, baseball, soccer or golf?',
				position: 10,
			},
		],
		credits: 1,
	},
	other: {
		searchParameters: {
			q: 'sample',
			gl: 'us',
			hl: 'en',
			type: 'search',
			num: 10,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		organic: [
			{
				title: 'SAMPLE Definition & Meaning - Merriam-Webster',
				link: 'https://www.merriam-webster.com/dictionary/sample',
				snippet:
					'1. a representative part or a single item from a larger whole or group especially when presented for inspection or shown as evidence of quality : specimen',
				date: '6 days ago',
				position: 1,
			},
			{
				title: 'Sample Focus: The Easiest Way to Find Free Audio Samples ...',
				link: 'https://samplefocus.com/',
				snippet:
					"Sample Focus is the web's premiere FREE community curated royalty-free sample library. Find the perfect sound in seconds.",
				position: 2,
			},
			{
				title: 'Sample (material) - Wikipedia',
				link: 'https://en.wikipedia.org/wiki/Sample_(material)',
				snippet:
					'A sample is a limited quantity of something which is intended to be similar to and represent a larger amount of that thing(s).',
				position: 3,
			},
			{
				title: 'Sample - YouTube',
				link: 'https://www.youtube.com/@SampleChample',
				snippet:
					'Sample. @SampleChample•his. 339K subscribers•28 videos. I make videos. Watch ... Sample. 1.2M views. 6 months ago · 46:43 · Can You Beat Donkey Kong Country ...',
				position: 4,
			},
			{
				title: 'LANDR Samples: Royalty Free Sample Packs, Loops & Sounds',
				link: 'https://samples.landr.com/',
				snippet:
					"Get the best sample packs, free loops, synths, bass, vocals, drum kits and sound libraries with AI's help. Spark ideas with the best royalty-free sounds.",
				position: 5,
			},
			{
				title: 'SAMPLE | definition in the Cambridge English Dictionary',
				link: 'https://dictionary.cambridge.org/us/dictionary/english/sample',
				snippet:
					'a small amount of something that shows you what the rest is or should be like: a free sample of shampoo, samples of carpet/curtain material.',
				position: 6,
			},
			{
				title: 'How to Sample ANYTHING - YouTube',
				link: 'https://www.youtube.com/watch?v=GrvCXJxQ-DQ&vl=en',
				snippet:
					'BWB 4 types of samples video incoming. 15:46 · Go to channel Navie D · This makes ADDING TO SAMPLES easy. Navie D•43K views.',
				date: 'Sep 30, 2025',
				position: 7,
			},
			{
				title: 'What Is a Sample? - Investopedia',
				link: 'https://www.investopedia.com/terms/s/sample.asp',
				snippet:
					'A sample is a subset of individuals or items selected from a larger group that are used in statistical testing when population sizes are too large.',
				position: 8,
			},
			{
				title: 'Royalty-Free Samples, One Shots, Sound Effects & More - Splice',
				link: 'https://splice.com/sounds',
				snippet:
					'Discover royalty-free samples, loops, presets, and one shots across genres, instruments, and curated packs. Start creating your next sound on Splice.',
				position: 9,
			},
			{
				title: 'What is a sample and what is not? Beginner : r/ableton - Reddit',
				link: 'https://www.reddit.com/r/ableton/comments/199xg9t/what_is_a_sample_and_what_is_not_beginner/',
				snippet:
					"Literally any audio is a “sample”. If you can see the waveform, it's a sample. Midi data could even be considered a sample that has not been ...",
				date: 'Jan 18, 2024',
				position: 10,
			},
		],
		peopleAlsoAsk: [
			{
				question: 'What do you mean sample?',
				snippet:
					'A sample is a subset of individuals from a larger population. Sampling means selecting the group that you will actually collect data from in your research. For example, if you are researching the opinions of students in your university, you could survey a sample of 100 students.',
				title: 'What is sampling? - Scribbr',
				link: 'https://www.scribbr.com/frequently-asked-questions/what-is-sampling/',
			},
			{
				question: 'What is another name for a sample?',
				snippet:
					'Some common synonyms of sample are case, example, illustration, instance, and specimen.',
				title: 'SAMPLE Synonyms: 36 Similar Words | Merriam-Webster Thesaurus',
				link: 'https://www.merriam-webster.com/thesaurus/sample',
			},
			{
				question: 'What is the definition of a sample?',
				snippet:
					'1. : a representative part or a single item from a larger whole or group especially when presented for inspection or shown as evidence of quality : specimen. 2. : a finite part of a statistical population whose properties are studied to gain information about the whole.\n5 days ago',
				title: 'SAMPLE Definition & Meaning - Merriam-Webster',
				link: 'https://www.merriam-webster.com/dictionary/sample',
			},
		],
		relatedSearches: [
			{
				query: 'Sample music',
			},
			{
				query: 'SAMPLE medical',
			},
			{
				query: 'Sample free',
			},
			{
				query: 'What is sample in research',
			},
			{
				query: 'Sample of something',
			},
			{
				query: 'Sample example',
			},
			{
				query: 'Sample synonym',
			},
			{
				query: 'Sample p',
			},
		],
		credits: 1,
	},
};
