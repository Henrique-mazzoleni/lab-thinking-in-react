import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import { useState } from "react";
import jsonData from '../data.json'

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    const productSearchHandler = (searchString) => {
        const filteredProducts = jsonData.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()))
        setProducts(filteredProducts)
    }

    return <div>
        <h1>IronStore</h1>
        <SearchBar onSearch={productSearchHandler} />
        <ProductTable products={products} />
    </div>
}