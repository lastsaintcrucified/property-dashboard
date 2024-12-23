import Logo from "@/assets/logosaas.png";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer
			id='Footer'
			className='mt-10 py-10 bg-black text-[#BCBCBC] text-sm text-center'
		>
			<div className='container'>
				{/* Logo */}
				<div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
					<Image
						src={Logo}
						alt='Sass Logo'
						height={40}
						className='relative'
					/>
				</div>

				{/* nav */}
				<nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
					<a href='#Card'>Data</a>
					<a href='#Properties'>Properties</a>
					<a href='#Footer'>Contact</a>
				</nav>

				<p className='mt-6'>
					&copy; 2024, MD. towhidul Islam, All right reserved
				</p>
			</div>
		</footer>
	);
};
