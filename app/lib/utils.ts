import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { AllSearchResponse, SearchResultItem } from '~/lib/types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function buildSearchResultItems({
	organic,
	relatedSearches,
	peopleAlsoAsk,
	page,
}: {
	organic: AllSearchResponse['organic'];
	relatedSearches?: AllSearchResponse['relatedSearches'];
	peopleAlsoAsk?: AllSearchResponse['peopleAlsoAsk'];
	page: number;
}): SearchResultItem[] {
	const organicItems: SearchResultItem[] = organic.map((result) => ({
		type: 'organic',
		key: `organic-${result.link}-page-${page}`,
		data: result,
	}));

	const peopleAlsoAskItem: SearchResultItem[] =
		peopleAlsoAsk && peopleAlsoAsk.length > 0
			? [
					...organicItems.slice(0, 3),
					{
						type: 'people-also-ask',
						key: 'people-also-ask',
						data: peopleAlsoAsk,
					},
					...organicItems.slice(3),
				]
			: organicItems;

	return relatedSearches && relatedSearches.length > 0
		? [
				...peopleAlsoAskItem,
				{
					type: 'related-searches',
					key: `related-searches-page-${page}`,
					data: relatedSearches,
				},
			]
		: peopleAlsoAskItem;
}
