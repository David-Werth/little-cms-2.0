import { MenuItemType } from '@/libs/types/menu-item';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

export default function MenuItem({ i }: { i: MenuItemType }) {
	return (
		<Link
			href={`/menu/${i._id}`}
			className="flex flex-col h-full p-5 gap-4 border rounded-lg border-neutral-500 text-neutral-200 hover:-translate-y-1 transition-all hover:translate-x-1 hover:border-neutral-600"
		>
			<Image
				src={i.img}
				width={500}
				height={500}
				alt={title}
				className="object-cover w-full h-52"
			/>
			<div>
				<div className="flex justify-between">
					<h2 className="text-lg font-bold">{i.title}</h2>
					<p className="text-[#F97316]">${i.price}</p>
				</div>
				<div>
					<p>{i.description}</p>
				</div>
			</div>
		</Link>
	);
}
