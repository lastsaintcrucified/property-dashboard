import Avatar1 from "@/assets/avatar-1.png";
import Image from "next/image";

export const Intro = () => {
	return (
		<div className='flex flex-col gap-10 md:flex-row justify-between items-center p-4  rounded-md mt-10'>
			<div className='flex items-center'>
				<Image
					src={Avatar1}
					alt='User Avatar'
					className='w-16 h-16 rounded-full mr-4'
				/>
				<div>
					<h2 className='text-xl font-semibold'>User Name</h2>
					<span className='text-sm text-gray-600'>
						Small details about the user
					</span>
				</div>
			</div>
			<div className='flex gap-6'>
				<button className='btn btn-primary'>Show More</button>
				<button className='btn btn-text '>Analytics</button>
			</div>
		</div>
	);
};
