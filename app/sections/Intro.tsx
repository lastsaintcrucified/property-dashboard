"use client";
import Avatar3 from "@/assets/avatar-3.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DarkModeToggle } from "../ui/DarkModeToggle";

export const Intro = () => {
	const propRef = useRef(null);

	// Scroll animation
	const { scrollYProgress } = useScroll({
		target: propRef,
		offset: ["start end", "end start"],
	});
	// Translate Y animation
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<div
			ref={propRef}
			className='flex flex-col gap-10 md:flex-row justify-between items-center p-4  rounded-md mt-10'
		>
			<motion.div
				className='flex items-center'
				style={{
					translateY: translateY,
				}}
			>
				<Image
					src={Avatar3}
					priority={false}
					alt='User Avatar'
					className='w-16 h-16 rounded-full mr-4'
				/>
				<div>
					<h1 className='text-xl font-semibold'>John Doe</h1>
					<span className='text-sm text-gray-600 dark:text-gray-400'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</span>
				</div>
			</motion.div>
			<motion.div
				className='flex gap-6'
				style={{
					translateY: translateY,
				}}
			>
				{/* <motion.button
					whileTap={{ scale: 0.9, rotate: 3 }}
					className='btn btn-primary'
				>
					Show More
				</motion.button> */}
				<DarkModeToggle />
				<motion.button
					whileTap={{ scale: 0.9, rotate: 3 }}
					className='btn btn-text '
				>
					Analytics
				</motion.button>
			</motion.div>
		</div>
	);
};
