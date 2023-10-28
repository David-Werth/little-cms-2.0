'use client';

import OrderItem from '@/components/orders/order-item';
import { getOrder } from '@/libs/actions/order.actions';
import { CartType } from '@/libs/types/cart';
import { OrderType } from '@/libs/types/order';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
	const pathname = usePathname();
	const pathId = pathname.replace('/orders/', '');

	const [order, setOrder] = useState<OrderType | undefined>(undefined);
	const [cart, setCart] = useState<CartType | undefined>();
	const convertedDate = order ? new Date(order?.date) : new Date();
	const convertedDateString = convertedDate.toLocaleString();

	useEffect(() => {
		(async () => {
			const returnedOrder: OrderType | undefined = await getOrder(pathId);
			setOrder(returnedOrder);
		})();
	}, []);

	return (
		<main className="w-full pt-24 px-10 pb-10 max-w-7xl grid md:grid-cols-2 grid-cols-1 gap-4">
			<div className="flex flex-col h-full p-5 border rounded-lg gap-3 border-neutral-500 text-neutral-200">
				<div className="flex justify-between">
					<h2 className="text-lg font-bold">Customer Details</h2>
				</div>
				<div className="flex flex-col h-full gap-2">
					<p>
						<span className="font-bold text-neutral-400">Name: </span>
						{order?.userDetails.name}
					</p>
					<p>
						<span className="font-bold text-neutral-400">Street: </span>
						{order?.userDetails.street}
					</p>
					<p>
						<span className="font-bold text-neutral-400">Additional: </span>
						{order?.userDetails.additional}
					</p>
					<p>
						<span className="font-bold text-neutral-400">City: </span>
						{order?.userDetails.city}
					</p>
					<p>
						<span className="font-bold text-neutral-400">Email: </span>
						{order?.userDetails.email}
					</p>
				</div>
			</div>

			<div className="flex flex-col h-full p-5 gap-3 border rounded-lg border-neutral-500 text-neutral-200">
				<div className="flex justify-between">
					<h2 className="text-lg font-bold">Order Details</h2>
				</div>
				<div className="flex flex-col h-full gap-2">
					<p>
						<span className="font-bold text-neutral-400">Total: </span>${order?.total}
					</p>
					<p>
						<span className="font-bold text-neutral-400">Payment method: </span>
						{order?.paymentMethod}
					</p>
					<p>
						<span className="font-bold text-neutral-400">Date: </span>
						{convertedDateString}
					</p>
				</div>
			</div>

			<div className="flex flex-col h-full p-5 md:col-span-2 border rounded-lg gap-3 border-neutral-500 text-neutral-200">
				<div className="flex justify-between">
					<h2 className="text-lg font-bold">Items</h2>
				</div>
				<div className="flex flex-col h-full gap-2">
					<div className="grid grid-cols-2 px-4 mb-2 text-neutral-400">
						<p>Item</p>
						<p className="justify-self-end">Amount</p>
					</div>
					<div className="flex flex-col gap-2">
						{order?.cart.map((i) => {
							console.log(i);
							return (
								<OrderItem id={i.itemId} itemCount={i.itemCount} key={i.itemId} />
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
