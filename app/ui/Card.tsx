"use client";
import {
	ShieldCheckIcon,
	HomeModernIcon,
	HomeIcon,
	ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const iconMap = {
	checkIn: ShieldCheckIcon,
	commercial: HomeModernIcon,
	apartment: ArchiveBoxIcon,
	house: HomeIcon,
};
export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: "checkIn" | "commercial" | "apartment" | "house";
}) {
	//iconMap is an object that maps the type of card to the corresponding icon
	const Icon = iconMap[type];

	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			className='card rounded-xl bg-gray-50 dark:bg-gray-200 p-2 overflow-hidden'
		>
			<div className='flex p-4'>
				{Icon ? (
					<Icon className='h-8 w-8 text-gray-500 dark:text-blue-800 font-bold' />
				) : null}
				<h3 className='ml-2 text-md font-mono tracking-tighter dark:text-blue-800'>
					{title}
				</h3>
			</div>
			<div className='flex justify-end items-center p-3'>
				<span className='leading-none text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80]  dark:from-blue-800 dark:to-blue-800 text-transparent bg-clip-text'>
					{value}
				</span>
			</div>
		</motion.div>
	);
}
