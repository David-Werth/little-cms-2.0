import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center w-full min-h-screen p-24 gap-5 text-neutral-200">
			<SignIn />
		</main>
	);
}
