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

export async function getCoupon(id: string) {
	try {
		await connectMongoDB();

		return await JSON.parse(JSON.stringify(await Coupon.findById(id)));
	} catch (error) {
		console.log(error);
	}
}

export async function createCoupon({ code, value }: CouponType) {
	try {
		await connectMongoDB();

		await Coupon.create({ code: code, value: value });
	} catch (error) {
		console.log(error);
	}
}

export async function deleteCoupon(id: string | undefined) {
	try {
		await connectMongoDB();

		await Coupon.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
	}
}

export async function updateCoupon({ _id, code, value }: CouponType) {
	try {
		await connectMongoDB();

		await Coupon.findOneAndUpdate(
			{ _id: _id },
			{
				code: code,
				value: value,
			}
		);
	} catch (error) {
		console.log(error);
	}
}
