import AddItemForm from '@/components/menu/add-item-form';

export default async function Page() {
	return (
		<main className="flex flex-col items-center w-full pt-24 px-5 lg:px-10 pb-10 max-w-7xl box-border">
			<AddItemForm />
		</main>
	);
}
