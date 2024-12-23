import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./context/DarkModeContext";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Elysium Tech Test",
	description: "Done by Towhidul Islam",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='relative scroll-smooth'
		>
			<DarkModeProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EAEEFE] dark:bg-[#1A202C] text-[#333] dark:text-white`}
				>
					{children}
				</body>
			</DarkModeProvider>
		</html>
	);
}
