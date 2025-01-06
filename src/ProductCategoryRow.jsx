import { Table } from "flowbite-react";
export function ProductCategoryRow({name}) {
    return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell colSpan={2} className="whitespace-nowrap font-medium dark:text-white">
            <strong>{name}</strong>
        </Table.Cell>
    </Table.Row>
}

