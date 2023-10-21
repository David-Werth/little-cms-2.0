import Reservation from '@/components/reservations/reservation';
import { getReservations } from '@/libs/actions/reservation.actions';
import { ReservationType } from '@/libs/types/reservation';

export default async function page() {
	const reservations = await getReservations();

	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
			<div className=" flex flex-col gap-8">
				{reservations.map((r: ReservationType) => {
					return <Reservation r={r} key={r?._id} />;
				})}
			</div>
		</main>
	);
}
