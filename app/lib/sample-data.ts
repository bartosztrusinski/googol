type SearchParameters = {
	q: string;
	gl: string;
	hl: string;
	type: string;
	num: number;
	autocorrect: boolean;
	page: number;
	engine: string;
};

export type SearchResult = {
	searchParameters: SearchParameters;
	organic: Array<{
		title: string;
		link: string;
		snippet: string;
		position: number;
		sitelinks?: Array<{
			title: string;
			link: string;
		}>;
		date?: string;
		currency?: string;
		price?: number;
	}>;
	relatedSearches?: Array<{ query: string }>;
	knowledgeGraph?: {
		title: string;
		imageUrl: string;
		description: string;
		descriptionSource: string;
		descriptionLink: string;
		attributes: Record<string, string>;
	};
	peopleAlsoAsk?: Array<{
		question: string;
		snippet: string;
		title: string;
		link: string;
	}>;
};

export type ImageSearchResult = {
	searchParameters: SearchParameters;
	images: {
		title: string;
		imageUrl: string;
		imageWidth: number;
		imageHeight: number;
		thumbnailUrl: string;
		thumbnailWidth: number;
		thumbnailHeight: number;
		source: string;
		domain: string;
		link: string;
		googleUrl: string;
		position: number;
		creator?: string;
		credit?: string;
		copyright?: string;
	}[];
};

export type VideoSearchResult = {
	searchParameters: SearchParameters;
	videos: {
		title: string;
		link: string;
		snippet: string;
		imageUrl?: string;
		videoUrl?: string;
		duration?: string;
		source?: string;
		channel?: string;
		date?: string;
		position: number;
	}[];
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
	},
};

export const sampleImages: Record<string, ImageSearchResult> = {
	nike: {
		searchParameters: {
			q: 'nike',
			gl: 'us',
			hl: 'en',
			type: 'images',
			num: 100,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		images: [
			{
				title: "Nike Air Force 1 '07 Men's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy8VFxMy7tuukxnY74ZLEt3GOWc2UOZI0MQ&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/air-force-1-07-mens-shoes-jBrhbr',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2Fb7d9211c-26e7-431a-ac24-b0540fb3c00f%2FAIR%2BFORCE%2B1%2B%252707.png&tbnid=0A-rSVTa9zXZqM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fair-force-1-07-mens-shoes-jBrhbr&docid=TfRqnVojq7fX_M&w=1872&h=2340',
				position: 1,
			},
			{
				title: 'NIKE, Inc. Logos —',
				imageUrl:
					'https://media.about.nike.com/img/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjozMzQsInRvcCI6MCwid2lkdGgiOjQwOTAsImhlaWdodCI6MjcyOH0sInJlc2l6ZSI6eyJ3aWR0aCI6OTAwfX19&s=b47e8cc4991bc508a5b762df7d8679aa1406407f56bc774089362de8797930f1',
				imageWidth: 900,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFct1Xim5Fro1zF6ArxKUKn6iGtn5qqeRLg&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'About Nike',
				domain: 'about.nike.com',
				link: 'https://about.nike.com/en/newsroom/collections/nike-inc-logos',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.about.nike.com%2Fimg%2Fcf68f541-fc92-4373-91cb-086ae0fe2f88%2F002-nike-logos-swoosh-white.jpg%3Fm%3DeyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjozMzQsInRvcCI6MCwid2lkdGgiOjQwOTAsImhlaWdodCI6MjcyOH0sInJlc2l6ZSI6eyJ3aWR0aCI6OTAwfX19%26s%3Db47e8cc4991bc508a5b762df7d8679aa1406407f56bc774089362de8797930f1&tbnid=CM0FliV-0uT7wM&imgrefurl=https%3A%2F%2Fabout.nike.com%2Fen%2Fnewsroom%2Fcollections%2Fnike-inc-logos&docid=3xfGdpMxvgM1UM&w=900&h=600',
				position: 2,
			},
			{
				title: "Nike Air Force 1 Shadow Women's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5482d0ee-6aea-4e99-8709-d90e4ea18733/W+AF1+SHADOW.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaLbptbK9eclD9mD2uPQdH-ng-XoeIFx-gg&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/air-force-1-shadow-womens-shoes-kTgn9J',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F5482d0ee-6aea-4e99-8709-d90e4ea18733%2FW%2BAF1%2BSHADOW.png&tbnid=n5dJNbFweeYfNM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fair-force-1-shadow-womens-shoes-kTgn9J&docid=RcQ7SEBlP1sAsM&w=1872&h=2340',
				position: 3,
			},
			{
				title: "Nike Air Max Plus Women's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/08a43894-8cc4-4d3b-983e-048c79642197/WMNS+AIR+MAX+PLUS.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4yd_hlgQS_Jkbyuoyksr61qDQskH41oJgw&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/air-max-plus-womens-shoes-47Sxw5',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F08a43894-8cc4-4d3b-983e-048c79642197%2FWMNS%2BAIR%2BMAX%2BPLUS.png&tbnid=Mo8-blfpgc3bxM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fair-max-plus-womens-shoes-47Sxw5&docid=_GsE7kLm_GVHBM&w=1872&h=2340',
				position: 4,
			},
			{
				title: "Nike Dunk Low Next Nature Women's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d6b6d0d-c499-417e-a93a-7381652c1cac/W+NIKE+DUNK+LOW+NEXT+NATURE.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnFidToMHlku6_a487nJOPzQLU2iM6wLQSg&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/dunk-low-next-nature-womens-shoes-ppQwKZ',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F8d6b6d0d-c499-417e-a93a-7381652c1cac%2FW%2BNIKE%2BDUNK%2BLOW%2BNEXT%2BNATURE.png&tbnid=b5_L6pFW70TbZM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fdunk-low-next-nature-womens-shoes-ppQwKZ&docid=c_cflMxEiFYpcM&w=1872&h=2340',
				position: 5,
			},
			{
				title: 'Swoosh - Wikipedia',
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
				imageWidth: 1000,
				imageHeight: 356,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC6p65HRcgBbuKo4tmCBvu4SmRLWa94A6YA&s',
				thumbnailWidth: 377,
				thumbnailHeight: 134,
				source: 'Wikipedia',
				domain: 'en.wikipedia.org',
				link: 'https://en.wikipedia.org/wiki/Swoosh',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa6%2FLogo_NIKE.svg&tbnid=g0XhBIlyu1RRZM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSwoosh&docid=IwpG6z9I2FmD8M&w=1000&h=356',
				position: 6,
			},
			{
				title: "Nike Cortez Leather Men's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0c2ecdfd-df75-4d38-b6de-76a3bfa117e4/NIKE+CORTEZ.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkXg0lHsACbZlRST8-_2ik49qBp_n8xFTHw&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/cortez-leather-mens-shoes-SxhPXX',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F0c2ecdfd-df75-4d38-b6de-76a3bfa117e4%2FNIKE%2BCORTEZ.png&tbnid=C8bVXytBLVXZjM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fcortez-leather-mens-shoes-SxhPXX&docid=lIenOmx1qvv0MM&w=1872&h=2340',
				position: 7,
			},
			{
				title: 'Nike Sportswear (@nikesportswear) • Facebook',
				imageUrl: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064933082327',
				imageWidth: 800,
				imageHeight: 800,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Facebook',
				domain: 'www.facebook.com',
				link: 'https://www.facebook.com/nikesportswear/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064933082327&tbnid=0UoVj_ISGs4tGM&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fnikesportswear%2F&docid=u_PWGTiC-v-ulM&w=800&h=800',
				position: 8,
			},
			{
				title: 'Nike Swoosh 1 Baby/Toddler Shoes. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b46b2fb1-3723-461d-a21a-86f83dc9bd6d/NIKE+SWOOSH+1+%28TD%29.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZguFMGV_D_a1b9xn2ZLryWJfCLZOKjd1OA&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/swoosh-1-baby-toddler-shoes-7EHiED9e',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2Fb46b2fb1-3723-461d-a21a-86f83dc9bd6d%2FNIKE%2BSWOOSH%2B1%2B%2528TD%2529.png&tbnid=krI-UrkOcLJkXM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fswoosh-1-baby-toddler-shoes-7EHiED9e&docid=5bQP0FfKPPGAXM&w=1872&h=2340',
				position: 9,
			},
			{
				title: "Nike Air Max Plus Men's Shoes. Nike ID",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoD7rslalltCgB-yMjpscSvveq79gX1WZqQ&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/id/t/air-max-plus-shoes-04K813',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F47b7945e-a379-4c24-b9df-98f4eef178e5%2FNIKE%2BAIR%2BMAX%2BPLUS.png&tbnid=x5FaZZaMikyANM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fid%2Ft%2Fair-max-plus-shoes-04K813&docid=GOrx5_zAsOCkLM&w=1872&h=2340',
				position: 10,
			},
			{
				title: 'Nike Will Let People Design and Sell Sneakers for the ...',
				imageUrl:
					'https://media.wired.com/photos/63728604691ed08cc4b98976/4:3/w_1880,h_1410,c_limit/Nike-Swoosh-News-Gear.jpg',
				imageWidth: 1880,
				imageHeight: 1410,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdNqS4QR8cv9Loa5Ibxe0Swoeb37GhF82lw&s',
				thumbnailWidth: 259,
				thumbnailHeight: 194,
				source: 'WIRED',
				domain: 'www.wired.com',
				link: 'https://www.wired.com/story/nike-will-let-people-design-and-sell-sneakers-for-the-metaverse/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F63728604691ed08cc4b98976%2F4%3A3%2Fw_1880%2Ch_1410%2Cc_limit%2FNike-Swoosh-News-Gear.jpg&tbnid=Pa0iu9MU-OA14M&imgrefurl=https%3A%2F%2Fwww.wired.com%2Fstory%2Fnike-will-let-people-design-and-sell-sneakers-for-the-metaverse%2F&docid=P_g-wItx24lQwM&w=1880&h=1410',
				position: 11,
			},
			{
				title: "Nike Men's Air Max Excee Running Athletic Sneakers - Walmart.com",
				imageUrl:
					'https://i5.walmartimages.com/seo/Nike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers_c614a655-e730-43a6-8bc8-a826ebe2e556.5a348d512c4253127e48f4c98596a2c2.jpeg',
				imageWidth: 1500,
				imageHeight: 2000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_N5GDkvOyyEKnTYcCACioH7y5zZyEJTRxhg&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: "Nike Men's Air Max Excee Running Athletic Sneakers - Walmart.com",
				domain: 'www.walmart.com',
				link: 'https://www.walmart.com/ip/Nike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers/250352591',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FNike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers_c614a655-e730-43a6-8bc8-a826ebe2e556.5a348d512c4253127e48f4c98596a2c2.jpeg&tbnid=X30cVrs5Tnq3aM&imgrefurl=https%3A%2F%2Fwww.walmart.com%2Fip%2FNike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers%2F250352591&docid=90VaB7VD027KbM&w=1500&h=2000',
				position: 12,
			},
			{
				title: 'Nike Air Max Plus "Triple Black" Sneakers | Black | FARFETCH',
				imageUrl: 'https://cdn-images.farfetch-contents.com/12/16/12/07/12161207_59827104_600.jpg',
				imageWidth: 600,
				imageHeight: 800,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupwK1H0FZX_7zFULSR2Q8yNFCj_qKdkJH1g&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Farfetch',
				domain: 'www.farfetch.com',
				link: 'https://www.farfetch.com/shopping/men/nike-air-max-plus-triple-black-sneakers-item-12161207.aspx',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-images.farfetch-contents.com%2F12%2F16%2F12%2F07%2F12161207_59827104_600.jpg&tbnid=OlqQDtXNxyi5sM&imgrefurl=https%3A%2F%2Fwww.farfetch.com%2Fshopping%2Fmen%2Fnike-air-max-plus-triple-black-sneakers-item-12161207.aspx&docid=tN_zslMijNWZmM&w=600&h=800',
				position: 13,
			},
			{
				title: 'Nike V2K Run sneakers in white and silver',
				imageUrl:
					'https://images.asos-media.com/products/nike-v2k-run-sneakers-in-white-and-silver/204930352-1-white?$n_640w$&wid=513&fit=constrain',
				imageWidth: 513,
				imageHeight: 655,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Y94YrY5UYJI_W8H8Bw4kxQ8oGSaK81Z7GQ&s',
				thumbnailWidth: 199,
				thumbnailHeight: 254,
				source: 'Nike V2K Run sneakers in white and silver | ASOS',
				domain: 'www.asos.com',
				link: 'https://www.asos.com/us/nike/nike-v2k-run-sneakers-in-white-and-silver/prd/204930352',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.asos-media.com%2Fproducts%2Fnike-v2k-run-sneakers-in-white-and-silver%2F204930352-1-white%3F%24n_640w%24%26wid%3D513%26fit%3Dconstrain&tbnid=7AvfPomtpMIfWM&imgrefurl=https%3A%2F%2Fwww.asos.com%2Fus%2Fnike%2Fnike-v2k-run-sneakers-in-white-and-silver%2Fprd%2F204930352&docid=dOuHPKlpU28I0M&w=513&h=655',
				position: 14,
			},
			{
				title: 'Nike x Hyperice Hyperboot Shoes. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c6362fd4-5ab3-4fd0-bc8a-7b9e072ed952/Hyperboot+by+Nike+x+Hyperice.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvy3RcShg4u-N7TjftilxNV_DgIMYeH_RhPQ&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/hyperice-hyperboot-shoes-0v8aYsXz',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2Fc6362fd4-5ab3-4fd0-bc8a-7b9e072ed952%2FHyperboot%2Bby%2BNike%2Bx%2BHyperice.png&tbnid=SBpz9AVzktqtRM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fhyperice-hyperboot-shoes-0v8aYsXz&docid=ntM9QW3Eg25MOM&w=1872&h=2340',
				position: 15,
			},
			{
				title: "Nike Air is the Athlete's Advantage, from the Track to the ...",
				imageUrl:
					'https://media.about.nike.com/img/f4669187-5df0-4a83-a1ca-8958f02440bb/nike-air-is-the-athletes-advantag.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjIxNywid2lkdGgiOjEyNzksImhlaWdodCI6ODU0fSwicmVzaXplIjp7IndpZHRoIjozODQwfX19&s=a27f87ee53a86e0248ad3d602e9e2058c4d091adcfb920bfa1fb453bfedd1b2a',
				imageWidth: 3840,
				imageHeight: 2564,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPX120FgGPxR5VNG9Z5IcP9n3E9ARlSMEg&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'About Nike',
				domain: 'about.nike.com',
				link: 'https://about.nike.com/en/newsroom/releases/nike-official-images-maxfly2-victory2-gthustle3-2024-mercurial',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.about.nike.com%2Fimg%2Ff4669187-5df0-4a83-a1ca-8958f02440bb%2Fnike-air-is-the-athletes-advantag.jpg%3Fm%3DeyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjIxNywid2lkdGgiOjEyNzksImhlaWdodCI6ODU0fSwicmVzaXplIjp7IndpZHRoIjozODQwfX19%26s%3Da27f87ee53a86e0248ad3d602e9e2058c4d091adcfb920bfa1fb453bfedd1b2a&tbnid=wGiOWe2abf3PVM&imgrefurl=https%3A%2F%2Fabout.nike.com%2Fen%2Fnewsroom%2Freleases%2Fnike-official-images-maxfly2-victory2-gthustle3-2024-mercurial&docid=hBv61SHQeCkmNM&w=3840&h=2564',
				position: 16,
			},
			{
				title: 'Nike Air Force 1 One Custom Gray / Black Shoes Sneakers - Etsy',
				imageUrl:
					'https://i.etsystatic.com/48290020/r/il/576e41/5540733108/il_fullxfull.5540733108_h4es.jpg',
				imageWidth: 2400,
				imageHeight: 3000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRua7eXBFgw6tUGwKf7lAu4kZEnJbszAEOsSQ&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Etsy',
				domain: 'www.etsy.com',
				link: 'https://www.etsy.com/listing/1619654933/nike-air-force-1-one-custom-gray-black',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.etsystatic.com%2F48290020%2Fr%2Fil%2F576e41%2F5540733108%2Fil_fullxfull.5540733108_h4es.jpg&tbnid=dpbhHHdJqk1LjM&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1619654933%2Fnike-air-force-1-one-custom-gray-black&docid=4X8QaK3U73uyuM&w=2400&h=3000',
				position: 17,
			},
			{
				title: 'Welcome to NIKE, Inc. —',
				imageUrl:
					'https://media.about.nike.com/img/71fbb222-326e-4bc3-8e4a-f0fbad0fc1fb/nike-inc-swoosh-jordan-converse-logos.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwicmVzaXplIjp7IndpZHRoIjozODQwfX19&s=cb6073b0c247458e394ac292f032d07152211f3c4c37158b3a4cda70537ebef0',
				imageWidth: 3840,
				imageHeight: 1920,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJ056qLpG2Eos5cQ4k77DUhUxJeRIlmojnQ&s',
				thumbnailWidth: 318,
				thumbnailHeight: 159,
				source: 'About Nike',
				domain: 'about.nike.com',
				link: 'https://about.nike.com/en/company',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.about.nike.com%2Fimg%2F71fbb222-326e-4bc3-8e4a-f0fbad0fc1fb%2Fnike-inc-swoosh-jordan-converse-logos.jpg%3Fm%3DeyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwicmVzaXplIjp7IndpZHRoIjozODQwfX19%26s%3Dcb6073b0c247458e394ac292f032d07152211f3c4c37158b3a4cda70537ebef0&tbnid=_LoZpJuqvqTBEM&imgrefurl=https%3A%2F%2Fabout.nike.com%2Fen%2Fcompany&docid=A8GaHbEkvZSUbM&w=3840&h=1920',
				position: 18,
			},
			{
				title: 'Nike Dunk Low Baby/Toddler Shoes. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78093c5f-19cf-4462-834c-a3e46de38386/NIKE+DUNK+LOW+%28TDE%29.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iL9RgggqdS4VP6eOL91F4kmWcOGYCxjOxA&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/dunk-low-little-kids-shoes-C6spohtb',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F78093c5f-19cf-4462-834c-a3e46de38386%2FNIKE%2BDUNK%2BLOW%2B%2528TDE%2529.png&tbnid=QD8Gk_Y-HqKvMM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fdunk-low-little-kids-shoes-C6spohtb&docid=vY1NzC-oJPn6EM&w=1872&h=2340',
				position: 19,
			},
			{
				title: 'Shop Nike Shoes | Nike Shoes for Men, Women, & Kids ...',
				imageUrl: 'https://tradehome.com/cdn/shop/collections/nike.png?v=1715719063&width=750',
				imageWidth: 750,
				imageHeight: 764,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXYK93z4EGuwUlZu7C-OVb-5y47_0e2cyPg&s',
				thumbnailWidth: 222,
				thumbnailHeight: 227,
				source: 'Tradehome Shoes',
				domain: 'tradehome.com',
				link: 'https://tradehome.com/collections/nike?srsltid=AfmBOoovE5OaYpeE2RcngZ9kjP8NH_0Ugwp-0hPSxOfPRtreCOqCLO8A',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftradehome.com%2Fcdn%2Fshop%2Fcollections%2Fnike.png%3Fv%3D1715719063%26width%3D750&tbnid=8SRzyS9-gEEs0M&imgrefurl=https%3A%2F%2Ftradehome.com%2Fcollections%2Fnike%3Fsrsltid%3DAfmBOoovE5OaYpeE2RcngZ9kjP8NH_0Ugwp-0hPSxOfPRtreCOqCLO8A&docid=Fqa_PHr2NXLnHM&w=750&h=764',
				position: 20,
			},
			{
				title: "Buy Nike Interact Run Men's Road Running Shoes - Black ...",
				imageUrl:
					'https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw0ff1b196/nk/3a5/2/9/f/0/a/3a529f0a_eb83_43c5_bc78_ebc9096e764d.jpg?sw=700&sh=700&sm=fit&q=100&strip=false',
				imageWidth: 700,
				imageHeight: 700,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Hw_jDQFu5QqRe81Ed3y62v0M2myghMoiSA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Nike',
				domain: 'www.nike.sa',
				link: 'https://www.nike.sa/en/interact-run-mens-road-running-shoes/NKFD2291-001.html?srsltid=AfmBOop0Ji_HPt2eebYCpTDA9fOcCl3wo0-1fOavrUAA1TKHiSvV4s7G',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nike.sa%2Fdw%2Fimage%2Fv2%2FBDVB_PRD%2Fon%2Fdemandware.static%2F-%2FSites-akeneo-master-catalog%2Fdefault%2Fdw0ff1b196%2Fnk%2F3a5%2F2%2F9%2Ff%2F0%2Fa%2F3a529f0a_eb83_43c5_bc78_ebc9096e764d.jpg%3Fsw%3D700%26sh%3D700%26sm%3Dfit%26q%3D100%26strip%3Dfalse&tbnid=DDq5FlUhgDFhPM&imgrefurl=https%3A%2F%2Fwww.nike.sa%2Fen%2Finteract-run-mens-road-running-shoes%2FNKFD2291-001.html%3Fsrsltid%3DAfmBOop0Ji_HPt2eebYCpTDA9fOcCl3wo0-1fOavrUAA1TKHiSvV4s7G&docid=u5gtRZ_dJEMsQM&w=700&h=700',
				position: 21,
			},
			{
				title: "Nike Air Max 270 Women's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bb96e30b-fde8-4444-aefc-1e933769db22/W+NIKE+AIR+MAX+270.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjmm8TkFgTQVBxxcl_mf3Tfnr7eux9IjJ8w&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: "Nike Air Max 270 Women's Shoes. Nike.com",
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/air-max-270-womens-shoes-Pgb94t/HJ3222-401',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2Fbb96e30b-fde8-4444-aefc-1e933769db22%2FW%2BNIKE%2BAIR%2BMAX%2B270.png&tbnid=lJCXDswkdc27dM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fair-max-270-womens-shoes-Pgb94t%2FHJ3222-401&docid=tJQONDrkVWDUJM&w=1872&h=2340',
				position: 22,
			},
			{
				title: 'Nike, Inc. | History, Logo, Headquarters, & Facts ...',
				imageUrl: 'https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg',
				imageWidth: 1600,
				imageHeight: 1067,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA-hqMjyoXP5f8kF54bzP-rVMCMoCSOwZVg&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'Britannica',
				domain: 'www.britannica.com',
				link: 'https://www.britannica.com/money/Nike-Inc',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F50%2F213250-050-02322AA8%2FNike-logo.jpg&tbnid=XiLQGzqFNvyDQM&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fmoney%2FNike-Inc&docid=kFE14QVmQ87iGM&w=1600&h=1067',
				position: 23,
			},
			{
				title: 'The Nike Sneakers I Prefer Over Air Force Ones | Reviews by ...',
				imageUrl:
					'https://cdn.thewirecutter.com/wp-content/media/2024/03/WILI-NIKE-BLAZERS-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp',
				imageWidth: 2048,
				imageHeight: 1024,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7d1EFazrwQSW-cTncgNJNyWVLuF5jza4uQ&s',
				thumbnailWidth: 318,
				thumbnailHeight: 159,
				source: 'The New York Times',
				domain: 'www.nytimes.com',
				link: 'https://www.nytimes.com/wirecutter/reviews/nike-blazer-review/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.thewirecutter.com%2Fwp-content%2Fmedia%2F2024%2F03%2FWILI-NIKE-BLAZERS-2x1-1.jpg%3Fwidth%3D2048%26quality%3D75%26crop%3D2%3A1%26auto%3Dwebp&tbnid=21LZ6f2TR_e53M&imgrefurl=https%3A%2F%2Fwww.nytimes.com%2Fwirecutter%2Freviews%2Fnike-blazer-review%2F&docid=7P0mByE0sjVY-M&w=2048&h=1024',
				position: 24,
			},
			{
				title: 'Amazon.com | Nike Mens Air Force 1 React DM0573 100 Triple ...',
				imageUrl: 'https://m.media-amazon.com/images/I/71qL9cJh-SL._AC_UY900_.jpg',
				imageWidth: 900,
				imageHeight: 900,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkLo9aqTInr2UfJuIrSS9y_QGa6NnTN_toQ&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Amazon.com',
				domain: 'www.amazon.com',
				link: 'https://www.amazon.com/Nike-Mens-Sneaker/dp/B0DKJX8PBC',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71qL9cJh-SL._AC_UY900_.jpg&tbnid=6njLJseN7aQKdM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FNike-Mens-Sneaker%2Fdp%2FB0DKJX8PBC&docid=fhZemGIhRjIFnM&w=900&h=900',
				position: 25,
			},
			{
				title: "Men's Big Nike Sneaker",
				imageUrl:
					'https://www.famousfootwear.com/blob/product-images/20000/43/70/9/43709_pair_feed1000.jpg',
				imageWidth: 1000,
				imageHeight: 1000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNUC037W066isE_PZKkzAJjzfZgwUwdKOAQ&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Famous Footwear',
				domain: 'www.famousfootwear.com',
				link: 'https://www.famousfootwear.com/product/nike-mens-big-nike-sneaker-1057173',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.famousfootwear.com%2Fblob%2Fproduct-images%2F20000%2F43%2F70%2F9%2F43709_pair_feed1000.jpg&tbnid=yX2gYP5TjWIbLM&imgrefurl=https%3A%2F%2Fwww.famousfootwear.com%2Fproduct%2Fnike-mens-big-nike-sneaker-1057173&docid=8QV84jJlKduXWM&w=1000&h=1000',
				position: 26,
			},
			{
				title: 'Nike Baseball. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/18419388-2bcb-48dd-8ede-baf9766c215c/nike-baseball.jpg',
				imageWidth: 828,
				imageHeight: 1240,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFkRl4EpoGkHeZwr5A5uGo0F6rO2BSsW46Q&s',
				thumbnailWidth: 183,
				thumbnailHeight: 275,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/baseball',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ff_auto%2Ccs_srgb%2Fw_1536%2Cc_limit%2F18419388-2bcb-48dd-8ede-baf9766c215c%2Fnike-baseball.jpg&tbnid=uEX0MLzTcQeAoM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fbaseball&docid=OCn2Y9cpWSBBQM&w=828&h=1240',
				position: 27,
			},
			{
				title: "Nike Uplift SC Men's Shoes. Nike ID",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6188443e-71b7-49f2-b0c3-619dd3ef039a/NIKE+UPLIFT+SC.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQk6BMyfz423UT3gDLCrlyxIrif2JhRTxb2w&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/id/t/uplift-sc-shoes-R0995d',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F6188443e-71b7-49f2-b0c3-619dd3ef039a%2FNIKE%2BUPLIFT%2BSC.png&tbnid=vHdA-Cz2k9FCqM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fid%2Ft%2Fuplift-sc-shoes-R0995d&docid=dC8V8lAyvl2OsM&w=1872&h=2340',
				position: 28,
			},
			{
				title: 'Nike Air Max 270',
				imageUrl: 'https://i8.amplience.net/i/jpl/jd_009318_a',
				imageWidth: 4288,
				imageHeight: 3039,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPxs20Fz7z8vyeeHUz6GEGRZ-CmV4NRvRQw&s',
				thumbnailWidth: 267,
				thumbnailHeight: 189,
				source: 'JD Sports',
				domain: 'www.global.jdsports.com',
				link: 'https://www.global.jdsports.com/product/white-nike-air-max-270/009318/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi8.amplience.net%2Fi%2Fjpl%2Fjd_009318_a&tbnid=_SZYq9e-GCdrFM&imgrefurl=https%3A%2F%2Fwww.global.jdsports.com%2Fproduct%2Fwhite-nike-air-max-270%2F009318%2F&docid=BQuziRfqiuYqjM&w=4288&h=3039',
				position: 29,
			},
			{
				title: "Nike Air Max Plus Men's Shoes. Nike CA",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0fdb3f96-ef3b-4053-a0e5-e6a036510837/NIKE+AIR+MAX+PLUS.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4FibDs8UxcTjww1IvAT5ia-XSFLrV7jarQ&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/ca/t/air-max-plus-shoes-vGsr6j',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F0fdb3f96-ef3b-4053-a0e5-e6a036510837%2FNIKE%2BAIR%2BMAX%2BPLUS.png&tbnid=kNgU19qOIJ9_HM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fca%2Ft%2Fair-max-plus-shoes-vGsr6j&docid=AQaiJPjci77RQM&w=1872&h=2340',
				position: 30,
			},
			{
				title: "Nike V5 RNR Men's Shoes. Nike.com",
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/021c20e6-4f49-43ae-95d4-81c9a192af41/NIKE+V5+RNR.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8p-ZKke-0gXdAPs46DCNHAj8zvdtdQX3mQ&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/v5-rnr-mens-shoes-WHxi2GRN/HJ5228-010',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2F021c20e6-4f49-43ae-95d4-81c9a192af41%2FNIKE%2BV5%2BRNR.png&tbnid=Vb2z4UYAhJMlzM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fv5-rnr-mens-shoes-WHxi2GRN%2FHJ5228-010&docid=FsQMpJL3W9_SSM&w=1872&h=2340',
				position: 31,
			},
			{
				title: 'Nike G.T. Cut Academy Basketball Shoes. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a894f9a5-8fac-4e85-8065-db47b9f1011e/AIR+ZOOM+G.T.+CUT+ACADEMY.png',
				imageWidth: 1872,
				imageHeight: 2340,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdKHuBv2rE915j4AC8El1khKzry7KP1Jc5g&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/t/gt-cut-academy-basketball-shoes-HWCFvAob',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_web_pdp_936_v2%2Ff_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply%2Fa894f9a5-8fac-4e85-8065-db47b9f1011e%2FAIR%2BZOOM%2BG.T.%2BCUT%2BACADEMY.png&tbnid=Q5hSWZ8q6PBnGM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Ft%2Fgt-cut-academy-basketball-shoes-HWCFvAob&docid=FvT0OEzyseIe3M&w=1872&h=2340',
				position: 32,
			},
			{
				title: 'Nike Air Max 97 "Silver Aqua" Sneakers | Silver | FARFETCH',
				imageUrl: 'https://cdn-images.farfetch-contents.com/21/54/29/78/21542978_51590537_600.jpg',
				imageWidth: 600,
				imageHeight: 801,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6q9R61FSfBN7ncIMR4Y-Cv2aLXVC0JRI40A&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Farfetch',
				domain: 'www.farfetch.com',
				link: 'https://www.farfetch.com/shopping/women/nike-air-max-97-silver-aqua-sneakers-item-21542978.aspx',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-images.farfetch-contents.com%2F21%2F54%2F29%2F78%2F21542978_51590537_600.jpg&tbnid=J7f5zBzr7JAvAM&imgrefurl=https%3A%2F%2Fwww.farfetch.com%2Fshopping%2Fwomen%2Fnike-air-max-97-silver-aqua-sneakers-item-21542978.aspx&docid=IDW89tUIKK5gZM&w=600&h=801',
				position: 33,
			},
			{
				title: 'Nike Logo History And Evolution: A $34.8 Billion Image',
				imageUrl: 'https://fabrikbrands.com/wp-content/uploads/Nike-Logo-History-1-1-1155x770.png',
				imageWidth: 1155,
				imageHeight: 770,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMfEzybaKq8UI9uyyh4n_RKa4WPg9jc9wYQ&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'Fabrik Brands',
				domain: 'fabrikbrands.com',
				link: 'https://fabrikbrands.com/branding-matters/logofile/nike-logo-history-and-evolution/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffabrikbrands.com%2Fwp-content%2Fuploads%2FNike-Logo-History-1-1-1155x770.png&tbnid=xCyJPv3K095iBM&imgrefurl=https%3A%2F%2Ffabrikbrands.com%2Fbranding-matters%2Flogofile%2Fnike-logo-history-and-evolution%2F&docid=76kI6AqS5GUItM&w=1155&h=770',
				position: 34,
			},
			{
				title: 'Nike Joyride. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg',
				imageWidth: 828,
				imageHeight: 1000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqppJCoMmANutVFq_lJ8PChoDOQq4EMO2QyA&s',
				thumbnailWidth: 204,
				thumbnailHeight: 247,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/joyride',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ff_auto%2Ccs_srgb%2Fw_1536%2Cc_limit%2Fg1ljiszo4qhthfpluzbt%2Fnike-joyride.jpg&tbnid=4Cop6E9L-hx9lM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fjoyride&docid=CE7yQfkmOGU6TM&w=828&h=1000',
				position: 35,
			},
			{
				title: "Women's Nike Shoes, Air Max | Shoe Carnival",
				imageUrl: 'https://cdn.media.amplience.net/i/scvl/178740_408244_1?fmt=auto&w=640',
				imageWidth: 640,
				imageHeight: 543,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyxlmNkOUwi9cZ_3CpgKzkBe0DpHe3JxItQ&s',
				thumbnailWidth: 244,
				thumbnailHeight: 207,
				source: 'Shoe Carnival',
				domain: 'www.shoecarnival.com',
				link: 'https://www.shoecarnival.com/nike/womens',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.media.amplience.net%2Fi%2Fscvl%2F178740_408244_1%3Ffmt%3Dauto%26w%3D640&tbnid=pPAAJHw30fsIGM&imgrefurl=https%3A%2F%2Fwww.shoecarnival.com%2Fnike%2Fwomens&docid=OybKsgBHXV2tjM&w=640&h=543',
				position: 36,
			},
			{
				title: "Original Nike Air Max 270, Men's Casual Shoes with Max Air ...",
				imageUrl:
					'https://i5.walmartimages.com/seo/Nike-Air-Max-270-Mens-Casual-Shoes-Black-Anthracite-White-ah8050-002_1966979c-b224-4ea7-8025-df596194568d.8587ee80fb71955ce05135c5f6bbaca1.jpeg',
				imageWidth: 2483,
				imageHeight: 1954,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsg_7jVDDSHKFMvK_PhZOOEQkeD2XOai6ojA&s',
				thumbnailWidth: 253,
				thumbnailHeight: 199,
				source: 'Walmart',
				domain: 'www.walmart.com',
				link: 'https://www.walmart.com/ip/Nike-Air-Max-270-Mens-Casual-Shoes-Black-Anthracite-White-ah8050-002/970086478',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FNike-Air-Max-270-Mens-Casual-Shoes-Black-Anthracite-White-ah8050-002_1966979c-b224-4ea7-8025-df596194568d.8587ee80fb71955ce05135c5f6bbaca1.jpeg&tbnid=1QDNk5wV8Xp0_M&imgrefurl=https%3A%2F%2Fwww.walmart.com%2Fip%2FNike-Air-Max-270-Mens-Casual-Shoes-Black-Anthracite-White-ah8050-002%2F970086478&docid=52BdSYZXoH6dAM&w=2483&h=1954',
				position: 37,
			},
			{
				title: 'Nike Debuts a Bold Color and Print for This Summer — NIKE, Inc.',
				imageUrl:
					'https://media.about.nike.com/img/d436e535-3c11-4c54-a798-249accc1f071/rg11hh-p01-fa24-rtp-nike-electric-nouveau-sport-product-superiority-ta-oly-hero-pack-v1-r2.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjoyMzQsInRvcCI6MCwid2lkdGgiOjI1MzIsImhlaWdodCI6MTY4OH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%3D%3D&s=da91c4d8d2197eb68971fb1e5ffb5c2f2499638a011b5cea43c1cdd955f51bf3',
				imageWidth: 3840,
				imageHeight: 2560,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKEB542HbBgKDcQHubj7ZYiTiRQhlzfX0EA&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'About Nike',
				domain: 'about.nike.com',
				link: 'https://about.nike.com/en/newsroom/releases/nike-electric-pack-official-images',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.about.nike.com%2Fimg%2Fd436e535-3c11-4c54-a798-249accc1f071%2Frg11hh-p01-fa24-rtp-nike-electric-nouveau-sport-product-superiority-ta-oly-hero-pack-v1-r2.jpg%3Fm%3DeyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjoyMzQsInRvcCI6MCwid2lkdGgiOjI1MzIsImhlaWdodCI6MTY4OH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%253D%253D%26s%3Dda91c4d8d2197eb68971fb1e5ffb5c2f2499638a011b5cea43c1cdd955f51bf3&tbnid=IHz8hBhUFJTROM&imgrefurl=https%3A%2F%2Fabout.nike.com%2Fen%2Fnewsroom%2Freleases%2Fnike-electric-pack-official-images&docid=6wAT2jWjEgbefM&w=3840&h=2560',
				creator: 'Tyler Ashlock',
				position: 38,
			},
			{
				title: 'Nike, Inc. - Wikipedia',
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Old_Nike_logo.jpg/250px-Old_Nike_logo.jpg',
				imageWidth: 250,
				imageHeight: 131,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5MINj7avdgqFUKJVjibu9hp9b1vSzLG-DQ&s',
				thumbnailWidth: 250,
				thumbnailHeight: 131,
				source: 'Wikipedia',
				domain: 'en.wikipedia.org',
				link: 'https://en.wikipedia.org/wiki/Nike,_Inc.',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F94%2FOld_Nike_logo.jpg%2F250px-Old_Nike_logo.jpg&tbnid=ufNuNBULSF2LkM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNike%2C_Inc.&docid=Zzx8r4sJVmLH-M&w=250&h=131',
				position: 39,
			},
			{
				title: 'Nike: Shoes, Apparel & Stories - Apps on Google Play',
				imageUrl:
					'https://play-lh.googleusercontent.com/xW4Qb1KvvxoJc6fDR0GTlGPPD0DHRnHEt8vNGH1syTNSJ4U-YUNuwVgCKAkUgrcOeU8',
				imageWidth: 512,
				imageHeight: 512,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Xp2QYtMaVkoImg2aVwoh7ObMZAva6hBtmQ&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Google Play',
				domain: 'play.google.com',
				link: 'https://play.google.com/store/apps/details?id=com.nike.omega',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2FxW4Qb1KvvxoJc6fDR0GTlGPPD0DHRnHEt8vNGH1syTNSJ4U-YUNuwVgCKAkUgrcOeU8&tbnid=Cdgp7lohX2skfM&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nike.omega&docid=fXC8pMr_sk-4ZM&w=512&h=512',
				position: 40,
			},
			{
				title: 'Cut in half: Nike Air Max 1 Review | RunRepeat',
				imageUrl:
					'https://cdn.runrepeat.com/storage/gallery/product_primary/32420/nike-air-max-1-lab-test-and-review-2-21529589-main.jpg',
				imageWidth: 3000,
				imageHeight: 2000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2s18ijT44OYXsMnCC8-js_MpZGukw1Y2GA&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'RunRepeat',
				domain: 'runrepeat.com',
				link: 'https://runrepeat.com/nike-air-max-1',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.runrepeat.com%2Fstorage%2Fgallery%2Fproduct_primary%2F32420%2Fnike-air-max-1-lab-test-and-review-2-21529589-main.jpg&tbnid=FHiQOuyuyByh8M&imgrefurl=https%3A%2F%2Frunrepeat.com%2Fnike-air-max-1&docid=j8P6AjgLusP2CM&w=3000&h=2000',
				position: 41,
			},
			{
				title: 'Nike Stock (NKE): Analyzing 3 Key Suppliers',
				imageUrl:
					'https://www.investopedia.com/thmb/a5CbbLNTLXc9uXWIG6t2xMbcjJQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_Nike_GettyImages-1694835486-8636733d8880418689ea55ba80c21704.jpg',
				imageWidth: 1500,
				imageHeight: 1000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXGHKabMt2CG8TvZS548pwMFKOsAsS1dXbQ&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'Investopedia',
				domain: 'www.investopedia.com',
				link: 'https://www.investopedia.com/articles/markets/051416/nike-stock-analyzing-5-key-suppliers-nke.asp',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.investopedia.com%2Fthmb%2Fa5CbbLNTLXc9uXWIG6t2xMbcjJQ%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FINV_Nike_GettyImages-1694835486-8636733d8880418689ea55ba80c21704.jpg&tbnid=oaOqAk4KoB7ktM&imgrefurl=https%3A%2F%2Fwww.investopedia.com%2Farticles%2Fmarkets%2F051416%2Fnike-stock-analyzing-5-key-suppliers-nke.asp&docid=M10UjL0HBzqc7M&w=1500&h=1000',
				position: 42,
			},
			{
				title: 'Nike Air Force 1 \'07 LV8 "White/Black" Sneakers | White ...',
				imageUrl: 'https://cdn-images.farfetch-contents.com/19/30/28/51/19302851_42366110_600.jpg',
				imageWidth: 600,
				imageHeight: 801,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGDZBfJ63FksQXhvVl0YVp5Scwzae4Q4fhg&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Farfetch',
				domain: 'www.farfetch.com',
				link: 'https://www.farfetch.com/shopping/women/nike-air-force-1-07-lv8-whiteblack-sneakers-item-19302851.aspx',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-images.farfetch-contents.com%2F19%2F30%2F28%2F51%2F19302851_42366110_600.jpg&tbnid=4LnKruk7lAFWLM&imgrefurl=https%3A%2F%2Fwww.farfetch.com%2Fshopping%2Fwomen%2Fnike-air-force-1-07-lv8-whiteblack-sneakers-item-19302851.aspx&docid=_YP1YZnnn0APRM&w=600&h=801',
				position: 43,
			},
			{
				title: 'Nike Shoes for Women, Athletic Sneakers | Shoe Carnival',
				imageUrl: 'https://cdn.media.amplience.net/i/scvl/178735_396397_1?fmt=auto&w=640',
				imageWidth: 640,
				imageHeight: 543,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYwdDGne7ig-UoVfqql60T-kcVvq6vHXYug&s',
				thumbnailWidth: 244,
				thumbnailHeight: 207,
				source: 'Shoe Carnival',
				domain: 'www.shoecarnival.com',
				link: 'https://www.shoecarnival.com/nike/womens/athletics_and_sneakers',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.media.amplience.net%2Fi%2Fscvl%2F178735_396397_1%3Ffmt%3Dauto%26w%3D640&tbnid=6PGi9vFSTR33SM&imgrefurl=https%3A%2F%2Fwww.shoecarnival.com%2Fnike%2Fwomens%2Fathletics_and_sneakers&docid=wcTKEYhSv689KM&w=640&h=543',
				position: 44,
			},
			{
				title: 'Nike Air Force 1 Shoes. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/w_1800,h_1000,c_fill,f_auto/971d2aa4-8e30-4af6-8dba-f621f044cc47/sp26-go-m-a-d-vini-jr-pe-launch-pw-header-nike-com-mens-g12y.jpg',
				imageWidth: 1800,
				imageHeight: 1000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQehcRlvnA595n9cKM_M94f9FW8peJi-IHA&s',
				thumbnailWidth: 301,
				thumbnailHeight: 167,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Fw_1800%2Ch_1000%2Cc_fill%2Cf_auto%2F971d2aa4-8e30-4af6-8dba-f621f044cc47%2Fsp26-go-m-a-d-vini-jr-pe-launch-pw-header-nike-com-mens-g12y.jpg&tbnid=NZY_bzeuB7U74M&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fw%2Fair-force-1-shoes-5sj3yzy7ok&docid=aa-AmJL1VTMv8M&w=1800&h=1000',
				position: 45,
			},
			{
				title: 'The 7 Best Nike Running Shoes of 2026 - Running Shoe Reviews',
				imageUrl:
					'https://hips.hearstapps.com/hmg-prod/images/run-nike-vomero-group-004-68eeaf72955a2.jpg?crop=0.668xw:1.00xh;0.0748xw,0&resize=640:*',
				imageWidth: 640,
				imageHeight: 639,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi_ot-lGOlhmvQjJ0bjcYI9fAFRmfGQ-CeA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 224,
				source: "Runner's World",
				domain: 'www.runnersworld.com',
				link: 'https://www.runnersworld.com/gear/a22843945/best-nike-running-shoes/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Frun-nike-vomero-group-004-68eeaf72955a2.jpg%3Fcrop%3D0.668xw%3A1.00xh%3B0.0748xw%2C0%26resize%3D640%3A*&tbnid=sckcJzR_WZ3BDM&imgrefurl=https%3A%2F%2Fwww.runnersworld.com%2Fgear%2Fa22843945%2Fbest-nike-running-shoes%2F&docid=q-KmZFFZgpffSM&w=640&h=639',
				position: 46,
			},
			{
				title: 'Nike Air Force 1 Shoes. Nike.com',
				imageUrl:
					'https://static.nike.com/a/images/w_960,h_960,c_fill,f_auto/70700175-83a7-4efc-8c0d-36e817990e03/image.jpg',
				imageWidth: 960,
				imageHeight: 960,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpG8Z_2MCysNDnN2pE2ogAOHHWv--fe3ELA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Nike',
				domain: 'www.nike.com',
				link: 'https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Fw_960%2Ch_960%2Cc_fill%2Cf_auto%2F70700175-83a7-4efc-8c0d-36e817990e03%2Fimage.jpg&tbnid=bSCBzjxs_jkvuM&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fw%2Fair-force-1-shoes-5sj3yzy7ok&docid=aa-AmJL1VTMv8M&w=960&h=960',
				position: 47,
			},
			{
				title: 'Nike Logo and symbol, meaning, history, PNG, brand',
				imageUrl: 'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png',
				imageWidth: 3840,
				imageHeight: 2160,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUazts9CpKPGp8eMNywU6JtfJxDeGhblc-lA&s',
				thumbnailWidth: 300,
				thumbnailHeight: 168,
				source: '1000 Logos',
				domain: '1000logos.net',
				link: 'https://1000logos.net/nike-logo/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F03%2FNike-Logo-1971-now.png&tbnid=i4W2F5r7u2odAM&imgrefurl=https%3A%2F%2F1000logos.net%2Fnike-logo%2F&docid=PcTH3Zug5m2G1M&w=3840&h=2160',
				position: 48,
			},
			{
				title: 'Cut in half: Nike Dunk High Review | RunRepeat',
				imageUrl:
					'https://cdn.runrepeat.com/storage/gallery/product_content/25433/nike-dunk-high-ss-21541680-main.jpg',
				imageWidth: 3000,
				imageHeight: 2000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FF0QmkuthOWihoFan3DqdAN0uLvKsUvi_Q&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'RunRepeat',
				domain: 'runrepeat.com',
				link: 'https://runrepeat.com/nike-dunk-high',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.runrepeat.com%2Fstorage%2Fgallery%2Fproduct_content%2F25433%2Fnike-dunk-high-ss-21541680-main.jpg&tbnid=DRHXYP3awiHkiM&imgrefurl=https%3A%2F%2Frunrepeat.com%2Fnike-dunk-high&docid=DRI72ezLus5hzM&w=3000&h=2000',
				position: 49,
			},
			{
				title: "Nike Men's Air Max Excee Running Athletic Sneakers - Walmart.com",
				imageUrl:
					'https://i5.walmartimages.com/seo/Nike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers_628445db-e7e1-466a-ba0a-6480efe0d3cc.d2da155e97ab4d1508998663ac10fd4e.jpeg',
				imageWidth: 1500,
				imageHeight: 2000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZWoPMV90I_doUJ_DefUr3F7S7B0PMfNPtw&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: "Nike Men's Air Max Excee Running Athletic Sneakers - Walmart.com",
				domain: 'www.walmart.com',
				link: 'https://www.walmart.com/ip/Nike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers/1588133349',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FNike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers_628445db-e7e1-466a-ba0a-6480efe0d3cc.d2da155e97ab4d1508998663ac10fd4e.jpeg&tbnid=7aM6zqYMsKDAwM&imgrefurl=https%3A%2F%2Fwww.walmart.com%2Fip%2FNike-Men-s-Air-Max-Excee-Running-Athletic-Sneakers%2F1588133349&docid=HgZu0QW4JXdRGM&w=1500&h=2000',
				position: 50,
			},
		],
	},
	adidas: {
		searchParameters: {
			q: 'adidas',
			gl: 'us',
			hl: 'en',
			type: 'images',
			num: 100,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		images: [
			{
				title: 'adidas (@adidasPH) • Facebook',
				imageUrl: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064975680375',
				imageWidth: 800,
				imageHeight: 800,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Facebook',
				domain: 'www.facebook.com',
				link: 'https://www.facebook.com/adidasPH/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064975680375&tbnid=8Pi9542U3mcf7M&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FadidasPH%2F&docid=bz849Vdxzn7PxM&w=800&h=800',
				position: 1,
			},
			{
				title: "Adidas Women's Superstar II Sneakers",
				imageUrl:
					'https://cdn11.bigcommerce.com/s-ppsyskcavg/images/stencil/1280x1280/products/75824/291631/JH7032__96396.1736359196.jpg?c=2',
				imageWidth: 1280,
				imageHeight: 1280,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir1TTMlM2E-0fPlswwKhO0U6a69Y1S4dI4g&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: "TYLER'S",
				domain: 'www.tylerstx.com',
				link: 'https://www.tylerstx.com/adidas-womens-superstar-ii-sneakers/?srsltid=AfmBOordxdKPB8ECoHtCrr3LP-pCPMybGG3A-fziYEYL9PUX5dzeurz4',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-ppsyskcavg%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F75824%2F291631%2FJH7032__96396.1736359196.jpg%3Fc%3D2&tbnid=JU8HhzRlx7nQFM&imgrefurl=https%3A%2F%2Fwww.tylerstx.com%2Fadidas-womens-superstar-ii-sneakers%2F%3Fsrsltid%3DAfmBOordxdKPB8ECoHtCrr3LP-pCPMybGG3A-fziYEYL9PUX5dzeurz4&docid=aQ9IYkPbS2go3M&w=1280&h=1280',
				position: 2,
			},
			{
				title: 'Adidas Originals - Wikipedia',
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Original_Adidas_logo.svg',
				imageWidth: 800,
				imageHeight: 778,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemwNAtf_se9j3xeaboEVW0uSiQ57mBAfd3w&s',
				thumbnailWidth: 228,
				thumbnailHeight: 221,
				source: 'Wikipedia',
				domain: 'en.wikipedia.org',
				link: 'https://en.wikipedia.org/wiki/Adidas_Originals',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa8%2FOriginal_Adidas_logo.svg&tbnid=YnnwJI-vGzYHxM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAdidas_Originals&docid=crfWb7g2lOGJDM&w=800&h=778',
				position: 3,
			},
			{
				title: 'Samba OG Shoes',
				imageUrl:
					'https://assets.adidas.com/videos/w_600,f_auto,q_auto/3c259bcd6e2441048460d2e0a3d32123_d98c/Samba_OG_Shoes_White_ID0478_video.jpg',
				imageWidth: 600,
				imageHeight: 338,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxmZ-KXUI2kJNgM3x9tC7K2Se3p7hyed1hg&s',
				thumbnailWidth: 299,
				thumbnailHeight: 168,
				source: 'adidas Samba OG Sneakers - White | Free Shipping with adiClub',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/samba-og-shoes/ID0478.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fvideos%2Fw_600%2Cf_auto%2Cq_auto%2F3c259bcd6e2441048460d2e0a3d32123_d98c%2FSamba_OG_Shoes_White_ID0478_video.jpg&tbnid=yhMoGWuiCeCBSM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fsamba-og-shoes%2FID0478.html&docid=pZiVdtumC-bhrM&w=600&h=338',
				position: 4,
			},
			{
				title: 'adidas Originals Campus 00s Grey Three & Cloud White Shoes',
				imageUrl:
					'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/adidas-Originals-Campus-00s-Grey-Three-%26-Cloud-White-Shoes-_384561-front-US.jpg',
				imageWidth: 530,
				imageHeight: 630,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOtVDu00JZZk84-_bP_4g_ueKKSug3cf_yw&s',
				thumbnailWidth: 206,
				thumbnailHeight: 245,
				source: 'Zumiez',
				domain: 'www.zumiez.com',
				link: 'https://www.zumiez.com/adidas-originals-campus-00s-grey-three-and-cloud-white-shoes.html?srsltid=AfmBOopdhAQvURPBrY08lzIwn0TsoUDSSElzCk0w_htP9JXMwx8KgMwf',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fscene7.zumiez.com%2Fis%2Fimage%2Fzumiez%2Fproduct_main_medium%2Fadidas-Originals-Campus-00s-Grey-Three-%2526-Cloud-White-Shoes-_384561-front-US.jpg&tbnid=vRt6ZjE6ij99eM&imgrefurl=https%3A%2F%2Fwww.zumiez.com%2Fadidas-originals-campus-00s-grey-three-and-cloud-white-shoes.html%3Fsrsltid%3DAfmBOopdhAQvURPBrY08lzIwn0TsoUDSSElzCk0w_htP9JXMwx8KgMwf&docid=0xZGbc0qxw2eXM&w=530&h=630',
				position: 5,
			},
			{
				title: "Men's White Grand Court 2.0 Sneakers",
				imageUrl:
					'https://assets.adidas.com/images/w_600,f_auto,q_auto/6e7885e14f144b998c75368fcd5ececf_9366/Grand_Court_2.0_Shoes_White_GW9195_HM1.jpg',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPm64x2pprT-pE-mI7fNwVhDROThOg-Ws5Qg&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/grand-court-2.0-shoes/GW9195.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F6e7885e14f144b998c75368fcd5ececf_9366%2FGrand_Court_2.0_Shoes_White_GW9195_HM1.jpg&tbnid=RsqIG9h5NgAhqM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fgrand-court-2.0-shoes%2FGW9195.html&docid=srQy4DTbwVl01M&w=600&h=600',
				position: 6,
			},
			{
				title: 'Handball Spezial Shoes',
				imageUrl:
					'https://assets.adidas.com/images/w_600,f_auto,q_auto/cbf96f70d8b54fb7a91c22b8d5edd07d_9366/Handball_Spezial_Shoes_Brown_IF6490_01_00_standard.jpg',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvP6awlw4hEJG8Au9-GQzg0zZ87o7losDnw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/handball-spezial-shoes/IF6490.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2Fcbf96f70d8b54fb7a91c22b8d5edd07d_9366%2FHandball_Spezial_Shoes_Brown_IF6490_01_00_standard.jpg&tbnid=s-xuM0SLat_yiM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fhandball-spezial-shoes%2FIF6490.html&docid=5H4vaNiHbyx9vM&w=600&h=600',
				position: 7,
			},
			{
				title: "adidas Campus '00s Athletic Shoe - Core Black / Cloud White ...",
				imageUrl: 'https://images.journeys.com/images/products/1_729184_FS.JPG',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQcY8PIv6WPBhylhrjy73DehIhtkGew9y7A&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Journeys',
				domain: 'www.journeys.com',
				link: 'https://www.journeys.com/product/adidas-campus-00s-athletic-shoe-core-black-cloud-white-off-white-437223?srsltid=AfmBOopLA2vZoJWRkSfT-nOeK_ZezW4A8SvbvReeb33EswWYPrD4PVu7',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.journeys.com%2Fimages%2Fproducts%2F1_729184_FS.JPG&tbnid=5rLBdsSaVVq3BM&imgrefurl=https%3A%2F%2Fwww.journeys.com%2Fproduct%2Fadidas-campus-00s-athletic-shoe-core-black-cloud-white-off-white-437223%3Fsrsltid%3DAfmBOopLA2vZoJWRkSfT-nOeK_ZezW4A8SvbvReeb33EswWYPrD4PVu7&docid=JUT5GxwRd_S2uM&w=600&h=600',
				position: 8,
			},
			{
				title: "Adidas Men's Short-Sleeve Trefoil Logo Graphic T-Shirt ...",
				imageUrl:
					'https://i5.walmartimages.com/seo/Adidas-Men-s-Short-Sleeve-Trefoil-Logo-Graphic-T-Shirt_3360d74d-3d8c-4d27-bfba-e851cdf207f7.a3938871ef7176deebea626b93886a98.jpeg',
				imageWidth: 1334,
				imageHeight: 2002,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsZNLMptXx7kdVCxZTmfLnNxOGXfJUxRNDQ&s',
				thumbnailWidth: 183,
				thumbnailHeight: 275,
				source: 'Walmart',
				domain: 'www.walmart.com',
				link: 'https://www.walmart.com/ip/Adidas-Men-s-Short-Sleeve-Trefoil-Logo-Graphic-T-Shirt/303235664',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FAdidas-Men-s-Short-Sleeve-Trefoil-Logo-Graphic-T-Shirt_3360d74d-3d8c-4d27-bfba-e851cdf207f7.a3938871ef7176deebea626b93886a98.jpeg&tbnid=SBHzgYG-X3hkVM&imgrefurl=https%3A%2F%2Fwww.walmart.com%2Fip%2FAdidas-Men-s-Short-Sleeve-Trefoil-Logo-Graphic-T-Shirt%2F303235664&docid=xyVTqQyUzGVVfM&w=1334&h=2002',
				position: 9,
			},
			{
				title: 'Amazon.com: adidas Campus 00s W, Trainers, Black, (6 Men/7 ...',
				imageUrl: 'https://m.media-amazon.com/images/I/71l7yEM2rlL._AC_UY900_.jpg',
				imageWidth: 1163,
				imageHeight: 900,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7B4Oe9whr8qj3i6hywgEe981SNeNFXsDU_A&s',
				thumbnailWidth: 255,
				thumbnailHeight: 197,
				source: 'Amazon.com',
				domain: 'www.amazon.com',
				link: 'https://www.amazon.com/adidas-campus-00s-Black-38/dp/B0CLP9THN3',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71l7yEM2rlL._AC_UY900_.jpg&tbnid=L9yG6gs5uGsbZM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2Fadidas-campus-00s-Black-38%2Fdp%2FB0CLP9THN3&docid=Y87MXolHiKyveM&w=1163&h=900',
				position: 10,
			},
			{
				title: "Women's Sneakers and Activewear | adidas US",
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/edi_fw25_sambasizeguide_blogthumbnail_fd2aa4bf37.jpg',
				imageWidth: 1200,
				imageHeight: 1420,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvzMHpPegrFHwhmP5o1tUhBGnmAsnUnKGQg&s',
				thumbnailWidth: 206,
				thumbnailHeight: 244,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/women',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Fedi_fw25_sambasizeguide_blogthumbnail_fd2aa4bf37.jpg&tbnid=6EKtWVxEcXNpLM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fwomen&docid=puLUWkkPpx6dqM&w=1200&h=1420',
				position: 11,
			},
			{
				title: 'Galaxy 7 Running Shoes',
				imageUrl:
					'https://assets.adidas.com/images/w_600,f_auto,q_auto/8db7a22fd8a14673a4d95c38624139ca_9366/Galaxy_7_Running_Shoes_Black_ID8765.jpg',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_uK2v4_m2CuCmexluPdZ2pJnAG5kH9TXpg&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/galaxy-7-running-shoes/ID8765.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F8db7a22fd8a14673a4d95c38624139ca_9366%2FGalaxy_7_Running_Shoes_Black_ID8765.jpg&tbnid=p6RvYd4b3KPLfM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fgalaxy-7-running-shoes%2FID8765.html&docid=n5KNYme2wMG0hM&w=600&h=600',
				position: 12,
			},
			{
				title: "Womens adidas Campus '00s Athletic Shoe - Crystal White ...",
				imageUrl: 'https://images.journeys.com/images/products/1_778800_FS_ALT5.JPG',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhT8FuUR_tDz86uLAPrqDy6i9XV9QBzr0uA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Journeys',
				domain: 'www.journeys.com',
				link: 'https://www.journeys.com/product/womens-adidas-campus-00s-athletic-shoe-crystal-white-core-black-437300?srsltid=AfmBOop4O85wbbAiyNtlbzv2Zg3Ojnvhfvrv2f1L7OvkW-GdVhjvyTBN',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.journeys.com%2Fimages%2Fproducts%2F1_778800_FS_ALT5.JPG&tbnid=0uXVRXqnJzNbNM&imgrefurl=https%3A%2F%2Fwww.journeys.com%2Fproduct%2Fwomens-adidas-campus-00s-athletic-shoe-crystal-white-core-black-437300%3Fsrsltid%3DAfmBOop4O85wbbAiyNtlbzv2Zg3Ojnvhfvrv2f1L7OvkW-GdVhjvyTBN&docid=v-CIWykfZo95KM&w=600&h=600',
				position: 13,
			},
			{
				title: 'Originals Sneakers & Clothing | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/orig_ss26_handball_spezial_dec_m_tcc_d_0cb409b378.jpg',
				imageWidth: 800,
				imageHeight: 1067,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiKunL2cnAxCFFTDLmFgyNnxPzUTXL4tuaQ&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/originals',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Forig_ss26_handball_spezial_dec_m_tcc_d_0cb409b378.jpg&tbnid=ghNCDZdVgVLXGM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Foriginals&docid=8SkOC9klYp5FmM&w=800&h=1067',
				position: 14,
			},
			{
				title: 'Adidas Logo and symbol, meaning, history, PNG, brand',
				imageUrl: 'https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg',
				imageWidth: 1280,
				imageHeight: 720,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96JV-lrmp-BmIoG5SVmxxLrMYPkZ_bGvnBQ&s',
				thumbnailWidth: 300,
				thumbnailHeight: 168,
				source: '1000 Logos',
				domain: '1000logos.net',
				link: 'https://1000logos.net/adidas-logo/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2019%2F06%2FAdidas-Logo-1991.jpg&tbnid=Gco3pyXRcOp6VM&imgrefurl=https%3A%2F%2F1000logos.net%2Fadidas-logo%2F&docid=1KCExiVPStk-8M&w=1280&h=720',
				position: 15,
			},
			{
				title: 'Campus 00s Shoes',
				imageUrl:
					'https://assets.adidas.com/videos/w_600,f_auto,q_auto/5c11ba9c973f406babda0275f7a7ae7b_d98c/Campus_00s_Shoes_Black_HQ8708_video.jpg',
				imageWidth: 600,
				imageHeight: 338,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylrZRLcCZ0fQFnmQSAnRz1qIg4SePJi2wBA&s',
				thumbnailWidth: 299,
				thumbnailHeight: 168,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/campus-00s-shoes/HQ8708.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fvideos%2Fw_600%2Cf_auto%2Cq_auto%2F5c11ba9c973f406babda0275f7a7ae7b_d98c%2FCampus_00s_Shoes_Black_HQ8708_video.jpg&tbnid=adQckfD5yOlMVM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fcampus-00s-shoes%2FHQ8708.html&docid=btajr7vJTE87_M&w=600&h=338',
				position: 16,
			},
			{
				title: 'adidas Shoes, Sneakers & Slides | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/shoes_men_tcc_d_44a809233a.jpg',
				imageWidth: 800,
				imageHeight: 1067,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCv9j_s6gzQrvt8JRENbm4HJu__3jQL5jALA&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/shoes',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Fshoes_men_tcc_d_44a809233a.jpg&tbnid=rNxPJe_6IQgsCM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fshoes&docid=h-slIzJXRo7XEM&w=800&h=1067',
				position: 17,
			},
			{
				title: 'Adidas - Wikipedia',
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg',
				imageWidth: 800,
				imageHeight: 475,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BEaElgPO73IRuJEuEWiu8xLiZKsswpdy9A&s',
				thumbnailWidth: 291,
				thumbnailHeight: 173,
				source: 'Wikipedia',
				domain: 'en.wikipedia.org',
				link: 'https://en.wikipedia.org/wiki/Adidas',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F1b%2FAdidas_2022_logo.svg&tbnid=c1E8QfkeNIWDiM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAdidas&docid=jiWLx5Hit80izM&w=800&h=475',
				position: 18,
			},
			{
				title: 'adidas (@adidasUS) • Facebook',
				imageUrl: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064334456018',
				imageWidth: 1080,
				imageHeight: 1080,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqLhEi62oJ7lzRp-TNp2gCDXaKlhzQKz7cw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Facebook',
				domain: 'www.facebook.com',
				link: 'https://www.facebook.com/adidasUS/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064334456018&tbnid=Uc__R8r-dnkTDM&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FadidasUS%2F&docid=mN_XRoiBsSR3PM&w=1080&h=1080',
				position: 19,
			},
			{
				title: 'adidas Grand Court Sneakers - Black | Free Shipping with adiClub',
				imageUrl:
					'https://assets.adidas.com/images/w_600,f_auto,q_auto/ee970571606246058c1ad7850cc55f09_9366/GRAND_COURT_2.0_SHOES_Black_JR0546_HM1.jpg',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzJILg7XE3XJpVaONnpzBpz3Ssjw8S68xFQ&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/grand-court-shoes/GW9196.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2Fee970571606246058c1ad7850cc55f09_9366%2FGRAND_COURT_2.0_SHOES_Black_JR0546_HM1.jpg&tbnid=xuAlWu_ab2JiAM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fgrand-court-shoes%2FGW9196.html&docid=CQ5bfKjW2Eoj7M&w=600&h=600',
				position: 20,
			},
			{
				title: 'Cut in half: Adidas Campus 00S Review | RunRepeat',
				imageUrl:
					'https://cdn.runrepeat.com/storage/gallery/product_content/39602/adidas-campus-00-s-forefoot-stack-2-21229473-main.jpg',
				imageWidth: 3000,
				imageHeight: 2000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LLKGAMzECClKBY_OevU3eX_eh-jBsXXGoQ&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'RunRepeat',
				domain: 'runrepeat.com',
				link: 'https://runrepeat.com/adidas-campus-00s',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.runrepeat.com%2Fstorage%2Fgallery%2Fproduct_content%2F39602%2Fadidas-campus-00-s-forefoot-stack-2-21229473-main.jpg&tbnid=y_mEisdrrmIneM&imgrefurl=https%3A%2F%2Frunrepeat.com%2Fadidas-campus-00s&docid=RgFz7ih3p627NM&w=3000&h=2000',
				position: 21,
			},
			{
				title: 'adidas Shoes, Sneakers & Slides | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/shoes_kids_tcc_d_400df13114.jpg',
				imageWidth: 800,
				imageHeight: 1067,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFg3QU_Rj3J572zgpnOtb6Zw9_QjStafiG0Q&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/shoes',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Fshoes_kids_tcc_d_400df13114.jpg&tbnid=oLvChLl6vmpkLM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fshoes&docid=h-slIzJXRo7XEM&w=800&h=1067',
				position: 22,
			},
			{
				title: 'Adidas Logo History and Evolution | Tailor Brands',
				imageUrl:
					'https://www.tailorbrands.com/wp-content/uploads/2021/09/Adidas-mountain-logo.jpg',
				imageWidth: 900,
				imageHeight: 350,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiZMGN8ZLJek9UD4p_v5O8j-RkSIEoNMFZQ&s',
				thumbnailWidth: 360,
				thumbnailHeight: 140,
				source: 'Tailor Brands',
				domain: 'www.tailorbrands.com',
				link: 'https://www.tailorbrands.com/blog/adidas-logo',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tailorbrands.com%2Fwp-content%2Fuploads%2F2021%2F09%2FAdidas-mountain-logo.jpg&tbnid=ef2z4xCz8IorJM&imgrefurl=https%3A%2F%2Fwww.tailorbrands.com%2Fblog%2Fadidas-logo&docid=TL6ASuZ5IxwIkM&w=900&h=350',
				position: 23,
			},
			{
				title: 'Originals Sneakers & Clothing | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_1,fl_lossy/if_w_gt_800,w_800/orig_ss26_handball_spezial_dec_m_tcc_d_0cb409b378.jpg',
				imageWidth: 800,
				imageHeight: 1067,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r42guMraEpk-QiI8-Kdlpm0aGT-LtQrSoA&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/originals',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_1%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Forig_ss26_handball_spezial_dec_m_tcc_d_0cb409b378.jpg&tbnid=Ttv57F71JhjO2M&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Foriginals&docid=8SkOC9klYp5FmM&w=800&h=1067',
				position: 24,
			},
			{
				title: 'The Best adidas Sneaker Collaborations of 2024 | FTSHP blog',
				imageUrl: 'https://www.footshop.cz/blog/wp-content/uploads/2025/01/001-Titulka.jpg',
				imageWidth: 1920,
				imageHeight: 1280,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nbhy_F5-4FBkVzdNFfOmawsYYdgdjnJTwQ&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'Footshop',
				domain: 'www.footshop.eu',
				link: 'https://www.footshop.eu/blog/the-best-adidas-sneaker-collaborations-of-2024/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.footshop.cz%2Fblog%2Fwp-content%2Fuploads%2F2025%2F01%2F001-Titulka.jpg&tbnid=pXM1ILTH3kT70M&imgrefurl=https%3A%2F%2Fwww.footshop.eu%2Fblog%2Fthe-best-adidas-sneaker-collaborations-of-2024%2F&docid=ALbNV6uub8MIjM&w=1920&h=1280',
				copyright: '© Katerina Zidkova, All Rights Reserved',
				creator: 'Katerina Zidkova',
				credit: 'Katerina Zidkova',
				position: 25,
			},
			{
				title: 'Adidas Logo History And Meaning: Exploring The Adidas Symbol',
				imageUrl: 'https://fabrikbrands.com/wp-content/uploads/Adidas-Logo-1-scaled-1155x770.jpg',
				imageWidth: 1155,
				imageHeight: 770,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuDxoR0dzVZx2cxu8wN5EKSpV_rH2r7SADg&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'Fabrik Brands',
				domain: 'fabrikbrands.com',
				link: 'https://fabrikbrands.com/branding-matters/logofile/adidas-logo-history-and-meaning/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffabrikbrands.com%2Fwp-content%2Fuploads%2FAdidas-Logo-1-scaled-1155x770.jpg&tbnid=J_adRvXXFAtabM&imgrefurl=https%3A%2F%2Ffabrikbrands.com%2Fbranding-matters%2Flogofile%2Fadidas-logo-history-and-meaning%2F&docid=RUizMKPe0UGF5M&w=1155&h=770',
				position: 26,
			},
			{
				title: 'adidas Campus 00s Core Black HQ8708 at PRM US',
				imageUrl: 'https://img2.ans-media.com/i/840x1260/SS23-OBU0KM-99X_F1.webp?v=1732045578',
				imageWidth: 840,
				imageHeight: 1260,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvIiHrpaWyfwROjJXo2zugrdNev7AGtrEsg&s',
				thumbnailWidth: 183,
				thumbnailHeight: 275,
				source: 'PRM.com',
				domain: 'prm.com',
				link: 'https://prm.com/us/p/adidas-campus-00s-core-black-hq8708-13425',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg2.ans-media.com%2Fi%2F840x1260%2FSS23-OBU0KM-99X_F1.webp%3Fv%3D1732045578&tbnid=QhzWbwv4zqJQKM&imgrefurl=https%3A%2F%2Fprm.com%2Fus%2Fp%2Fadidas-campus-00s-core-black-hq8708-13425&docid=X0yxsINTOQtVpM&w=840&h=1260',
				position: 27,
			},
			{
				title: 'Buy adidas Black/White Grand Court 2.0 Trainers from Next USA',
				imageUrl:
					'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D32239s.jpg?im=Resize,width=750',
				imageWidth: 750,
				imageHeight: 1000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurjf0anoHrHzAMrsyjqvVu1HkbhN09gS3ag&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Next US',
				domain: 'www.next.us',
				link: 'https://www.next.us/en/style/su192211/d32239',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2F3_4Ratio%2Fproduct%2Flge%2FD32239s.jpg%3Fim%3DResize%2Cwidth%3D750&tbnid=26orpiwXcl-vRM&imgrefurl=https%3A%2F%2Fwww.next.us%2Fen%2Fstyle%2Fsu192211%2Fd32239&docid=_yM-3lM8LvK9MM&w=750&h=1000',
				position: 28,
			},
			{
				title: "Men's adidas Originals Sneakers | adidas US",
				imageUrl:
					'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ce8611e9b0a4772b932c8b7fc1d6bae_9366/HANDBALL_SPEZIAL_SHOES_Grey_IH6508_00_plp_standard.jpg',
				imageWidth: 383,
				imageHeight: 383,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdSqXgB7JldiYLfA__u2wY5pji_KDQx3Usw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/men-originals-athletic_sneakers',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_383%2Ch_383%2Cf_auto%2Cq_auto%2Cfl_lossy%2Cc_fill%2Cg_auto%2F4ce8611e9b0a4772b932c8b7fc1d6bae_9366%2FHANDBALL_SPEZIAL_SHOES_Grey_IH6508_00_plp_standard.jpg&tbnid=Qt_Cg2L0EZfyPM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fmen-originals-athletic_sneakers&docid=Iv9Hvx5gtOLOwM&w=383&h=383',
				position: 29,
			},
			{
				title: 'Adidas Shoes, Sneakers & Accessories | Shoe Carnival',
				imageUrl: 'https://cdn.media.amplience.net/i/scvl/162333_356783_1?fmt=auto&w=640',
				imageWidth: 640,
				imageHeight: 543,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsncYLOhigasRrW68KiwcgZZX4yuxdTNO3w&s',
				thumbnailWidth: 244,
				thumbnailHeight: 207,
				source: 'Shoe Carnival',
				domain: 'www.shoecarnival.com',
				link: 'https://www.shoecarnival.com/adidas',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.media.amplience.net%2Fi%2Fscvl%2F162333_356783_1%3Ffmt%3Dauto%26w%3D640&tbnid=WX1oKpct54tA8M&imgrefurl=https%3A%2F%2Fwww.shoecarnival.com%2Fadidas&docid=yJvJERuX41T4SM&w=640&h=543',
				position: 30,
			},
			{
				title: 'adidas Shoes, Sneakers & Slides | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_1,fl_lossy/if_w_gt_800,w_800/shoes_men_tcc_d_44a809233a.jpg',
				imageWidth: 800,
				imageHeight: 1067,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYpP4Xx0u33pe9JwhRZ8McB0il0xz4pRnpA&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/shoes',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_1%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Fshoes_men_tcc_d_44a809233a.jpg&tbnid=pscV1PtktGX9EM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fshoes&docid=h-slIzJXRo7XEM&w=800&h=1067',
				position: 31,
			},
			{
				title: 'Grand Court 2.0 Shoes',
				imageUrl:
					'https://assets.adidas.com/images/w_600,f_auto,q_auto/02cd9a97ce874d89ba17ae2b003ebe50_9366/Grand_Court_2.0_Shoes_White_GW6511_01_standard.jpg',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAs-na4PBSVPbjFLi1zM8Y8DliDVeXQXQRw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/grand-court-2.0-shoes/GW6511.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F02cd9a97ce874d89ba17ae2b003ebe50_9366%2FGrand_Court_2.0_Shoes_White_GW6511_01_standard.jpg&tbnid=m4k5cSAXMu-xAM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fgrand-court-2.0-shoes%2FGW6511.html&docid=Mu5D2AZmPdxLjM&w=600&h=600',
				position: 32,
			},
			{
				title: 'Adidas Original SUPERSTAR FOUNDATION Men’s - FTWWHT/CBLACK',
				imageUrl:
					'https://moesportsnyc.com/cdn/shop/products/81AmSw7iCVL._AC_SR700_525_900x.jpg?v=1680729411',
				imageWidth: 700,
				imageHeight: 525,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUWn9QhHcItCrTYXtVQ-YONdLexFln-60PA&s',
				thumbnailWidth: 259,
				thumbnailHeight: 194,
				source: 'Moesports',
				domain: 'moesportsnyc.com',
				link: 'https://moesportsnyc.com/products/adidasoriginalsuperstarfoundationmens-ftwwhtcblack?srsltid=AfmBOopJ4532IFegJQYWGwPuJr5DSnySFQG2MXATiVEM6NVeuxlJ_fug',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmoesportsnyc.com%2Fcdn%2Fshop%2Fproducts%2F81AmSw7iCVL._AC_SR700_525_900x.jpg%3Fv%3D1680729411&tbnid=MM56KltnUpRCFM&imgrefurl=https%3A%2F%2Fmoesportsnyc.com%2Fproducts%2Fadidasoriginalsuperstarfoundationmens-ftwwhtcblack%3Fsrsltid%3DAfmBOopJ4532IFegJQYWGwPuJr5DSnySFQG2MXATiVEM6NVeuxlJ_fug&docid=Jl0y1j1fxpXuQM&w=700&h=525',
				position: 33,
			},
			{
				title: 'Originals Sneakers & Clothing | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_1,fl_lossy/if_w_gt_800,w_800/global_superstar_originals_ss26_launch_hp_navigation_card_teaser_2_d_314cfd03d0.jpg',
				imageWidth: 750,
				imageHeight: 1000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-GL0BfxCsv-EV_rkwhY_C6lc5uA2b1x7Pg&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/originals',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_1%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Fglobal_superstar_originals_ss26_launch_hp_navigation_card_teaser_2_d_314cfd03d0.jpg&tbnid=XlmpN8VkGUYqTM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Foriginals&docid=8SkOC9klYp5FmM&w=750&h=1000',
				position: 34,
			},
			{
				title: 'adidas Originals Campus 00s Orange H03473 | FOOTDISTRICT',
				imageUrl:
					'https://media.footdistrict.com/width/840/src/catalog/product/1/9/19_4066748546657/--/sneakers-adidas-originals-campus-00s-h03473-6.jpg',
				imageWidth: 840,
				imageHeight: 1050,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkdHgl88zkCpMMDMfhlnRjf2Rm9BVKTj_gA&s',
				thumbnailWidth: 201,
				thumbnailHeight: 251,
				source: 'footdistrict',
				domain: 'footdistrict.com',
				link: 'https://footdistrict.com/en/adidas-originals-campus-00s-h03473.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.footdistrict.com%2Fwidth%2F840%2Fsrc%2Fcatalog%2Fproduct%2F1%2F9%2F19_4066748546657%2F--%2Fsneakers-adidas-originals-campus-00s-h03473-6.jpg&tbnid=iFSLPUdb8lu3aM&imgrefurl=https%3A%2F%2Ffootdistrict.com%2Fen%2Fadidas-originals-campus-00s-h03473.html&docid=q0V_Bq8IQnU4PM&w=840&h=1050',
				position: 35,
			},
			{
				title: 'Adidas x Bad Bunny Gazelle Indoor "Off White" Sneakers ...',
				imageUrl: 'https://cdn-images.farfetch-contents.com/23/82/96/93/23829693_53893667_600.jpg',
				imageWidth: 600,
				imageHeight: 801,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hI7E9v_PEmEP2XFo6OIW3D-92LbElId_NQ&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Farfetch',
				domain: 'www.farfetch.com',
				link: 'https://www.farfetch.com/shopping/men/adidas-x-bad-bunny-gazelle-indoor-off-white-sneakers-item-23829693.aspx',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-images.farfetch-contents.com%2F23%2F82%2F96%2F93%2F23829693_53893667_600.jpg&tbnid=poWL38O10bI-XM&imgrefurl=https%3A%2F%2Fwww.farfetch.com%2Fshopping%2Fmen%2Fadidas-x-bad-bunny-gazelle-indoor-off-white-sneakers-item-23829693.aspx&docid=2sI4ny76YwGupM&w=600&h=801',
				position: 36,
			},
			{
				title: 'Cut in half: Adidas Samba OG Review | RunRepeat',
				imageUrl:
					'https://cdn.runrepeat.com/storage/gallery/product_primary/25437/adidas-samba-og-21208178-main.jpg',
				imageWidth: 3000,
				imageHeight: 2000,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUGMepunQFrHNvy3lL7Vt6OUlFAfn7zNpRg&s',
				thumbnailWidth: 275,
				thumbnailHeight: 183,
				source: 'RunRepeat',
				domain: 'runrepeat.com',
				link: 'https://runrepeat.com/adidas-samba-og',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.runrepeat.com%2Fstorage%2Fgallery%2Fproduct_primary%2F25437%2Fadidas-samba-og-21208178-main.jpg&tbnid=2NLv3_oK6nwmeM&imgrefurl=https%3A%2F%2Frunrepeat.com%2Fadidas-samba-og&docid=nbEKInh_pwJJ7M&w=3000&h=2000',
				position: 37,
			},
			{
				title: 'ADIDAS SUPERSTAR ADV - FTWWHT/CBLACK/FTWWHT - KINGSWELL ...',
				imageUrl:
					'https://cdn.shoplightspeed.com/shops/610132/files/63808384/adidas-superstar-adv-ftwwht-cblack-ftwwht.jpg',
				imageWidth: 1536,
				imageHeight: 2048,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKrbPZy5b9vkQs24UY2CXUd_eYWsYavdugA&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'KINGSWELL',
				domain: 'www.kingswell.tv',
				link: 'https://www.kingswell.tv/adidas-superstar-adv-ftwwht-cblack-ftwwht.html?srsltid=AfmBOorAT1KYHfxwxdX8bQ1scJj9cVhUiEA1Ipr-HP2-LNq2KcjBOLsc',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shoplightspeed.com%2Fshops%2F610132%2Ffiles%2F63808384%2Fadidas-superstar-adv-ftwwht-cblack-ftwwht.jpg&tbnid=ZrhQzgfApq6WGM&imgrefurl=https%3A%2F%2Fwww.kingswell.tv%2Fadidas-superstar-adv-ftwwht-cblack-ftwwht.html%3Fsrsltid%3DAfmBOorAT1KYHfxwxdX8bQ1scJj9cVhUiEA1Ipr-HP2-LNq2KcjBOLsc&docid=AIBs85DjH5biBM&w=1536&h=2048',
				position: 38,
			},
			{
				title: "Men's Sneakers | adidas US",
				imageUrl:
					'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5462391d3b5c4987a0e0ded07d44601a_9366/Adizero_EVO_SL_Shoes_Black_KH9858_HM1.jpg',
				imageWidth: 383,
				imageHeight: 383,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_SOspJB2m4VTb9F2UjSMOECjLYawvETyGg&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/men-athletic_sneakers',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_383%2Ch_383%2Cf_auto%2Cq_auto%2Cfl_lossy%2Cc_fill%2Cg_auto%2F5462391d3b5c4987a0e0ded07d44601a_9366%2FAdizero_EVO_SL_Shoes_Black_KH9858_HM1.jpg&tbnid=ighIMQHW_Oo-BM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fmen-athletic_sneakers&docid=YHJ4AMSIHMrBMM&w=383&h=383',
				position: 39,
			},
			{
				title: "Men's Running Shoes | adidas US",
				imageUrl:
					'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/55c5fe7bb851428b85d77e4317cb1efa_9366/Adizero_Adios_Pro_4_Shoes_Yellow_JP6623_HM1.jpg',
				imageWidth: 383,
				imageHeight: 383,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9kaIinQHEw7kXTg8vBjJLHdqVbzOKkuNRw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/men-running-shoes',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_383%2Ch_383%2Cf_auto%2Cq_auto%2Cfl_lossy%2Cc_fill%2Cg_auto%2F55c5fe7bb851428b85d77e4317cb1efa_9366%2FAdizero_Adios_Pro_4_Shoes_Yellow_JP6623_HM1.jpg&tbnid=S7SXuMqRfqVpOM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fmen-running-shoes&docid=BVSM-a2hIE0FQM&w=383&h=383',
				position: 40,
			},
			{
				title: "adidas Men's Sneakers, Slides, and Accessories | Shoe Carnival",
				imageUrl: 'https://i8.amplience.net/s/scvl/180579_398373_SET/1?fmt=auto',
				imageWidth: 1333,
				imageHeight: 1130,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nIx6B5EmlpfYT2YkkHw8s-pZQMLGXqHrSA&s',
				thumbnailWidth: 244,
				thumbnailHeight: 207,
				source: 'Shoe Carnival',
				domain: 'www.shoecarnival.com',
				link: 'https://www.shoecarnival.com/adidas/mens',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi8.amplience.net%2Fs%2Fscvl%2F180579_398373_SET%2F1%3Ffmt%3Dauto&tbnid=XG1a1g524mfrqM&imgrefurl=https%3A%2F%2Fwww.shoecarnival.com%2Fadidas%2Fmens&docid=sLJWrdI5qsmf7M&w=1333&h=1130',
				position: 41,
			},
			{
				title: 'Adidas Samba - Wikipedia',
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Adidas_Samba_OG.jpg',
				imageWidth: 4000,
				imageHeight: 2431,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANaeE2u6d5HKyqYyhkaZ-FMWU0JHsemJGAw&s',
				thumbnailWidth: 288,
				thumbnailHeight: 175,
				source: 'Wikipedia',
				domain: 'en.wikipedia.org',
				link: 'https://en.wikipedia.org/wiki/Adidas_Samba',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffa%2FAdidas_Samba_OG.jpg&tbnid=I9jRhAuHhBh8wM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAdidas_Samba&docid=kwkTmK-DCPMm4M&w=4000&h=2431',
				position: 42,
			},
			{
				title: 'adidas Shoes, Sneakers & Slides | adidas US',
				imageUrl:
					'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/shoes_women_tcc_d_234be42564.jpg',
				imageWidth: 800,
				imageHeight: 1066,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2IvTbm4vLiwzYniJdQPAO9shYddvo_pdlA&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/shoes',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.assets.adidas.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cfl_lossy%2Fif_w_gt_800%2Cw_800%2Fshoes_women_tcc_d_234be42564.jpg&tbnid=33T2D8tYztYt9M&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fshoes&docid=h-slIzJXRo7XEM&w=800&h=1066',
				position: 43,
			},
			{
				title: 'Grand Court 2.0 Shoes',
				imageUrl:
					'https://assets.adidas.com/images/w_600,f_auto,q_auto/00d032dbee184031a51280e88a79b9a4_9366/Grand_Court_2.0_Shoes_Black_JH7243_01_standard.jpg',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBebjq89wxQS5q99C1uYlb10EmxFQMDNc7sw&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/grand-court-2.0-shoes/JH7243.html',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F00d032dbee184031a51280e88a79b9a4_9366%2FGrand_Court_2.0_Shoes_Black_JH7243_01_standard.jpg&tbnid=4dmdJwPaplXYcM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fgrand-court-2.0-shoes%2FJH7243.html&docid=lugnhuzhf1Ij3M&w=600&h=600',
				position: 44,
			},
			{
				title: "Adidas Originals Launches 'Blue Version' Collection",
				imageUrl:
					'https://wwd.com/wp-content/uploads/2021/09/PR-FW21_ORIGINALS_BLUEVERSION_MAINCAMPAIGN_GANNABOGDAN_LOOK1_2.jpg?crop=12px%2C297px%2C2988px%2C1672px&resize=1000%2C563',
				imageWidth: 1000,
				imageHeight: 563,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddbm7joJgwGor6zwgnfbwcHi8_YZ4YP9cEg&s',
				thumbnailWidth: 299,
				thumbnailHeight: 168,
				source: 'WWD',
				domain: 'wwd.com',
				link: 'https://wwd.com/fashion-news/fashion-features/adidas-originals-launches-blue-version-collection-1234908736/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwwd.com%2Fwp-content%2Fuploads%2F2021%2F09%2FPR-FW21_ORIGINALS_BLUEVERSION_MAINCAMPAIGN_GANNABOGDAN_LOOK1_2.jpg%3Fcrop%3D12px%252C297px%252C2988px%252C1672px%26resize%3D1000%252C563&tbnid=EGFE3mUhmlyqwM&imgrefurl=https%3A%2F%2Fwwd.com%2Ffashion-news%2Ffashion-features%2Fadidas-originals-launches-blue-version-collection-1234908736%2F&docid=o2YCAOPayaKKHM&w=1000&h=563',
				position: 45,
			},
			{
				title: "Men's Shoes | adidas US",
				imageUrl:
					'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/Samba_OG_Shoes_White_B75806_00_plp_standard.jpg',
				imageWidth: 383,
				imageHeight: 383,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8yD9YVHBHqYguGOMB4lXLggrCyhKqe-EsA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/men-shoes',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_383%2Ch_383%2Cf_auto%2Cq_auto%2Cfl_lossy%2Cc_fill%2Cg_auto%2F9b983d5bc09a4d4aba39a8bf011869ba_9366%2FSamba_OG_Shoes_White_B75806_00_plp_standard.jpg&tbnid=NUfaKiJyfFmwRM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fmen-shoes&docid=vz-MIhKJpH6E6M&w=383&h=383',
				position: 46,
			},
			{
				title: 'Adidas panelled-design low-top Sneakers | Black | FARFETCH',
				imageUrl: 'https://cdn-images.farfetch-contents.com/19/61/71/89/19617189_44007158_600.jpg',
				imageWidth: 600,
				imageHeight: 801,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9iuEswNyfyNsOBHlk4WLlt91PRHRKcwoeQ&s',
				thumbnailWidth: 194,
				thumbnailHeight: 259,
				source: 'Farfetch',
				domain: 'www.farfetch.com',
				link: 'https://www.farfetch.com/shopping/men/adidas-panelled-design-low-top-sneakers-item-19617189.aspx',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-images.farfetch-contents.com%2F19%2F61%2F71%2F89%2F19617189_44007158_600.jpg&tbnid=hbrgwsPcwuBlRM&imgrefurl=https%3A%2F%2Fwww.farfetch.com%2Fshopping%2Fmen%2Fadidas-panelled-design-low-top-sneakers-item-19617189.aspx&docid=sspgzZajwpqHPM&w=600&h=801',
				position: 47,
			},
			{
				title: "Women's Superstar Shoes | adidas US",
				imageUrl:
					'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8ad195df4ff481d8cb564712ad5f032_9366/Superstar_II_Shoes_Black_KI4171_00_plp_standard.jpg',
				imageWidth: 383,
				imageHeight: 383,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDZctzyiVUs20w0ueDq0A0BFq-cH8t5CPcA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Adidas',
				domain: 'www.adidas.com',
				link: 'https://www.adidas.com/us/women-superstar',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_383%2Ch_383%2Cf_auto%2Cq_auto%2Cfl_lossy%2Cc_fill%2Cg_auto%2Fc8ad195df4ff481d8cb564712ad5f032_9366%2FSuperstar_II_Shoes_Black_KI4171_00_plp_standard.jpg&tbnid=SpBZtR6JY5pvNM&imgrefurl=https%3A%2F%2Fwww.adidas.com%2Fus%2Fwomen-superstar&docid=H6QEfWFcXgkljM&w=383&h=383',
				position: 48,
			},
			{
				title: 'Best Adidas Shoes in 2026',
				imageUrl:
					'https://hips.hearstapps.com/hmg-prod/images/adidas-evo-sl10511-68ffbfe4ef5ec.jpeg?crop=0.308xw:0.462xh;0.333xw,0.518xh&resize=640:*',
				imageWidth: 640,
				imageHeight: 640,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOffzj44XjPlQ5QuBgAzh71xu7xGQBKZovOQ&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: "Runner's World",
				domain: 'www.runnersworld.com',
				link: 'https://www.runnersworld.com/gear/a22170339/best-adidas-shoes/',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fadidas-evo-sl10511-68ffbfe4ef5ec.jpeg%3Fcrop%3D0.308xw%3A0.462xh%3B0.333xw%2C0.518xh%26resize%3D640%3A*&tbnid=vSKXWvG7MXDrsM&imgrefurl=https%3A%2F%2Fwww.runnersworld.com%2Fgear%2Fa22170339%2Fbest-adidas-shoes%2F&docid=lzm3vXiOLVp0UM&w=640&h=640',
				position: 49,
			},
			{
				title: 'adidas Samba OG Athletic Shoe - Core Black / Cloud White ...',
				imageUrl: 'https://images.journeys.com/images/products/1_784192_FS_ALT5.JPG',
				imageWidth: 600,
				imageHeight: 600,
				thumbnailUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6CLgGaycdvlKRSesHAViB4pg62AW_bhEaA&s',
				thumbnailWidth: 225,
				thumbnailHeight: 225,
				source: 'Journeys',
				domain: 'www.journeys.com',
				link: 'https://www.journeys.com/product/adidas-samba-og-athletic-shoe-core-black-cloud-white-gum-437304?srsltid=AfmBOorFFj32djo5qeOxAokxpe2xMKJFmSH6P2mCjE8VXNcrju-SUB-W',
				googleUrl:
					'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.journeys.com%2Fimages%2Fproducts%2F1_784192_FS_ALT5.JPG&tbnid=2w_qu4khWvrjbM&imgrefurl=https%3A%2F%2Fwww.journeys.com%2Fproduct%2Fadidas-samba-og-athletic-shoe-core-black-cloud-white-gum-437304%3Fsrsltid%3DAfmBOorFFj32djo5qeOxAokxpe2xMKJFmSH6P2mCjE8VXNcrju-SUB-W&docid=2s7orXWF78-pKM&w=600&h=600',
				position: 50,
			},
		],
	},
};

export const sampleVideos: Record<string, VideoSearchResult> = {
	nike1: {
		searchParameters: {
			q: 'nike',
			gl: 'us',
			hl: 'en',
			type: 'videos',
			num: 10,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		videos: [
			{
				title: 'Beats x Nike',
				link: 'https://www.youtube.com/nike',
				snippet:
					"Behind the Design · Behind the Hyperboot: A Nike x Hyperice Innovation | Nike · The Nike A'one with A'ja Wilson and Issa Rae | Nike · AIRMAX 1000: The Next ...",
				position: 1,
			},
			{
				title: 'Nike (@nike)',
				link: 'https://www.tiktok.com/@nike?lang=en',
				snippet:
					'Nike (@nike) on TikTok | 42.2M Likes. 8.4M Followers. Just Do It.Watch Nike\'s popular videos: "Fades, draws, slices...", "Bienvenidos al lado ...".',
				position: 2,
			},
			{
				title: "I Tested Nike's Top Secret Shoe",
				link: 'https://www.youtube.com/watch?v=Psp3YarOKVw',
				snippet:
					"I went to Nike's Research Lab to test out four of their secret products Go to https://surfshark.com/boss or use code BOSS at checkout to get ...",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTAJe6EJHWFzDv7cNh5d6HNRKizs6_NNuOCN3NBBEkj50X6u-WAq-oQ&s',
				videoUrl:
					'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQErnjMIMKLBFA3nRNE0YJd7mZiVyNRcIRHIA',
				duration: '13:10',
				source: 'YouTube',
				channel: 'Mrwhosetheboss',
				date: 'Oct 23, 2025',
				position: 3,
			},
			{
				title: "2026 Nike Hoop Summit | Full Men's Game Highlights | April ...",
				link: 'https://www.reddit.com/r/NBA_Draft/comments/1sj5v8u/2026_nike_hoop_summit_full_mens_game_highlights/',
				snippet:
					"2026 Nike Hoop Summit | Full Men's Game Highlights | April 11, 2026. Video. Play. This was a very competitive game through and through. Sandler ...",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jmI4gOqh5kUSeN_KQ6XnsDJ66rFyuA-vnGaO7nxkatk-CvvF8aLzuQ&s',
				duration: '13:49',
				source: 'Reddit',
				channel: 'NBA',
				date: '16 hours ago',
				position: 4,
			},
			{
				title: 'NIKE FREE METCON 7 | Upgrade Or a Step Back?',
				link: 'https://www.youtube.com/watch?v=5a0LsdBW8f0',
				snippet:
					'READ BEST GYM SHOES: https://thatfitfriend.com/best-gym-shoes/ The Nike Free Metcon 7 has been one of the most anticipated training shoes in ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkcOsv7YZXN1ZrebXHXZdywZ6NrDSez2_mgYdst0RjE88ad99sTd19Q&s',
				videoUrl:
					'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcS-knVWuGZrmfglc3whWvkQbyEqVycx_3IWHA',
				duration: '14:48',
				source: 'YouTube',
				channel: 'That Fit Friend',
				date: '1 day ago',
				position: 5,
			},
			{
				title: "2026 Nike Hoop Summit | Full Men's Game Highlights | April ...",
				link: 'https://www.youtube.com/watch?v=MTzHDJi106g',
				snippet:
					'The 2026 Nike Hoop Summit delivered another unforgettable night of elite international basketball, as Team USA battled the World Select Team ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jmI4gOqh5kUSeN_KQ6XnsDJ66rFyuA-vnGaO7nxkatk-CvvF8aLzuQ&s',
				duration: '13:49',
				source: 'YouTube',
				channel: 'NBA',
				date: '16 hours ago',
				position: 6,
			},
			{
				title: 'The Pegasus 42 Has A Problem',
				link: 'https://www.youtube.com/watch?v=PRHuGcq58LE',
				snippet:
					'... Nike running shoe for every type of buyer. Sneaker Links Shop My Favourite Nike Picks V5 RNR https://www.jdoqocy.com/click-101504036 ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLqJxYcM_Gk94uaZB03tiEEUFIkvun8sW9aEfqxkcWgLtywMLZwNkTw&s',
				duration: '11:58',
				source: 'YouTube',
				channel: 'Elliot Page',
				date: '2 days ago',
				position: 7,
			},
			{
				title: 'Nike Sabrina 4 First Look!',
				link: 'https://www.youtube.com/watch?v=TvKR_aQy2Ws',
				snippet:
					"Here's a look at the newly unveiled Nike Sabrina 4! Support me and become a member!",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LKIQpkx9-3FcClL2W-vrn69OaWQhIG5G21sdbPsDqP0QjYeXjpB_Yw&s',
				videoUrl:
					'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTns52eugYqOVzo0icO4c4ZA21OpmcErpjFHw',
				duration: '13:24',
				source: 'YouTube',
				channel: 'The Sole Drop',
				date: '20 hours ago',
				position: 8,
			},
			{
				title: "2026 Nike Hoop Summit | Full Women's Game Highlights ...",
				link: 'https://www.youtube.com/watch?v=TdhD4FW4Lps',
				snippet: "2026 Nike Hoop Summit | Full Women's Game Highlights | April 11, 2026.",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_LoyCx787ioTCg1xaFPjWNKIrpJrGGHA-NAh-ATgyPblDyjJeElSaQ&s',
				duration: '10:26',
				source: 'YouTube',
				channel: 'NBA',
				date: '19 hours ago',
				position: 9,
			},
			{
				title: 'FINALLY! - A Nike You Can Wear All Day For Foot Pain',
				link: 'https://www.youtube.com/watch?v=K4pTYdFL3w0',
				snippet:
					'Real Foot Doctor explains if the Nike Structure Plus is a good daily shoe for foot pain. Learn the secrets of performance shoe & orthotic ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1NNQRAaQ_xHxm3oCaz4CWCSOaHbwdEX0r8t6ki-juq_zyZl6xfgplw&s',
				duration: '15:13',
				source: 'YouTube',
				channel: 'Foot Doctor Zach',
				date: '1 month ago',
				position: 10,
			},
		],
	},
	nike2: {
		searchParameters: {
			q: 'nike',
			gl: 'us',
			hl: 'en',
			type: 'videos',
			num: 10,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		videos: [
			{
				title: 'Beats x Nike',
				link: 'https://www.youtube.com/nike',
				snippet:
					"Behind the Design · Behind the Hyperboot: A Nike x Hyperice Innovation | Nike · The Nike A'one with A'ja Wilson and Issa Rae | Nike · AIRMAX 1000: The Next ...",
				position: 1,
			},
			{
				title: 'Nike (@nike)',
				link: 'https://www.tiktok.com/@nike?lang=en',
				snippet:
					'Nike (@nike) on TikTok | 42.2M Likes. 8.4M Followers. Just Do It.Watch Nike\'s popular videos: "Fades, draws, slices...", "Bienvenidos al lado ...".',
				position: 2,
			},
			{
				title: "I Tested Nike's Top Secret Shoe",
				link: 'https://www.youtube.com/watch?v=Psp3YarOKVw',
				snippet:
					"I went to Nike's Research Lab to test out four of their secret products Go to https://surfshark.com/boss or use code BOSS at checkout to get ...",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTAJe6EJHWFzDv7cNh5d6HNRKizs6_NNuOCN3NBBEkj50X6u-WAq-oQ&s',
				videoUrl:
					'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQErnjMIMKLBFA3nRNE0YJd7mZiVyNRcIRHIA',
				duration: '13:10',
				source: 'YouTube',
				channel: 'Mrwhosetheboss',
				date: 'Oct 23, 2025',
				position: 3,
			},
			{
				title: "2026 Nike Hoop Summit | Full Men's Game Highlights | April ...",
				link: 'https://www.reddit.com/r/NBA_Draft/comments/1sj5v8u/2026_nike_hoop_summit_full_mens_game_highlights/',
				snippet:
					"2026 Nike Hoop Summit | Full Men's Game Highlights | April 11, 2026. Video. Play. This was a very competitive game through and through. Sandler ...",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jmI4gOqh5kUSeN_KQ6XnsDJ66rFyuA-vnGaO7nxkatk-CvvF8aLzuQ&s',
				duration: '13:49',
				source: 'Reddit',
				channel: 'NBA',
				date: '16 hours ago',
				position: 4,
			},
			{
				title: 'NIKE FREE METCON 7 | Upgrade Or a Step Back?',
				link: 'https://www.youtube.com/watch?v=5a0LsdBW8f0',
				snippet:
					'READ BEST GYM SHOES: https://thatfitfriend.com/best-gym-shoes/ The Nike Free Metcon 7 has been one of the most anticipated training shoes in ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkcOsv7YZXN1ZrebXHXZdywZ6NrDSez2_mgYdst0RjE88ad99sTd19Q&s',
				videoUrl:
					'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcS-knVWuGZrmfglc3whWvkQbyEqVycx_3IWHA',
				duration: '14:48',
				source: 'YouTube',
				channel: 'That Fit Friend',
				date: '1 day ago',
				position: 5,
			},
			{
				title: "2026 Nike Hoop Summit | Full Men's Game Highlights | April ...",
				link: 'https://www.youtube.com/watch?v=MTzHDJi106g',
				snippet:
					'The 2026 Nike Hoop Summit delivered another unforgettable night of elite international basketball, as Team USA battled the World Select Team ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jmI4gOqh5kUSeN_KQ6XnsDJ66rFyuA-vnGaO7nxkatk-CvvF8aLzuQ&s',
				duration: '13:49',
				source: 'YouTube',
				channel: 'NBA',
				date: '17 hours ago',
				position: 6,
			},
			{
				title: 'The Pegasus 42 Has A Problem',
				link: 'https://www.youtube.com/watch?v=PRHuGcq58LE',
				snippet:
					'... Nike running shoe for every type of buyer. Sneaker Links Shop My Favourite Nike Picks V5 RNR https://www.jdoqocy.com/click-101504036 ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLqJxYcM_Gk94uaZB03tiEEUFIkvun8sW9aEfqxkcWgLtywMLZwNkTw&s',
				duration: '11:58',
				source: 'YouTube',
				channel: 'Elliot Page',
				date: '2 days ago',
				position: 7,
			},
			{
				title: 'Nike Sabrina 4 First Look!',
				link: 'https://www.youtube.com/watch?v=TvKR_aQy2Ws',
				snippet:
					"Here's a look at the newly unveiled Nike Sabrina 4! Support me and become a member!",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LKIQpkx9-3FcClL2W-vrn69OaWQhIG5G21sdbPsDqP0QjYeXjpB_Yw&s',
				videoUrl:
					'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTns52eugYqOVzo0icO4c4ZA21OpmcErpjFHw',
				duration: '13:24',
				source: 'YouTube',
				channel: 'The Sole Drop',
				date: '20 hours ago',
				position: 8,
			},
			{
				title: "2026 Nike Hoop Summit | Full Women's Game Highlights ...",
				link: 'https://www.youtube.com/watch?v=TdhD4FW4Lps',
				snippet: "2026 Nike Hoop Summit | Full Women's Game Highlights | April 11, 2026.",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_LoyCx787ioTCg1xaFPjWNKIrpJrGGHA-NAh-ATgyPblDyjJeElSaQ&s',
				duration: '10:26',
				source: 'YouTube',
				channel: 'NBA',
				date: '19 hours ago',
				position: 9,
			},
			{
				title: 'FINALLY! - A Nike You Can Wear All Day For Foot Pain',
				link: 'https://www.youtube.com/watch?v=K4pTYdFL3w0',
				snippet:
					'Real Foot Doctor explains if the Nike Structure Plus is a good daily shoe for foot pain. Learn the secrets of performance shoe & orthotic ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1NNQRAaQ_xHxm3oCaz4CWCSOaHbwdEX0r8t6ki-juq_zyZl6xfgplw&s',
				duration: '15:13',
				source: 'YouTube',
				channel: 'Foot Doctor Zach',
				date: '1 month ago',
				position: 10,
			},
		],
	},
	adidas1: {
		searchParameters: {
			q: 'adidas',
			gl: 'us',
			hl: 'en',
			type: 'videos',
			num: 10,
			autocorrect: true,
			page: 1,
			engine: 'google',
		},
		videos: [
			{
				title: 'adidas',
				link: 'https://www.youtube.com/adidas',
				snippet:
					'Welcome to the ultimate sport playlist, where we dive deep into the lives, careers and thoughts of the most iconic athletes on earth!',
				position: 1,
			},
			{
				title: 'adidas',
				link: 'https://www.youtube.com/user/adidas',
				snippet:
					"Zen Flow: adidas Yoga Haven · Welcome to the adidas Yoga Haven! · Improve Flexibility Fast: adidas' 15-Minute Hip Mobility Yoga Flow · Master Balance in 11 ...",
				position: 2,
			},
			{
				title: 'adidas (@adidas)',
				link: 'https://www.tiktok.com/@adidas',
				snippet:
					'adidas (@adidas) on TikTok | 114.6M Likes. 10.8M Followers. Watch adidas\'s popular videos: "why is it always str...", "this comment section...".',
				position: 3,
			},
			{
				title: 'Adidas Hyperboost Edge vs Asics Superblast 3',
				link: 'https://www.youtube.com/watch?v=M535VPgxm0c',
				snippet:
					"The Adidas Hyperboost Edge and Asics Superblast 3 are both new super-trainers launched in 2026 that we've enjoyed testing, but which should ...",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEkR2WORVTSnTW7Lrb79oP1V4kpZKcW-cdqgPhEuoYyIqIvtT9m1ogg&s',
				duration: '8:45',
				source: 'YouTube',
				channel: 'The Run Testers',
				date: '1 day ago',
				position: 4,
			},
			{
				title: 'adidas Badbo 1.0 #weartesters #sneakers #badbunny',
				link: 'https://www.youtube.com/shorts/MliR42M1brQ',
				snippet:
					'Hey Guys! Today we take a detailed look and review at the adidas Badbo 1.0 sneaker for Bad Bunny. Buy at StockX: https://get.aspr.app/SH1gek ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckSgCr28v5Hz6lSE4pMeDldapse_yNtm1e-TTfYldI1QzFLEqQqPymw&s',
				duration: '1:48',
				source: 'YouTube',
				channel: 'WearTesters',
				date: '3 days ago',
				position: 5,
			},
			{
				title: 'adidas Badbo 1.0 Review',
				link: 'https://www.youtube.com/watch?v=8ZEizEPmhPk',
				snippet:
					'Hey Guys! Today we take a detailed look and review at the adidas Badbo 1.0 sneaker for Bad Bunny. Buy at StockX: https://get.aspr.app/SH1gek ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKT1MtHkZdik0fn_Od0Y5aKGMJysSHZlG_eD3DKH0lEJKuGnt9gGrQg&s',
				duration: '12:58',
				source: 'YouTube',
				channel: 'WearTesters',
				date: '6 days ago',
				position: 6,
			},
			{
				title: 'Trying the Pharrell x Adidas Flat Earther',
				link: 'https://www.youtube.com/shorts/DCpwaICrWoY',
				snippet:
					"Trying the Pharrell x Adidas Flat Earther . 682. Dislike. 34. Share. Video unavailable. This content isn't available. Skip video.",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiBVZI7y-Q5qPN1Grb0kgSQSyfeFnf9VSQZJ8KPB7fI4dyTCAAOvO6w&s',
				duration: '1:21',
				source: 'YouTube',
				channel: 'Steve Natto Sneaker Reviews',
				date: '5 days ago',
				position: 7,
			},
			{
				title: 'Superstar | adidas Originals',
				link: 'https://www.youtube.com/watch?v=I6AxpJHSiY0',
				snippet:
					'The search continues. #adidasSuperstar​ Created for basketball, adopted by the pioneers of streetwear, and redefined by every generation ...',
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyZEjkD0t5skIWYDKoYP2XrqyApLL4SBN01M1_pOFuTSdUHghOFvy5A&s',
				duration: '1:33',
				source: 'YouTube',
				channel: 'adidas Originals',
				date: '1 month ago',
				position: 8,
			},
			{
				title: 'Superstar | adidas Originals',
				link: 'https://www.youtube.com/adidasoriginals',
				snippet: 'Share your videos with friends, family, and the world.',
				position: 9,
			},
			{
				title: 'Asics Megablast vs Adidas Hyperboost Edge: We pick the best ...',
				link: 'https://www.youtube.com/watch?v=VyGxhM6-eg4',
				snippet:
					"We've got two big hype shoes going head to head: the much lauded ASICS Megablast versus the newer Adidas Hyperboost Edge.",
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOXxQTiYI7q-5pFhCQuISxSDIqnFX6Y4eVpuyiebcnVhHAPnVvLQt1g&s',
				duration: '14:26',
				source: 'YouTube',
				channel: 'The Run Testers',
				date: '2 days ago',
				position: 10,
			},
		],
	},
};
