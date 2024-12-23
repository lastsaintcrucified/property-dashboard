"use client";
import { getPropertiesFromLocalStorage, Property } from "../lib/PropertyData";
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
				<h2 className='section-title mt-5'>Manage your property</h2>
				<p className='section-description mt-5'>
					Manage your property with ease and have a good understanding of what
					you need to do.
				</p>
			</div>
			<Table initialProperties={getPropertiesFromLocalStorage()} />
		</div>
	);
};
