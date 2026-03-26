import { Search } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';

export default function Home() {
	return (
		<>
			<title>Googol</title>
			<meta name="description" content="Googol frontend for searching the web" />
			<header className="p-4">
				<h1 className="text-3xl mb-4 font-medium text-center">
					<Link to="/">Googol</Link>
				</h1>
				<form>
					<Field orientation="horizontal" className="items-stretch gap-1">
						<FieldLabel htmlFor="search" className="sr-only">
							Search
						</FieldLabel>
						<Input
							id="search"
							type="search"
							title="Search"
							placeholder="Search"
							autoComplete="off"
							className="shadow h-auto rounded-2xl px-3"
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
