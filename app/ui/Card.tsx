import {
	BanknotesIcon,
	ClockIcon,
	UserGroupIcon,
	InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
};
export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: "invoices" | "customers" | "pending" | "collected";
}) {
	const Icon = iconMap[type];

	return (
		<div className='card rounded-xl bg-gray-50 p-2 '>
			<div className='flex p-4'>
				{Icon ? <Icon className='h-7 w-7 text-gray-700 font-semibold' /> : null}
				<h3 className='ml-2 text-md font-mono tracking-tighter'>{title}</h3>
			</div>
			<div className='flex justify-end items-center p-3'>
				<span className='leading-none text-4xl font-bold tracking-tighter'>
					{value}
				</span>
			</div>
		</div>
	);
}
