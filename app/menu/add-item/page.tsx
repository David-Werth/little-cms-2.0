import AddItemForm from '@/components/menu/add-item-form';

export default async function Page() {
	return (
		<main className="flex flex-col items-center	 w-full min-h-screen p-24">
			<AddItemForm />
		</main>
	);
}
