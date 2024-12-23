"use client";

export const PROPERTY_STORAGE_KEY = "propertyData";

export interface Property {
	id: number;
	name: string;
	type: "Apartment" | "House" | "Commercial";
	status: "Available" | "Rented";
	date: string;
	checkIn: number;
	checkOut: number;
}
//initial fake data
export const initialProperties: Property[] = [
	{
		id: 1,
		name: "Sample Property",
		type: "Apartment",
		status: "Available",
		checkIn: 15,
		checkOut: 11,
		date: "Sun Jan 01 2023",
	},
	{
		id: 2,
		name: "Sample Property",
		type: "Apartment",
		status: "Available",
		checkIn: 15,
		checkOut: 11,
		date: "Sun Jan 01 2023",
	},
	{
		id: 3,
		name: "Sunset Apartments",
		type: "Apartment",
		status: "Available",
		checkIn: 16,
		checkOut: 12,
		date: "Mon Dec 23 2024",
	},
	{
		id: 4,
		name: "Green Villa",
		type: "House",
		status: "Rented",
		checkIn: 17,
		checkOut: 13,
		date: "Mon Dec 23 2024",
	},
	{
		id: 5,
		name: "Downtown Office",
		type: "Commercial",
		status: "Available",
		checkIn: 18,
		checkOut: 14,
		date: "Mon Dec 23 2024",
	},
	{
		id: 6,
		name: "Home Sweet Home",
		type: "Apartment",
		status: "Rented",
		checkIn: 19,
		checkOut: 15,
		date: "Mon Dec 23 2024",
	},
	{
		id: 7,
		name: "Blue Villa",
		type: "House",
		status: "Rented",
		checkIn: 20,
		checkOut: 16,
		date: "Mon Dec 23 2024",
	},
	{
		id: 8,
		name: "Downtown Office",
		type: "Commercial",
		status: "Available",
		checkIn: 21,
		checkOut: 17,
		date: "Mon Dec 23 2024",
	},
	{
		id: 9,
		name: "Ocean View Condo",
		type: "Apartment",
		status: "Available",
		checkIn: 22,
		checkOut: 18,
		date: "Tue Jan 14 2025",
	},
	{
		id: 10,
		name: "Mountain Retreat",
		type: "House",
		status: "Rented",
		checkIn: 23,
		checkOut: 19,
		date: "Wed Feb 12 2025",
	},
	{
		id: 11,
		name: "City Center Office",
		type: "Commercial",
		status: "Available",
		checkIn: 24,
		checkOut: 20,
		date: "Thu Mar 20 2025",
	},
	{
		id: 12,
		name: "Lakeside Cottage",
		type: "House",
		status: "Rented",
		checkIn: 25,
		checkOut: 21,
		date: "Fri Apr 18 2025",
	},
	{
		id: 13,
		name: "Urban Loft",
		type: "Apartment",
		status: "Available",
		checkIn: 26,
		checkOut: 22,
		date: "Sat May 17 2025",
	},
	{
		id: 14,
		name: "Suburban House",
		type: "House",
		status: "Rented",
		checkIn: 27,
		checkOut: 23,
		date: "Sun Jun 15 2025",
	},
];

export const savePropertiesToLocalStorage = (properties: Property[]) => {
	localStorage.setItem(PROPERTY_STORAGE_KEY, JSON.stringify(properties));
};

export const getPropertiesFromLocalStorage = (): Property[] => {
	let data = null;
	if (global?.window !== undefined) {
		// Now it's safe to access window and localStorage
		data = localStorage.getItem(PROPERTY_STORAGE_KEY);
	}

	return data ? JSON.parse(data) : initialProperties;
};
if (global?.window !== undefined) {
	const storedProperties = localStorage.getItem(PROPERTY_STORAGE_KEY);
	if (!storedProperties) {
		savePropertiesToLocalStorage(initialProperties);
	}
}
