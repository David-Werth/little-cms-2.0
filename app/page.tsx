import GoToRestaurant from '@/components/dashboard/go-to-restaurant';
import OrdersTotal from '@/components/dashboard/orders-total';
import RecentOrders from '@/components/dashboard/recent-orders';
import RecentReservations from '@/components/dashboard/recent-reservations';
import Specials from '@/components/dashboard/specials';

export default function Home() {
	return (
		<main className="grid w-full min-h-screen grid-cols-3 grid-rows-2 gap-4 p-24">
			<div>
				<RecentOrders />
			</div>
			<div>
				<RecentReservations />
			</div>
			<div>
				<GoToRestaurant />
			</div>
			<div>
				<OrdersTotal />
			</div>
			<div className="col-span-2">
				<Specials />
			</div>
		</main>
	);
}
