import {Input} from "./Input.jsx";
import {Checkbox} from "./Checkbox.jsx";
import Title from "./Title.jsx";
import {useState} from "react";
import {ProductTable} from "./ProductTable.jsx";
import {InputRange} from "./InputRange.jsx";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
];

function App() {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState("");
    const [priceRange, setPriceRange] = useState(5);

    const visibleProducts = PRODUCTS.filter((product) => {
        const productPrice = parseFloat(product.price.replace("$", ""));
        if (showStockedOnly && !product.stocked) {
            return false;
        }
        if (search && !product.name.includes(search)) {
            return false;
        }
        if (productPrice > priceRange) {
            return false;
        }
        return true;
    });

    return (
        <div className="bg-gray-100 mx-auto my-8 max-w-4xl p-6 rounded-lg shadow-lg">
            <div className="mt-2 mb-3 text-center uppercase font-bold">
                <Title/>
            </div>
            <SearchBar
                search={search}
                onSearchChange={setSearch}
                showStockedOnly={showStockedOnly}
                onStockedOnlyChange={setShowStockedOnly}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
            />
            <ProductTable products={visibleProducts}/>
        </div>
    );
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange, priceRange, onPriceRangeChange}) {
    return (
        <div className="flex flex-col gap-4">
            <Input value={search} onChange={onSearchChange} placeholder="Rechercher... "/>
            <Checkbox
                id="stocked"
                checked={showStockedOnly}
                onChange={onStockedOnlyChange}
                label="N'afficher que les produits en stock"
            />
            <InputRange
                id="price-range"
                min="0"
                max="10"
                step="0.5"
                value={priceRange}
                onChange={(value) => onPriceRangeChange(parseFloat(value))}
                label={`Filtrer par prix : ${priceRange} $`}
            />
        </div>
    );
}

export default App;
