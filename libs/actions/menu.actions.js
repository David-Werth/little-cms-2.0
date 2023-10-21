'use server';

import { MenuItem } from '../models/menuItemModel';
import connectMongoDB from '../mongodb';

export async function getAllMenuItems() {
	try {
		await connectMongoDB();

		const menuItems = await JSON.parse(JSON.stringify(await MenuItem.find()));
		return menuItems;
	} catch (error) {
		console.log(error);
	}
}

export async function createMenuItem({
	category,
	title,
	description,
	price,
	img,
}) {
	try {
		await connectMongoDB();

		await MenuItem.create({
			category,
			title,
			description,
			price,
			img,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function updateMenuItem({
	id,
	category,
	title,
	description,
	price,
	img,
}) {
	try {
		await connectMongoDB();

		await MenuItem.findOneAndUpdate(
			{ _id: id },
			{
				category: category,
				title: title,
				description: description,
				price: price,
				img: img,
			}
		);
	} catch (error) {
		console.log(error);
	}
}
