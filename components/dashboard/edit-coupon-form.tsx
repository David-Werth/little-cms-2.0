'use client';

import {
	deleteCoupon,
	getCoupon,
	updateCoupon,
} from '@/libs/actions/coupon.actions';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import React from 'react';
import { CouponType } from '@/libs/types/coupon';

export default function EditCouponForm() {
	const router = useRouter();
	const pathname = usePathname();
	const pathId = pathname.replace('/coupon/', '');

	const [coupon, setCoupon] = useState<CouponType | undefined>(undefined);

	const [code, setCode] = useState('');
	const [value, setValue] = useState(0);

	useEffect(() => {
		(async () => {
			const returnedItem: CouponType | undefined = await getCoupon(pathId);
			setCoupon(returnedItem);
		})();
	}, []);

	useEffect(() => {
		if (coupon) {
			setCode(coupon.code);
			setValue(coupon.value);
		}
	}, [coupon]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateCoupon({ _id: pathId, code: code, value: value });
		router.push('/');
	};

	const handleDelete = () => {
		deleteCoupon(pathId);
		router.push('/');
	};

	return (
		<main className="flex flex-col items-center justify-between w-full pt-24 px-10 pb-10 max-w-7xl box-border gap-5 text-neutral-200">
			<form
				className="text-neutral-200 flex flex-col gap-5"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="title">Code</label>
					<input
						type="text"
						name="title"
						value={code}
						onChange={(e) => {
							setCode(e.target.value);
						}}
						className="outline-none bg-transparent border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="price">Value</label>
					<input
						type="number"
						step=".01"
						name="price"
						min={0}
						value={value}
						onChange={(e) => {
							setValue(parseFloat(e.target.value));
						}}
						className="outline-none bg-transparent border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>

				<button
					type="submit"
					className="text-neutral-900 font-bold bg-[#F4CE14] py-3 px-6 rounded-full border-2 border-[#F4CE14] hover:text-neutral-200 hover:bg-transparent transition-colors"
				>
					Save Coupon
				</button>
			</form>
			<button
				onClick={handleDelete}
				type="button"
				className="text-neutral-900 font-bold bg-red-500 py-3 px-6 rounded-full border-2 border-red-500 hover:text-neutral-200 hover:bg-transparent transition-colors"
			>
				Delete
			</button>
		</main>
	);
}
