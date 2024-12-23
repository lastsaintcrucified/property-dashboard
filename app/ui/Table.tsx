"use client";
import { useState } from "react";
import { Property } from "@/app/lib/PropertyData";

export const Table = ({
	initialProperties,
}: {
	initialProperties: Property[];
}) => {
	const [properties, setProperties] = useState<Property[]>(initialProperties);
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
		<div className='p-4'>
			<div className='mb-4'>
				<label className='mr-2'>Filter by Type:</label>
				<select
					className='border p-2'
					value={filterType}
					onChange={(e) => setFilterType(e.target.value)}
				>
					<option value=''>All</option>
					<option value='Apartment'>Apartment</option>
					<option value='House'>House</option>
					<option value='Commercial'>Commercial</option>
				</select>
				<label className='ml-4 mr-2'>Filter by Status:</label>
				<select
					className='border p-2'
					value={filterStatus}
					onChange={(e) => setFilterStatus(e.target.value)}
				>
					<option value=''>All</option>
					<option value='Available'>Available</option>
					<option value='Rented'>Rented</option>
				</select>
			</div>
			<table className='min-w-full bg-white'>
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
			<div className='mt-4'>
				<h2 className='text-lg mb-2'>Add New Property</h2>
				<input
					className='border p-2 mr-2'
					type='text'
					placeholder='Name'
					value={newProperty.name}
					onChange={(e) =>
						setNewProperty({ ...newProperty, name: e.target.value })
					}
				/>
				<select
					className='border p-2 mr-2'
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
				</button>
			</div>
		</div>
	);
};
