import { motion } from "motion/react";
import { useDarkMode } from "../context/DarkModeContext";

export const DarkModeToggle = () => {
	//useDarkMode hook
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<motion.button
			onClick={toggleDarkMode}
			className='btn btn-primary'
			whileTap={{ scale: 0.9, rotate: 3 }}
		>
			{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
		</motion.button>
	);
};
