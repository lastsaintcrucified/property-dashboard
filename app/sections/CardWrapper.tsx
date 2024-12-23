"use client";
import { Card } from "../ui/Card";
import { getPropertyStatsFromLocalStorage } from "../lib/PropertyData";
import { useState } from "react";

export default function CardWrapper() {
	//state to manage stats of properties
	const [stats, setStats] = useState(getPropertyStatsFromLocalStorage());
	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10 p-5 justify-items-center'>
			<Card
				title='Check-In'
				value={`${stats.totalCheckIn}`}
				type='checkIn'
			/>
			<Card
				title='Apartments'
				value={`${stats.totalApartment}`}
				type='apartment'
			/>
			<Card
				title='House'
				value={`${stats.totalHouse}`}
				type='house'
			/>
			<Card
				title='Commercial'
				value={`${stats.totalCommercial}`}
				type='commercial'
			/>
		</div>
	);
}
