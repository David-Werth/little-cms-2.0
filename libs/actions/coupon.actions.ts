'use server';

import { Coupon } from '../models/couponModel';
import connectMongoDB from '../mongodb';
import { CouponType } from '../types/coupon';

export async function getAllCoupons() {
	try {
		await connectMongoDB();

		const coupons: CouponType[] = await JSON.parse(
			JSON.stringify(await Coupon.find())
		);
		return coupons;
	} catch (error) {
		console.log(error);
	}
}
