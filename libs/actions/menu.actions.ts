'use server';

import { MenuItem } from '../models/menuItemModel';
import connectMongoDB from '../mongodb';
import { MenuItemType } from '../types/menu-item';

export async function getAllMenuItems() {
	try {
		await connectMongoDB();

		const menuItems = (await JSON.parse(
			JSON.stringify(await MenuItem.find())
		)) as MenuItemType[];
		return menuItems;
	} catch (error) {
		console.log(error);
	}
}

export async function getMenuItem(id: string) {
	try {
		await connectMongoDB();

		return (await JSON.parse(
			JSON.stringify(await MenuItem.findById(id))
		)) as MenuItemType;
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
}: MenuItemType) {
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
	_id,
	category,
	title,
	description,
	price,
	img,
	isSpecial,
}: MenuItemType) {
	try {
		await connectMongoDB();

		await MenuItem.findOneAndUpdate(
			{ _id: _id },
			{
				category: category,
				title: title,
				description: description,
				price: price,
				img: img,
				isSpecial: isSpecial,
			}
		);
	} catch (error) {
		console.log(error);
	}
}

export async function deleteMenuItem(id: string) {
	try {
		await connectMongoDB();

		await MenuItem.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
	}
}
