import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

export function AllResultsSkeleton() {
	return (
		<ul className="space-y-4">
			{Array.from({ length: 20 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: skeleton items are static
				<li key={index}>
					<Card className="shadow gap-3">
						<CardHeader className="gap-1.5">
							<CardTitle>
								<div className="h-6 w-4/5 rounded bg-muted animate-pulse" />
							</CardTitle>
							<CardDescription className="text-xs row-start-1">
								<div className="h-3 w-2/5 rounded bg-muted animate-pulse" />
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3">
							<div className="h-4 w-full rounded bg-muted animate-pulse" />
							<div className="h-4 w-11/12 rounded bg-muted animate-pulse" />
							<div className="h-4 w-4/5 rounded bg-muted animate-pulse" />
							{index === 0 && (
								<ul className="pt-2">
									<li>
										<Separator className="my-0" />
										<div className="py-4">
											<div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
										</div>
									</li>
									<li>
										<Separator className="my-0" />
										<div className="py-4">
											<div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
										</div>
									</li>
								</ul>
							)}
						</CardContent>
					</Card>
				</li>
			))}
		</ul>
	);
}
