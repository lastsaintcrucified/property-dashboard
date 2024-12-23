"use client";
import { Header } from "@/app/sections/Header";
import { Intro } from "./sections/Intro";
import CardWrapper from "./sections/CardWrapper";
import { PropertyTable } from "./sections/PropertyTable";
import { Footer } from "./sections/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<Intro />
			<CardWrapper />
			<PropertyTable />
			<Footer />
		</>
	);
}
