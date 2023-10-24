'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faChair } from '@fortawesome/free-solid-svg-icons/faChair';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className=" z-50 fixed h-16 border rounded-full top-3 shadow-neutral-200 bg-neutral-200 backdrop-blur-md bg-opacity-5 border-neutral-500 text-neutral-200">
			<ul className="flex w-full h-full gap-12 px-10 text-lg">
				<Link
					href="/"
					className={`flex text-center items-center gap-2 hover:text-neutral-400 transition-colors ${
						pathname === '/' ? 'text-neutral-400' : ''
					}`}
				>
					<FontAwesomeIcon icon={faChartLine} className="h-5" />
					Dashboard
				</Link>
				<Link
					href="/orders"
					className={`flex text-center items-center gap-2 hover:text-neutral-400 transition-colors ${
						pathname === '/orders' ? 'text-neutral-400' : ''
					}`}
				>
					<FontAwesomeIcon icon={faCartShopping} className="h-5" />
					Orders
				</Link>
				<Link
					href="/menu"
					className={`flex text-center items-center gap-2 hover:text-neutral-400 transition-colors ${
						pathname === '/menu' ? 'text-neutral-400' : ''
					}`}
				>
					<FontAwesomeIcon icon={faUtensils} className="h-5" />
					Menu
				</Link>
				<Link
					href="/reservations"
					className={`flex text-center items-center gap-2 hover:text-neutral-400 transition-colors ${
						pathname === '/reservations' ? 'text-neutral-400' : ''
					}`}
				>
					<FontAwesomeIcon icon={faChair} className="h-5" />
					Reservations
				</Link>
			</ul>
		</nav>
	);
}
