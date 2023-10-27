import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center w-full min-h-screen pt-24 px-10 pb-10 max-w-7xl gap-5 text-neutral-200">
			<SignIn />
		</main>
	);
}
