"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Link from "next/link";
import { motion } from "motion/react";

export const Header = () => {
	return (
		<header
			id='Card'
			className='sticky z-20 top-0 backdrop-blur-sm'
		>
			{/* Sticky top header */}
			<div className='flex justify-center items-center py-3 bg-black dark:bg-white text-sm text-white dark:text-black gap-3'>
				<p className='hidden md:block text-white/60 dark:text-black/60'>
					Manage your property like a pro.
				</p>
				<div className='inline-flex gap-1 items-center'>
					<p>Look out for more features </p>
					<Image
						src={ArrowRight}
						alt='arrowIcon'
						className='h-4 w-4 inline-flex justify-center items-center '
					/>
				</div>
			</div>
			{/* NavBar goes here */}
			<div className='py-5'>
				<div className='px-5'>
					<div className='flex items-center justify-between '>
						<motion.img
							src={Logo.src}
							alt='sass logo image'
							height={40}
							width={40}
							animate={{
								translateY: [-3, 3],
							}}
							transition={{
								repeat: Infinity,
								repeatType: "mirror",
								duration: 1,
								ease: "easeInOut",
							}}
						/>

						<nav className='flex gap-6 items-center text-black/60 dark:text-white'>
							<Link href='#Card'>Data</Link>
							<a href='#Properties'>Properties</a>
							<a href='#Footer'>Contact</a>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
