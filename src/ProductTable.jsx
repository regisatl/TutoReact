import {ProductCategoryRow} from "./ProductCategoryRow.jsx";
import {ProductRow} from "./ProductRow.jsx";
import { Table } from "flowbite-react";

export function ProductTable({products}) {

    const rows = [];
    let lastCategory = null;

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        lastCategory = product.category;
        rows.push(<ProductRow key={product.name} product={product}/>)
    }

    return <div className="overflow-x-auto">
        <Table striped>
            <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {rows}
            </Table.Body>
        </Table>
    </div>
}

