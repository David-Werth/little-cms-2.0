'use client';

import { createCoupon } from '@/libs/actions/coupon.actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import React from 'react';

export default function Page() {
	const router = useRouter();

	const [code, setCode] = useState('');
	const [value, setValue] = useState(0);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createCoupon({ code: code.toUpperCase(), value: value });
		router.push('/');
	};

	return (
		<main className="flex flex-col items-center justify-between w-full pt-24 px-5 lg:px-10 pb-10 max-w-7xl box-border gap-5 text-neutral-200">
			<form
				className="text-neutral-200 flex flex-col gap-5"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="title">Code</label>
					<input
						type="text"
						name="title"
						value={code}
						onChange={(e) => {
							setCode(e.target.value);
						}}
						className="outline-none bg-transparent border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="price">Value</label>
					<input
						type="number"
						step=".01"
						name="price"
						min={0}
						value={value}
						onChange={(e) => {
							setValue(parseFloat(e.target.value));
						}}
						className="outline-none bg-transparent border-2 rounded-md border-neutral-500 p-2 focus:outline-1 focus:outline-[#F97316] text-lg"
					/>
				</div>

				<button
					type="submit"
					className="text-neutral-900 font-bold bg-[#F4CE14] py-3 px-6 rounded-full border-2 border-[#F4CE14] hover:text-neutral-200 hover:bg-transparent transition-colors"
				>
					Add Coupon
				</button>
			</form>
		</main>
	);
}

// 'use client';

// import { createMenuItem } from '@/libs/actions/menu.actions';
// import { useState } from 'react';
// import { UploadButton } from '../uploadthing/uploadthing';

// export default function AddItemForm() {
// 	const [title, setTitle] = useState('');
// 	const [price, setPrice] = useState(0);
// 	const [description, setDescription] = useState('');
// 	const [category, setCategory] = useState('');
// 	const [img, setImg] = useState('');

// 	const handleFormChange = () => {
// 		//validation
// 	};

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		createMenuItem({
// 			title,
// 			price,
// 			description,
// 			category,
// 			img,
// 		});

// 		setTitle('');
// 		setPrice(0);
// 		setDescription('');
// 		setCategory('');
// 		setImg('');
// 	};

// 	return (

// 	);
// }
