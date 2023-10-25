import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/shared/navbar';

import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';

import { ourFileRouter } from '@/app/api/uploadthing/core';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'little-cms',
	description: 'CMS for the Little Lemon restaurant',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<NextSSRPlugin
						/**
						 * The `extractRouterConfig` will extract **only** the route configs
						 * from the router to prevent additional information from being
						 * leaked to the client. The data passed to the client is the same
						 * as if you were to fetch `/api/uploadthing` directly.
						 */
						routerConfig={extractRouterConfig(ourFileRouter)}
					/>
					<Navbar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
