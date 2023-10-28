'use client';

import { createMenuItem } from '@/libs/actions/menu.actions';
import { useState } from 'react';
import { UploadButton } from '../uploadthing/uploadthing';
import { useRouter } from 'next/navigation';

export default function AddItemForm() {
	const router = useRouter();

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [img, setImg] = useState('');

	const handleFormChange = () => {
		//validation
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		createMenuItem({
			title,
			price,
			description,
			category,
			img,
		});

		setTitle('');
		setPrice(0);
		setDescription('');
		setCategory('');
		setImg('');
		router.push('/menu');
	};

	return (
		<form
			className="text-neutral-200 flex flex-col gap-5"
			onChange={handleFormChange}
			onSubmit={(e) => handleSubmit(e)}
		>
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
				type="submit"
				className="text-neutral-900 font-bold bg-[#F4CE14] py-3 px-6 rounded-full border-2 border-[#F4CE14] hover:text-neutral-200 hover:bg-transparent transition-colors"
			>
				Add Item
			</button>
		</form>
	);
}
