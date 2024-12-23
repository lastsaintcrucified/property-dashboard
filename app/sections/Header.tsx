import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
	return (
		<header
			id='Card'
			className='sticky z-20 top-0 backdrop-blur-sm'
		>
			<div className='flex justify-center items-center py-3 bg-black text-sm text-white gap-3'>
				<p className='hidden md:block text-white/60'>
					Manage your property like a pro.
				</p>
				<div className='inline-flex gap-1 items-center'>
					<p>Look out for more features </p>
					<Image
						src={ArrowRight}
						alt='arrowIcon'
						className='h-4 w-4 inline-flex justify-center items-center '
					/>
				</div>
			</div>
			<div className='py-5'>
				<div className='px-5'>
					<div className='flex items-center justify-between '>
						<Image
							src={Logo}
							alt='sass logo image'
							height={40}
							width={40}
						/>
						<Image
							src={MenuIcon}
							alt='MenuIcon'
							className='w-5 h-5 md:hidden'
						/>
						<nav className='hidden md:flex gap-6 items-center text-black/60'>
							<Link href='#Card'>Data</Link>
							<a href='#Properties'>Properties</a>
							<a href='#Footer'>Contact</a>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
