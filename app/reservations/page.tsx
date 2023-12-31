import Reservation from '@/components/reservations/reservation';
import { getReservations } from '@/libs/actions/reservation.actions';

export default async function Page() {
	const reservations = await getReservations();

	return (
		<main className="flex flex-col items-center justify-between w-full pt-24 px-5 lg:px-10 pb-10 max-w-7xl box-border">
			<div className="flex flex-col gap-8">
				{reservations?.map((r) => {
					return <Reservation r={r} key={r?._id} isOnDashboard={false} />;
				})}
			</div>
		</main>
	);
}
