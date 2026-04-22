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

type AllSearchOrganic = {
	title: string;
	link: string;
	snippet: string;
	position: number;
	sitelinks?: {
		title: string;
		link: string;
	}[];
	date?: string;
	currency?: string;
	price?: number;
};

export type RelatedSearches = { query: string }[];

export type PeopleAlsoAsk = {
	question: string;
	snippet: string;
	title: string;
	link: string;
}[];

export type KnowledgeGraph = {
	title: string;
	imageUrl: string;
	description: string;
	descriptionSource: string;
	descriptionLink: string;
	attributes: Record<string, string>;
};

export type AllSearchResponse = {
	searchParameters: SearchParameters;
	organic: AllSearchOrganic[];
	relatedSearches?: RelatedSearches;
	peopleAlsoAsk?: PeopleAlsoAsk;
	knowledgeGraph?: KnowledgeGraph;
};

export type ImageSearchResponse = {
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

export type VideoSearchResponse = {
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

export type SearchResultItem =
	| { type: 'organic'; key: string; data: AllSearchOrganic }
	| { type: 'people-also-ask'; key: string; data: PeopleAlsoAsk }
	| { type: 'related-searches'; key: string; data: RelatedSearches };
