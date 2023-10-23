'use server';

import { Reservation } from '../models/reservationModel';
import connectMongoDB from '../mongodb';
import { ReservationType } from '../types/reservation';

export async function getReservations() {
	try {
		await connectMongoDB();
		return (await JSON.parse(
			JSON.stringify(await Reservation.find())
		).reverse()) as ReservationType[];
	} catch (error) {
		console.log(error);
	}
}
