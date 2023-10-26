import MenuItem from '@/components/menu/menu-item';
import { getAllMenuItems } from '@/libs/actions/menu.actions';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default async function Page() {
	const menuItems = await getAllMenuItems();

	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24 gap-5 text-neutral-200">
			<div className="flex justify-between w-full items-end">
				<h2 className="text-2xl font-bold">Starters</h2>
				<Link
					href="/menu/add-item"
					className="text-neutral-900 font-bold bg-[#F4CE14] py-3 px-6 rounded-full border-2 border-[#F4CE14] hover:text-neutral-200 hover:bg-transparent transition-colors"
				>
					<button>
						Add Item <FontAwesomeIcon icon={faPlus} className="ml-2" />
					</button>
				</Link>
			</div>
			<div className="grid grid-cols-4 gap-4 mb-4">
				{menuItems?.map((i) => {
					if (i.category === 'starters') {
						return <MenuItem i={i} key={i?._id} isOnDashBoard={false} />;
					}
				})}
			</div>
			<h2 className="text-2xl font-bold self-start">Mains</h2>
			<div className="grid grid-cols-4 gap-4 mb-4">
				{menuItems?.map((i) => {
					if (i.category === 'mains') {
						return <MenuItem i={i} key={i?._id} isOnDashBoard={false} />;
					}
				})}
			</div>
			<h2 className="text-2xl font-bold self-start">Desserts</h2>
			<div className="grid grid-cols-4 gap-4 mb-4">
				{menuItems?.map((i) => {
					if (i.category === 'desserts') {
						return <MenuItem i={i} key={i?._id} isOnDashBoard={false} />;
					}
				})}
			</div>
			<h2 className="text-2xl font-bold self-start">Drinks</h2>
			<div className="grid grid-cols-4 gap-4 mb-4">
				{menuItems?.map((i) => {
					if (i.category === 'drinks') {
						return <MenuItem i={i} key={i?._id} isOnDashBoard={false} />;
					}
				})}
			</div>
		</main>
	);
}
