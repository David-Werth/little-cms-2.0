import MenuItem from '@/components/menu/menu-item';
import { getAllMenuItems } from '@/libs/actions/menu.actions';
import Link from 'next/link';

export default async function page() {
	const menuItems = await getAllMenuItems();

	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24 gap-4">
			<Link
				href="/menu/add-item"
				className="text-neutral-900 font-bold self-end bg-[#F4CE14] py-3 px-6 rounded-full hover:bg-transparent hover:text-neutral-200 transition-all"
			>
				<button>Add Item</button>
			</Link>
			<div className="grid grid-cols-4 gap-4">
				{menuItems?.map((i) => {
					return <MenuItem i={i} key={i?._id} />;
				})}
			</div>
		</main>
	);
}
