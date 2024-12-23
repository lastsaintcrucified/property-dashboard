"use client";
import { motion } from "motion/react";
import { Table } from "@/app/ui/Table";

export const PropertyTable = () => {
	return (
		<div
			id='Properties'
			className='container mx-auto p-2 mt-10'
		>
			<div className='section-heading'>
				<div className='flex justify-center'>
					<div className='tag'>Property Data</div>
				</div>
				<motion.h2
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className='section-title mt-5'
				>
					Manage your property
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className='section-description mt-5'
				>
					Manage your property with ease and have a good understanding of what
					you need to do.
				</motion.p>
			</div>
			<Table />
		</div>
	);
};
