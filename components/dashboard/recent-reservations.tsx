import { getReservations } from '@/libs/actions/reservation.actions';
import Reservation from '../reservations/reservation';
import Link from 'next/link';

export default async function RecentReservations() {
	const reservations = await getReservations();

	return (
		<div className="flex flex-col h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<div className="flex justify-between">
				<h2 className="text-lg font-bold">Recent Reservations</h2>
				<Link href="/reservations" className="hover:text-neutral-400">
					show all
				</Link>
			</div>
			<div className="flex flex-col justify-center h-full">
				<div className="grid grid-cols-3 px-4 mb-2 text-right text-neutral-400">
					<p className="justify-self-start">Date</p>
					<p>Time</p>
					<p>Persons</p>
				</div>
				<div className="flex flex-col gap-2">
					{reservations?.slice(0, 3).map((r) => {
						return <Reservation r={r} key={r?._id} isOnDashboard />;
					})}
				</div>
			</div>
		</div>
	);
}
