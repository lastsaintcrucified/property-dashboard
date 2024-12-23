import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinked from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYou from "@/assets/social-youtube.svg";

export const Footer = () => {
	return (
		<footer
			id='Footer'
			className='mt-10 py-10 bg-black text-[#BCBCBC] text-sm text-center'
		>
			<div className='container'>
				<div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
					<Image
						src={Logo}
						alt='Sass Logo'
						height={40}
						className='relative'
					/>
				</div>
				<nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
					<a href='#'>About</a>
					<a href='#'>Features</a>
					<a href='#'>Customers</a>
					<a href='#'>Pricing</a>
					<a href='#'>Help</a>
					<a href='#'>Careers</a>
				</nav>
				<div className='flex justify-center gap-6 mt-6'>
					<Image
						src={SocialX}
						alt='Social X'
					/>
					<Image
						src={SocialInsta}
						alt='Social Insta'
					/>
					<Image
						src={SocialLinked}
						alt='Social Linked'
					/>
					<Image
						src={SocialPin}
						alt='Social Pin'
					/>
					<Image
						src={SocialYou}
						alt='Social You'
					/>
				</div>
				<p className='mt-6'>
					&copy; 2024, My towhidul Islam, All right reserved
				</p>
			</div>
		</footer>
	);
};
