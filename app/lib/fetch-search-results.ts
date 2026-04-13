import {
	type ImageSearchResult,
	type SearchResult,
	sampleData,
	sampleImages,
	sampleVideos,
	type VideoSearchResult,
} from '~/lib/sample-data';

export async function fetchSearchResults(
	query: string,
	page: number,
	showGenericResults = true,
): Promise<SearchResult> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return query + page in sampleData
		? sampleData[query + page]
		: showGenericResults
			? sampleData.other
			: {
					...sampleData.other,
					organic: [],
					relatedSearches: [],
					searchParameters: { ...sampleData.other.searchParameters, page },
				};
}

export async function fetchImageSearchResults(
	query: string,
	page: number,
): Promise<ImageSearchResult> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const { images, searchParameters } = sampleImages[query] ?? {
		searchParameters: { query, page },
		images: [],
	};

	return {
		searchParameters: {
			...searchParameters,
			page,
		},
		images: images.filter(
			(image) => image.position > (page - 1) * 10 && image.position <= page * 10,
		),
	};
}

export async function fetchVideoSearchResults(
	query: string,
	page: number,
): Promise<VideoSearchResult> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return query + page in sampleVideos
		? sampleVideos[query + page]
		: {
				searchParameters: {
					q: query,
					gl: 'us',
					hl: 'en',
					type: 'videos',
					num: 10,
					autocorrect: true,
					page,
					engine: 'google',
				},
				videos: [],
			};
}
