'use client';

import {
	deleteMenuItem,
	getMenuItem,
	updateMenuItem,
} from '@/libs/actions/menu.actions';
import { useEffect, useState } from 'react';
import { UploadButton } from '../uploadthing/uploadthing';
import { MenuItemType } from '@/libs/types/menu-item';
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const initItem = {
	_id: '',
	category: '',
	title: '',
	description: '',
	price: 0,
	img: '',
	isSpecial: false,
};

export default function EditItemForm() {
	const router = useRouter();
	const pathname = usePathname();
	const pathId = pathname.replace('/menu/', '');

	const [isLoading, setIsLoading] = useState(true);

	const [menuItem, setMenuItem] = useState<MenuItemType | undefined>(initItem);
	const [title, setTitle] = useState(menuItem?.title);
	const [price, setPrice] = useState(menuItem?.price);
	const [description, setDescription] = useState(menuItem?.description);
	const [category, setCategory] = useState(menuItem?.category);
	const [img, setImg] = useState(menuItem?.img);
	const [isSpecial, setIsSpecial] = useState(menuItem?.isSpecial);

	useEffect(() => {
		setIsLoading(true);

		(async () => {
			const returnedItem: MenuItemType | undefined = await getMenuItem(pathId);
			setMenuItem(returnedItem);
		})();

		setIsLoading(false);
	}, []);

	useEffect(() => {
		setIsLoading(true);

		setTitle(menuItem?.title);
		setPrice(menuItem?.price);
		setDescription(menuItem?.description);
		setCategory(menuItem?.category);
		setImg(menuItem?.img);
		setIsSpecial(menuItem?.isSpecial);

		setIsLoading(false);
	}, [menuItem]);

	const handleFormChange = () => {
		//validation
	};

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === 'true') {
			setIsSpecial(true);
		} else if (e.target.value === 'false') {
			setIsSpecial(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		if (title && price && description && category && img) {
			await updateMenuItem({
				_id: menuItem?._id,
				title,
				price,
				description,
				category,
				img,
				isSpecial,
			});
		}
		router.push('/menu');
		setIsLoading(false);
	};

	const handleDelete = () => {
		deleteMenuItem(pathId);
		router.push('/menu');
	};

	return (
		<>
			<form
				className="text-neutral-200 flex flex-col gap-5"
				onChange={handleFormChange}
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col gap-2">
					<h2>Is this a current special?</h2>
					<div className="flex justify-between">
						<div className="flex gap-4">
							<input
								type="radio"
								name="isSpecial"
								id="true"
								// checked={isSpecial}
								value={'true'}
								onChange={onOptionChange}
							/>
							<label htmlFor="true">Yes</label>
						</div>
						<div className="flex gap-4">
							<input
								type="radio"
								name="isSpecial"
								id="false"
								// checked={!isSpecial}
								value={'false'}
								onChange={onOptionChange}
							/>
							<label htmlFor="false">No</label>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						className="outline-none bg-transparent border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="price">Price</label>
					<input
						type="number"
						step=".01"
						name="price"
						min={0}
						value={price}
						onChange={(e) => {
							setPrice(parseFloat(e.target.value));
						}}
						className="outline-none bg-transparent border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="description">Description</label>
					<textarea
						name="description"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						className="outline-none bg-transparent min-h-[200px] border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="category">Category</label>
					<select
						name="category"
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
						className="outline-none border-2 rounded-md border-neutral-500 p-2 focus:outline-1 bg-neutral-950 focus:outline-[#F97316] text-lg"
					>
						<option className="hidden">Select a category</option>
						<option value="starters">Starters</option>
						<option value="mains">Mains</option>
						<option value="desserts">Desserts</option>
						<option value="drinks">Drinks</option>
					</select>
				</div>
				<div className="flex flex-col gap-4">
					<p>Uploade Image</p>
					<UploadButton
						endpoint="imageUploader"
						onClientUploadComplete={(res) => {
							if (res) {
								setImg(res[0].url);
							}
						}}
						onUploadError={(error: Error) => {
							alert(`Something went wrong! ${error.message}`);
						}}
					/>
				</div>
				<button
					disabled={isLoading}
					type="submit"
					className="flex items-center justify-center text-neutral-900 font-bold bg-[#F4CE14] py-3 px-6 rounded-full disabled:cursor-not-allowed border-2 border-[#F4CE14] enabled:hover:text-neutral-200 enabled:hover:bg-transparent transition-colors"
				>
					{isLoading ? (
						<FontAwesomeIcon icon={faSpinner} className="animate-spin h-6" />
					) : (
						'Save'
					)}
				</button>
			</form>
			<button
				onClick={handleDelete}
				type="button"
				className="text-neutral-900 font-bold bg-red-500 py-3 px-6 rounded-full border-2 border-red-500 hover:text-neutral-200 hover:bg-transparent transition-colors"
			>
				Delete
			</button>
		</>
	);
}
