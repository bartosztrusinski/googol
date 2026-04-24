import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

export function VideoResultsSkeleton() {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
			{Array.from({ length: 20 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static and never reordered.
				<li key={index}>
					<Card className="relative shadow rounded-lg gap-0 p-0 flex-row">
						<div className="w-41.5 h-23 rounded-lg overflow-hidden bg-muted/80 animate-pulse" />
						<div className="absolute bottom-1 left-1 h-5 w-10  bg-primary-foreground/75 px-1.5 py-0.5 rounded-md"></div>
						<CardHeader className="px-3 py-1.5 content-between grow">
							<CardTitle className="font-normal leading-tight">
								<div className="h-4 w-full rounded bg-muted animate-pulse" />
								<div className="mt-1.5 h-4 w-4/5 rounded bg-muted animate-pulse" />
							</CardTitle>
							<CardDescription className="text-xs">
								<div className="h-3 w-2/3 rounded bg-muted animate-pulse" />
								<div className="mt-1 h-3 w-1/2 rounded bg-muted animate-pulse" />
							</CardDescription>
						</CardHeader>
					</Card>
				</li>
			))}
		</ul>
	);
}
