import EditItemForm from '@/components/menu/edit-item-form';

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24 gap-5 text-neutral-200">
			<EditItemForm />
		</main>
	);
}
