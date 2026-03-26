import { Search } from 'lucide-react';
import { Link } from 'react-router';
import { ModeToggle } from '~/components/mode-toggle';
import { Button } from '~/components/ui/button';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';

export default function Home() {
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
				<form>
					<Field orientation="horizontal" className="items-stretch gap-1.5">
						<FieldLabel htmlFor="search" className="sr-only">
							Search
						</FieldLabel>
						<Input
							id="search"
							type="search"
							title="Search"
							placeholder="Search"
							autoComplete="off"
							className="h-auto rounded-2xl px-4"
						/>
						<Button type="submit" size="icon-lg" className="size-11 rounded-2xl">
							<Search />
						</Button>
					</Field>
				</form>
			</header>
		</>
	);
}
