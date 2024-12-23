import { Card } from "../ui/Card";

export default async function CardWrapper() {
	return (
		<div
			id='Card'
			className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10 p-5 justify-items-center'
		>
			<Card
				title='Collected'
				value={10}
				type='collected'
			/>
			<Card
				title='Pending'
				value={10}
				type='pending'
			/>
			<Card
				title='Total Invoices'
				value={10}
				type='invoices'
			/>
			<Card
				title='Total Customers'
				value={10}
				type='customers'
			/>
		</div>
	);
}
