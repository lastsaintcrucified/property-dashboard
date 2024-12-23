import { initialProperties } from "../lib/PropertyData";
import { Table } from "../ui/Table";

export const PropertyTable = () => {
	return (
		<div>
			<Table initialProperties={initialProperties} />
		</div>
	);
};
