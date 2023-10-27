import React from 'react';
import Coupon from './coupon';
import { getAllCoupons } from '@/libs/actions/coupon.actions';

export default async function ActiveCoupons() {
	const coupons = await getAllCoupons();

	return (
		<div className="flex flex-col h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<div className="flex justify-between">
				<h2 className="text-lg font-bold">Active Coupons</h2>
			</div>
			<div className="flex flex-col  h-full">
				<div className="grid grid-cols-2 px-4 mb-2 text-neutral-400">
					<p>Code</p>
					<p className="justify-self-end">Value</p>
				</div>
				<div className="flex flex-col gap-2">
					{coupons?.map((c) => {
						return <Coupon c={c} key={c?._id} />;
					})}
				</div>
			</div>
		</div>
	);
}
