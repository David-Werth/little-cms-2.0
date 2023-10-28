'use client';

import React, { useEffect, useState } from 'react';
import Coupon from './coupon';
import { getAllCoupons } from '@/libs/actions/coupon.actions';
import { CouponType } from '@/libs/types/coupon';
import Link from 'next/link';

export default function ActiveCoupons() {
	const [coupons, setCoupons] = useState<CouponType[] | undefined>(undefined);

	useEffect(() => {
		(async () => {
			const returnedCoupons: CouponType[] | undefined = await getAllCoupons();
			setCoupons(returnedCoupons);
		})();
	}, []);

	return (
		<div className="flex flex-col h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<div className="flex justify-between">
				<h2 className="text-lg font-bold">Active Coupons</h2>
				<Link href="/coupon" className="hover:text-neutral-400">
					Add coupon
				</Link>
			</div>
			<div className="flex flex-col h-full">
				<div className="grid grid-cols-3 px-4 mb-2 text-neutral-400">
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
