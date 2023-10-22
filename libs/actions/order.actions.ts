'use server';

import { Order } from '../models/orderModel';
import connectMongoDB from '../mongodb';

export async function getOrders() {
	try {
		await connectMongoDB();
		return await JSON.parse(JSON.stringify(await Order.find()));
	} catch (error) {
		console.log(error);
	}
}
