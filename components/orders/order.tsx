import { OrderType } from '@/libs/types/order';
import Link from 'next/link';

const defaultStyle =
	'flex gap-4 md:gap-10 hover:-translate-y-1 rounded-md justify-between p-6 transition-all hover:translate-x-1 hover:border-neutral-600 border text-neutral-200 border-neutral-700';

const dashboardStyle =
	'grid grid-cols-3 text-right rounded-md justify-between p-4 transition-all hover:border-neutral-600 border text-neutral-200 border-neutral-700';

export default function Order({
	o,
	isOnDashboard,
}: {
	o: OrderType;
	isOnDashboard: boolean;
}) {
	const convertedDate = o ? new Date(o?.date) : new Date();
	const convertedDateString = convertedDate.toLocaleString();
	const convertedTimeString = convertedDate.toLocaleTimeString();

	return (
		<Link href={`/orders/${o?._id}`}>
			<div className={isOnDashboard ? dashboardStyle : defaultStyle}>
				{isOnDashboard ? (
					<p className="justify-self-start">{convertedTimeString}</p>
				) : (
					<p>{convertedDateString}</p>
				)}
				<p>{o?.userDetails.street}</p>
				{!isOnDashboard && <p>{o?.paymentMethod}</p>}
				<p className="justify-self-end">${o?.total}</p>
			</div>
		</Link>
	);
}
