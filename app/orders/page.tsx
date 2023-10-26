import Order from '@/components/orders/order';
import { getOrders } from '@/libs/actions/order.actions';

export default async function Page() {
	const orders = await getOrders();

	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24">
			<div className="flex flex-col gap-8">
				{orders?.map((o) => {
					return <Order o={o} key={o?._id} isOnDashboard={false} />;
				})}
			</div>
		</main>
	);
}
