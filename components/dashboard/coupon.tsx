import { CouponType } from '@/libs/types/coupon';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Coupon({ c }: { c: CouponType }) {
	return (
		<div className="grid grid-cols-3 rounded-md justify-between p-4  transition-all hover:border-neutral-600 border text-neutral-200 border-neutral-700 relative">
			<p>{c.code}</p>
			<p className="justify-self-end">${c.value}</p>

			<Link
				href={`/coupon/${c._id}`}
				className="h-4 hover:text-neutral-400 transition-colors justify-self-end cursor-pointer"
			>
				<FontAwesomeIcon icon={faEdit} />
			</Link>
		</div>
	);
}
