export interface Property {
	id: number;
	name: string;
	type: "Apartment" | "House" | "Commercial";
	status: "Available" | "Rented";
}

export const initialProperties: Property[] = [
	{ id: 1, name: "Sunset Apartments", type: "Apartment", status: "Available" },
	{ id: 2, name: "Green Villa", type: "House", status: "Rented" },
	{ id: 3, name: "Downtown Office", type: "Commercial", status: "Available" },
];
