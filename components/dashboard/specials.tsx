import { getAllMenuItems } from '@/libs/actions/menu.actions';
import MenuItem from '../menu/menu-item';

export default async function Specials() {
	const menuItems = await getAllMenuItems();
	return (
		<div className="flex flex-col gap-2 h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<h2 className="text-lg font-bold">Specials</h2>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
				{menuItems?.map((i) => {
					if (i.isSpecial) {
						return <MenuItem i={i} key={i._id} isOnDashBoard />;
					}
				})}
			</div>
		</div>
	);
}
