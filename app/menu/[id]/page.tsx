import EditItemForm from '@/components/menu/edit-item-form';

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-between w-full pt-24 px-5 lg:px-10 pb-10 max-w-7xl box-border gap-5 text-neutral-200">
			<EditItemForm />
		</main>
	);
}
