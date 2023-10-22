import { OrderType } from '@/libs/types/order';
import Link from 'next/link';

const defaultStyle =
	'grid grid-cols-4 gap-4 text-left hover:-translate-y-1 rounded-md justify-between p-6 transition-all hover:translate-x-1 hover:border-neutral-600 border text-neutral-200 border-neutral-700';

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

	return (
		<Link href={`/orders/${o?._id}`}>
			<div className={isOnDashboard ? dashboardStyle : defaultStyle}>
				<p>{convertedDateString}</p>
				<p>{o?.userDetails.street}</p>
				<p>{o?.paymentMethod}</p>
				<p className="justify-self-end">Total: ${o?.total}</p>
			</div>
		</Link>
	);
}
