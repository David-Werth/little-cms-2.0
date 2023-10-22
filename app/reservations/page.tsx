import Reservation from '@/components/reservations/reservation';
import { getReservations } from '@/libs/actions/reservation.actions';
import { ReservationType } from '@/libs/types/reservation';

export default async function page() {
	const reservations = await getReservations();

	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24">
			<div className="flex flex-col gap-8">
				{reservations.map((r: ReservationType) => {
					return <Reservation r={r} key={r?._id} isOnDashboard={false} />;
				})}
			</div>
		</main>
	);
}
