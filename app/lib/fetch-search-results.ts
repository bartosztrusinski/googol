import { type SearchResult, sampleData } from '~/lib/sample-data';

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
