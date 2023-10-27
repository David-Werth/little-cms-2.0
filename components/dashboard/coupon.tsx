import { CouponType } from '@/libs/types/coupon';

export default function Coupon({ c }: { c: CouponType }) {
	return (
		<div className="grid grid-cols-2 rounded-md justify-between p-4 transition-all hover:border-neutral-600 border text-neutral-200 border-neutral-700">
			<p>{c.code}</p>
			<p className="justify-self-end">{c.value}</p>
		</div>
	);
}
