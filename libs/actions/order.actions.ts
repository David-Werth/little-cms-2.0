'use server';

import { Order } from '../models/orderModel';
import connectMongoDB from '../mongodb';
import { OrderType } from '../types/order';

export async function getOrders() {
	try {
		await connectMongoDB();
		return (await JSON.parse(
			JSON.stringify(await Order.find())
		).reverse()) as OrderType[];
	} catch (error) {
		console.log(error);
	}
}
