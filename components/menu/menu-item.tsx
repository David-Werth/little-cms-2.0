import { MenuItemType } from '@/libs/types/menu-item';

export default function MenuItem({ i }: { i: MenuItemType }) {
	return (
		<div className="flex flex-col h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<h2 className="text-lg font-bold">{i.title}</h2>
		</div>
	);
}
