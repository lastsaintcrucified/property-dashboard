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
				{Icon ? <Icon className='h-5 w-5 text-gray-700' /> : null}
				<h3 className='ml-2 text-sm font-medium'>{title}</h3>
			</div>
			<div className='flex justify-end items-center p-4'>
				<span className='leading-none text-4xl font-bold tracking-tighter'>
					{value}
				</span>
			</div>
		</div>
	);
}
