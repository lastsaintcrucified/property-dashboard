"use client";

import { useState } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Property } from "../lib/PropertyData";

export default function DialogBox({
	toggle,
	handleClose,
	handleAddProperty,
}: {
	toggle: boolean;
	handleClose: () => void;
	handleAddProperty: (property: Property) => void;
}) {
	const [open, setOpen] = useState(false);
	const [newProperty, setNewProperty] = useState<Property>({
		id: 0,
		name: "",
		type: "Apartment",
		status: "Available",
		checkIn: 0,
		checkOut: 0,
		date: "",
	});

	return (
		<Dialog
			open={toggle}
			onClose={setOpen}
			className='relative z-10'
		>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
			/>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<DialogPanel
						transition
						className=' flex flex-col justify-center items-center relative transform overflow-hidden rounded-lg bg-white  shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
					>
						<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full '>
							<div className=' items-center'>
								<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
									<DialogTitle
										as='h3'
										className='text-base font-semibold text-gray-900'
									>
										Add new property
									</DialogTitle>

									{/* Form to add new property */}

									<div className=' mt-2'>
										{/* User Name */}
										<div className='sm:col-span-4'>
											<label
												htmlFor='propertyName'
												className='block text-sm/6 font-medium text-gray-900'
											>
												Property name
											</label>
											<div className='mt-2'>
												<div className='flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
													<input
														id='propertyName'
														name='propertyName'
														type='text'
														required
														placeholder='new property'
														value={newProperty.name}
														onChange={(e) =>
															setNewProperty({
																...newProperty,
																name: e.target.value as Property["name"],
															})
														}
														className='block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6'
													/>
												</div>
											</div>
										</div>

										{/* Property Type */}
										<div className='sm:col-span-3 mt-3'>
											<label
												htmlFor='propertyType'
												className='block text-sm/6 font-medium text-gray-900'
											>
												Property type
											</label>
											<div className='mt-2 grid grid-cols-1'>
												<select
													id='propertyType'
													name='propertyType'
													autoComplete='property-type'
													className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
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
												<ChevronDownIcon
													aria-hidden='true'
													className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
												/>
											</div>
										</div>

										{/* property status */}
										<div className='sm:col-span-3 mt-3'>
											<label
												htmlFor='propertyStatus'
												className='block text-sm/6 font-medium text-gray-900'
											>
												Property status
											</label>
											<div className='mt-2 grid grid-cols-1'>
												<select
													id='propertyStatus'
													name='propertyStatus'
													autoComplete='property-status'
													className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
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
												<ChevronDownIcon
													aria-hidden='true'
													className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
												/>
											</div>
										</div>

										{/* Buttons */}
										<div className='bg-gray-50 px-0 py-3 sm:flex sm:flex-row-start sm:justify-start sm:gap-2'>
											<button
												type='button'
												data-autofocus
												onClick={handleClose}
												className='mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-red-800 sm:mt-0 sm:w-auto'
											>
												Cancel
											</button>
											<button
												type='button'
												onClick={() => {
													handleAddProperty(newProperty);
													handleClose;
												}}
												className='inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800  sm:w-auto'
											>
												Add property
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
