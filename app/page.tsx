import GoToRestaurant from '@/components/dashboard/go-to-restaurant';
import RecentOrders from '@/components/dashboard/recent-orders';
import RecentReservations from '@/components/dashboard/recent-reservations';
import Specials from '@/components/dashboard/specials';
import ActiveCoupons from '@/components/dashboard/active-coupons';

export default function Home() {
	return (
		<main className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 pt-24 px-10 pb-10 max-w-7xl box-border">
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
				<ActiveCoupons />
			</div>
			<div className="md:col-span-2">
				<Specials />
			</div>
		</main>
	);
}
