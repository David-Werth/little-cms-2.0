import { ReservationType } from '@/libs/types/reservation';

const defaultStyle =
	'flex gap-4 md:gap-10 hover:-translate-y-1 rounded-md justify-between p-6 transition-all hover:translate-x-1 hover:border-neutral-600 border text-neutral-200 border-neutral-700';

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
		<div>
			<div className={isOnDashboard ? dashboardStyle : defaultStyle}>
				{!isOnDashboard && <p className="hidden sm:inline">{r?.name}</p>}
				<p className={isOnDashboard ? 'justify-self-start' : ''}>
					{r?.date.replace('T00:00:00.000Z', '')}
				</p>
				<p>{r?.time}</p>
				<p>{r?.guests} Guests</p>
				{!isOnDashboard && <p className="hidden sm:inline">{r?.occasion}</p>}
				{!isOnDashboard && (
					<p className="justify-self-end hidden sm:inline">{r?.email}</p>
				)}
			</div>
		</div>
	);
}
