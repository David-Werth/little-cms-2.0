import { ReservationType } from '@/libs/types/reservation';
import Link from 'next/link';

const defaultStyle =
	'grid grid-cols-6 text-left hover:-translate-y-1 rounded-md justify-between p-6 transition-all hover:translate-x-1 hover:border-neutral-600 border text-neutral-200 border-neutral-700';

const dashboardStyle =
	'grid grid-cols-3 text-right rounded-md justify-between p-4 transition-all hover:border-neutral-600 border text-neutral-200 border-neutral-700';

export default function Reservation({
	r,
	isOnDashboard,
}: {
	r: ReservationType;
	isOnDashboard: boolean;
}) {
	return (
		<Link href={`/reservations/${r?._id}`}>
			<div className={isOnDashboard ? dashboardStyle : defaultStyle}>
				{!isOnDashboard && <p>{r?.name}</p>}
				<p>{r?.date.replace('T00:00:00.000Z', '')}</p>
				<p>{r?.time}</p>
				<p>{r?.guests}</p>
				{!isOnDashboard && <p>{r?.occasion}</p>}
				{!isOnDashboard && <p className="justify-self-end">{r?.email}</p>}
			</div>
		</Link>
	);
}
