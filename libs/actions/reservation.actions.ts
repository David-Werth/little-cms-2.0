'use server';

import { Reservation } from '../models/reservationModel';
import connectMongoDB from '../mongodb';

export async function getReservations() {
	try {
		await connectMongoDB();
		return await JSON.parse(JSON.stringify(await Reservation.find()));
	} catch (error) {
		console.log(error);
	}
}
