import Order from '@/components/orders/order';
import { getOrders } from '@/libs/actions/order.actions';

export default async function Page() {
	const orders = await getOrders();

	return (
		<main className="flex flex-col items-center justify-between w-full pt-24 px-5 lg:px-10 pb-10 max-w-7xl box-border">
			<div className="flex flex-col gap-8">
				{orders?.map((o) => {
					return <Order o={o} key={o?._id} isOnDashboard={false} />;
				})}
			</div>
		</main>
	);
}
