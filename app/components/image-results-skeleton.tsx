import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

export function ImageResultsSkeleton() {
	return (
		<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-4 justify-between items-start">
			{Array.from({ length: 20 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static and never reordered.
				<li key={index}>
					<Card className="shadow gap-2 pt-0 pb-2">
						<div className="aspect-4/3 rounded-xl bg-muted animate-pulse" />
						<CardHeader className="px-2">
							<CardTitle className="text-sm">
								<div className="h-4 w-11/12 rounded bg-muted animate-pulse" />
							</CardTitle>
							<CardDescription className="text-xs row-start-1">
								<div className="h-3 w-2/3 rounded bg-muted animate-pulse" />
							</CardDescription>
						</CardHeader>
					</Card>
				</li>
			))}
		</ul>
	);
}
