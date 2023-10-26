'use client';
import EditItemForm from '@/components/menu/edit-item-form';
import { getMenuItem } from '@/libs/actions/menu.actions';
import { MenuItemType } from '@/libs/types/menu-item';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const initItem = {
	_id: '',
	category: '',
	title: '',
	description: '',
	price: 0,
	img: '',
	isSpecial: false,
};
export default function page() {
	const pathname = usePathname();
	const pathId = pathname.replace('/menu/', '');
	const [menuItem, setMenuItem] = useState<MenuItemType | undefined>(initItem);

	useEffect(() => {
		(async () => {
			const returnedItem: MenuItemType | undefined = await getMenuItem(pathId);
			setMenuItem(returnedItem);
		})();
	}, []);

	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24 gap-5 text-neutral-200">
			<EditItemForm i={menuItem} />
		</main>
	);
}
