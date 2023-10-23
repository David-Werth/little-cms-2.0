import Link from 'next/link';
import { getOrders } from '@/libs/actions/order.actions';
import Order from '../orders/order';

export default async function RecentOrders() {
	const orders = await getOrders();

	return (
		<div className="flex flex-col h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<div className="flex justify-between">
				<h2 className="text-lg font-bold">Recent Orders</h2>
				<Link href="/orders" className="hover:text-neutral-400">
					show all
				</Link>
			</div>
			<div className="flex flex-col justify-center h-full">
				<div className="grid grid-cols-3 px-4 mb-2 text-right text-neutral-400">
					<p className="justify-self-start">Time</p>
					<p>Street</p>
					<p>Total</p>
				</div>
				<div className="flex flex-col gap-2">
					{orders?.slice(0, 3).map((o) => {
						return <Order o={o} key={o?._id} isOnDashboard />;
					})}
				</div>
			</div>
		</div>
	);
}
