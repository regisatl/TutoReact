import { Table } from "flowbite-react";

export function ProductRow({ product }) {
    const rowStyle = product.stocked
        ? "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
        : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-300";

    return (
        <Table.Row className={`${rowStyle} dark:border-gray-700`}>
            <Table.Cell className="whitespace-nowrap font-medium">
                {product.name}
            </Table.Cell>
            <Table.Cell>{product.price}</Table.Cell>
        </Table.Row>
    );
}
