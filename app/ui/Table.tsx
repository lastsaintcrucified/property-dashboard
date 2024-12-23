"use client";
import { useState } from "react";
import { Property } from "@/app/lib/PropertyData";
import { PlusIcon } from "@heroicons/react/16/solid";
import DialogBox from "./DialogBox";

export const Table = ({
	initialProperties,
}: {
	initialProperties: Property[];
}) => {
	const [properties, setProperties] = useState<Property[]>(initialProperties);
	const [toggle, setToggle] = useState<boolean>(false);
	const [filterType, setFilterType] = useState<string>("");
	const [filterStatus, setFilterStatus] = useState<string>("");
	const [newProperty, setNewProperty] = useState<Property>({
		id: 0,
		name: "",
		type: "Apartment",
		status: "Available",
	});

	const handleAddProperty = () => {
		setProperties([
			...properties,
			{ ...newProperty, id: properties.length + 1 },
		]);
		setNewProperty({ id: 0, name: "", type: "Apartment", status: "Available" });
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
						className='btn btn-primary'
						onClick={() => setToggle(!toggle)}
					>
						<PlusIcon className='h-4 w-4 mr-2' />
						Add New Property
					</button>

					{/* <input
						className='border p-2 mr-2'
						type='text'
						placeholder='Name'
						value={newProperty.name}
						onChange={(e) =>
							setNewProperty({ ...newProperty, name: e.target.value })
						}
					/>
					<select
						className='border p-2 mr-2 '
						value={newProperty.type}
						onChange={(e) =>
							setNewProperty({
								...newProperty,
								type: e.target.value as Property["type"],
							})
						}
					>
						<option value='Apartment'>Apartment</option>
						<option value='House'>House</option>
						<option value='Commercial'>Commercial</option>
					</select>
					<select
						className='border p-2 mr-2'
						value={newProperty.status}
						onChange={(e) =>
							setNewProperty({
								...newProperty,
								status: e.target.value as Property["status"],
							})
						}
					>
						<option value='Available'>Available</option>
						<option value='Rented'>Rented</option>
					</select>
					<button
						className='bg-blue-500 text-white p-2'
						onClick={handleAddProperty}
					>
						Add Property
					</button> */}
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
					</tr>
				</thead>
				<tbody>
					{filteredProperties.map((property) => (
						<tr key={property.id}>
							<td className='border px-4 py-2'>{property.id}</td>
							<td className='border px-4 py-2'>{property.name}</td>
							<td className='border px-4 py-2'>{property.type}</td>
							<td className='border px-4 py-2'>{property.status}</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Modal to add new property */}
			<DialogBox
				toggle={toggle}
				handleClose={() => setToggle(!toggle)}
			/>
		</div>
	);
};
