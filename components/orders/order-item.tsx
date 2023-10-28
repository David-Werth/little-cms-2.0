'use client';

import { getMenuItem } from '@/libs/actions/menu.actions';
import { MenuItemType } from '@/libs/types/menu-item';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OrderItem({
	id,
	itemCount,
}: {
	id: string;
	itemCount: number;
}) {
	const [item, setItem] = useState<MenuItemType | undefined>(undefined);

	useEffect(() => {
		(async () => {
			const returnedItem: MenuItemType | undefined = await getMenuItem(id);
			setItem(returnedItem);
		})();
	}, [id]);

	return (
		<div className="flex items-center justify-between gap-2 pr-6 rounded-md transition-all hover:border-neutral-600 border text-neutral-200 border-neutral-700 overflow-hidden">
			{item ? (
				<>
					<div className="flex gap-2 items-center">
						<Image
							src={item.img}
							width={500}
							height={500}
							alt={item.title}
							className="object-cover h-16 w-16"
						/>
						<p className="text-lg font-bold">{item.title}</p>
					</div>
					<p className="text-lg font-bold">{itemCount}</p>
				</>
			) : null}
		</div>
	);
}
