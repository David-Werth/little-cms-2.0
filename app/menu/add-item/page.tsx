import AddItemForm from '@/components/menu/add-item-form';

export default async function Page() {
	return (
		<main className="flex flex-col items-center w-full min-h-screen pt-24 px-10 pb-10 max-w-7xl">
			<AddItemForm />
		</main>
	);
}
