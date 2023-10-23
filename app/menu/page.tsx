import MenuItem from '@/components/menu/menu-item';
import { getAllMenuItems } from '@/libs/actions/menu.actions';

export default async function page() {
	const menuItems = await getAllMenuItems();

	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24">
			<div className="grid grid-cols-3 gap-4">
				{menuItems?.map((i) => {
					return <MenuItem i={i} key={i?._id} />;
				})}
			</div>
		</main>
	);
}
