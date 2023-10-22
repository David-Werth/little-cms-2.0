import { faLemon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export default function GoToRestaurant() {
	return (
		<div className="flex flex-col h-full p-5 border rounded-lg border-neutral-500 text-neutral-200">
			<h2 className="text-lg font-bold">Visit Restaurant</h2>
			<Link
				href="https://little-lemon.davidwerth.com"
				className="text-[#F4CE14] flex items-center justify-center h-full "
			>
				<FontAwesomeIcon
					icon={faLemon}
					className="h-40 transition-all hover:h-48"
				/>
			</Link>
		</div>
	);
}
