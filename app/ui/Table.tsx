"use client";
import { useState } from "react";
import {
	getPropertiesFromLocalStorage,
	Property,
	PROPERTY_STORAGE_KEY,
	savePropertiesToLocalStorage,
} from "@/app/lib/PropertyData";
import { PlusIcon } from "@heroicons/react/16/solid";
import DialogBox from "./DialogBox";

export const Table = ({
	initialProperties,
}: {
	initialProperties: Property[];
}) => {
	if (typeof window !== "undefined") {
		const storedProperties = localStorage.getItem(PROPERTY_STORAGE_KEY);
		if (!storedProperties) {
			savePropertiesToLocalStorage(initialProperties);
		}
	}
	const [properties, setProperties] = useState<Property[]>(
		getPropertiesFromLocalStorage()
	);
	const [toggle, setToggle] = useState<boolean>(false);
	const [filterType, setFilterType] = useState<string>("");
	const [filterStatus, setFilterStatus] = useState<string>("");

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

	const filteredProperties = properties.filter(
		(property) =>
			(filterType ? property.type === filterType : true) &&
			(filterStatus ? property.status === filterStatus : true)
	);

	return (
		<div className='p-4 mt-10'>
			<div className='mt-5 mb-5 flex flex-col md:flex-row items-center justify-between'>
				<div className='flex flex-row items-center'>
					<button
						className='btn btn-primary bg-green-500 hover:bg-green-800'
						onClick={() => setToggle(!toggle)}
					>
						<PlusIcon className='h-4 w-4 mr-2' />
						Add New Property
					</button>
				</div>
				<div className='flex flex-col mt-10 gap-6 md:gap-0 md:flex-row items-center md:mt-0'>
					<div className='flex flex-row items-center'>
						<label className='mr-2 label-txt'>Filter by Type:</label>
						<select
							className='border p-2 rounded-3xl shadow-[0_7px_14px_#808080]'
							value={filterType}
							onChange={(e) => setFilterType(e.target.value)}
						>
							<option value=''>All</option>
							<option value='Apartment'>Apartment</option>
							<option value='House'>House</option>
							<option value='Commercial'>Commercial</option>
						</select>
					</div>
					<div>
						<label className='md:ml-4 mr-2 label-txt'>Filter by Status:</label>
						<select
							className='border p-2 rounded-3xl shadow-[0_7px_14px_#808080]'
							value={filterStatus}
							onChange={(e) => setFilterStatus(e.target.value)}
						>
							<option value=''>All</option>
							<option value='Available'>Available</option>
							<option value='Rented'>Rented</option>
						</select>
					</div>
				</div>
			</div>
			<table className='min-w-full bg-white rounded-lg overflow-hidden shadow-lg'>
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
					{filteredProperties.map((property) => (
						<tr key={property.id}>
							<td className='border px-4 py-2'>{property.id}</td>
							<td className='border px-4 py-2'>{property.name}</td>
							<td className='border px-4 py-2'>{property.type}</td>
							<td className='border px-4 py-2'>{property.status}</td>
							<td className='border px-4 py-2'>{property.checkIn}</td>
							<td className='border px-4 py-2'>{property.checkOut}</td>
							<td className='border px-4 py-2'>{property.date}</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Modal to add new property */}
			<DialogBox
				toggle={toggle}
				handleClose={() => setToggle(!toggle)}
				handleAddProperty={(newProperty) => handleAddProperty(newProperty)}
			/>
		</div>
	);
};
