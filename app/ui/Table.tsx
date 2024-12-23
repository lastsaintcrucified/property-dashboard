"use client";
import { useState } from "react";
import {
	getPropertiesFromLocalStorage,
	Property,
	savePropertiesToLocalStorage,
} from "@/app/lib/PropertyData";
import { PlusIcon } from "@heroicons/react/16/solid";
import DialogBox from "./DialogBox";
import { motion } from "motion/react";

export const Table = () => {
	//state to manage properties
	const [properties, setProperties] = useState<Property[]>(
		getPropertiesFromLocalStorage()
	);
	const [toggle, setToggle] = useState<boolean>(false); //toggle modal

	const [filterType, setFilterType] = useState<string>(""); //filter by type
	const [filterStatus, setFilterStatus] = useState<string>(""); //filter by status

	//pagination
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage = 10;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	//filter properties based on type and status
	const filteredProperties = properties.filter(
		(property) =>
			(filterType ? property.type === filterType : true) &&
			(filterStatus ? property.status === filterStatus : true)
	);

	//pagination logic to display items
	const currentItems = filteredProperties.slice(
		indexOfFirstItem,
		indexOfLastItem
	);

	const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

	//pagination handlers
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	//pagination handlers for previous page
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	//add new property
	const handleAddProperty = (newProperty: Property) => {
		savePropertiesToLocalStorage([
			...properties,
			{
				...newProperty,
				id: properties.length + 1,
				date: new Date().toDateString(),
			},
		]);
		setProperties(getPropertiesFromLocalStorage());
		setToggle(!toggle);
	};

	return (
		<div className='p-4 mt-10 overflow-x-auto'>
			{/* div filters and adding new property */}
			<div className='mt-5 mb-8 flex flex-col md:flex-row items-center justify-between'>
				<div className='flex flex-row items-center'>
					<motion.button
						whileTap={{ scale: 0.9, rotate: 3 }}
						whileHover={{ scale: 1.09 }}
						className='btn btn-primary bg-green-500 hover:bg-green-600'
						onClick={() => setToggle(!toggle)}
					>
						<PlusIcon className='h-4 w-4 mr-2' />
						Add New Property
					</motion.button>
				</div>
				<div className='flex flex-col mt-10 gap-6 md:gap-0 md:flex-row items-center md:mt-0'>
					<div className='flex flex-row items-center'>
						<label className='mr-2 label-txt'>Filter by Type:</label>
						<motion.select
							whileTap={{ scale: 0.9, rotate: 3 }}
							className='border p-2 rounded-3xl shadow-[0_7px_14px_#808080]'
							value={filterType}
							onChange={(e) => setFilterType(e.target.value)}
						>
							<option value=''>All</option>
							<option value='Apartment'>Apartment</option>
							<option value='House'>House</option>
							<option value='Commercial'>Commercial</option>
						</motion.select>
					</div>
					<div>
						<label className='md:ml-4 mr-2 label-txt'>Filter by Status:</label>
						<motion.select
							whileTap={{ scale: 0.9, rotate: 3 }}
							className='border p-2 rounded-3xl shadow-[0_7px_14px_#808080]'
							value={filterStatus}
							onChange={(e) => setFilterStatus(e.target.value)}
						>
							<option value=''>All</option>
							<option value='Available'>Available</option>
							<option value='Rented'>Rented</option>
						</motion.select>
					</div>
				</div>
			</div>

			{/* Table to display properties */}
			<motion.table
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className='min-w-full bg-white rounded-lg overflow-hidden shadow-lg '
			>
				<thead>
					<tr>
						<th className='py-2'>ID</th>
						<th className='py-2'>Name</th>
						<th className='py-2'>Type</th>
						<th className='py-2'>Status</th>
						<th className='py-2'>Check-in</th>
						<th className='py-2'>Check-out</th>
						<th className='py-2'>Date</th>
					</tr>
				</thead>
				<tbody>
					{currentItems.map((property) => (
						<motion.tr
							whileHover={{ scale: 1.1, color: "#4CBB17" }}
							key={property.id}
						>
							<td className='border px-4 py-2'>{property.id}</td>
							<td className='border px-4 py-2'>{property.name}</td>
							<td className='border px-4 py-2'>{property.type}</td>
							<td className='border px-4 py-2'>{property.status}</td>
							<td className='border px-4 py-2'>{property.checkIn}</td>
							<td className='border px-4 py-2'>{property.checkOut}</td>
							<td className='border px-4 py-2'>{property.date}</td>
						</motion.tr>
					))}
				</tbody>
			</motion.table>
			<div className='flex justify-between mt-4 p-4'>
				<motion.button
					whileTap={{ scale: 0.9, rotate: 3 }}
					whileHover={{ scale: 1.09 }}
					className='btn-secondary'
					onClick={handlePreviousPage}
					disabled={currentPage === 1}
				>
					Prev
				</motion.button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<motion.button
					whileTap={{ scale: 0.9, rotate: 3 }}
					whileHover={{ scale: 1.09 }}
					className='btn-secondary'
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
				>
					Next
				</motion.button>
			</div>
			{/* Modal to add new property */}
			<DialogBox
				toggle={toggle}
				handleClose={() => setToggle(!toggle)}
				handleAddProperty={(newProperty) => handleAddProperty(newProperty)}
			/>
		</div>
	);
};
