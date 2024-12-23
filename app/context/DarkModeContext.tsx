"use client";
import { createContext, useState, useEffect, useContext } from "react";

const DarkModeContext = createContext({
	darkMode: false,
	toggleDarkMode: () => {},
});

import { ReactNode } from "react";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(savedMode);
		if (savedMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleDarkMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem("darkMode", newMode.toString());
		if (newMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => useContext(DarkModeContext);
