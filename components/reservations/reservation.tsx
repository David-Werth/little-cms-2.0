import { ReservationType } from '@/libs/types/reservation';
import Link from 'next/link';

export default function Reservation({ r }: { r: ReservationType }) {
	return (
		<Link href={`/reservations/${r?._id}`}>
			<div className="grid grid-cols-7 text-left hover:-translate-y-1 rounded-md justify-between p-6 transition-all hover:translate-x-1 hover:border-neutral-600 border text-neutral-200 border-neutral-700">
				<p>{r?.name}</p>
				<p>{r?.date.replace('T00:00:00.000Z', '')}</p>
				<p>{r?.time}</p>
				<p>{r?.guests}</p>
				<p>{r?.occasion}</p>
				<p className="justify-self-end">{r?.email}</p>
			</div>
		</Link>
	);
}
