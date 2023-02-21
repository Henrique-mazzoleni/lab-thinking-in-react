import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import { useEffect, useState } from "react";
import jsonData from '../data.json'

export default function ProductsPage() {
    const [justStock, setJustStock] = useState(false)
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(jsonData)

    useEffect(()=>{
        console.log(justStock);
        if (justStock && search) setProducts(jsonData.filter(product => product.inStock && product.name.toLowerCase().includes(search.toLowerCase())))
        else if (justStock) setProducts(jsonData.filter(product => product.inStock))
        else if (search) setProducts(jsonData.filter(product => product.name.toLowerCase().includes(search.toLowerCase())))
        else setProducts(jsonData)
    },[justStock, search])

    const productSearchHandler = (searchString) => {
        setSearch(searchString)
    }

    const stockHandler = () => {
        setJustStock(state => !state)
    }

    return <div>
        <h1>IronStore</h1>
        <SearchBar onSearch={productSearchHandler} onStock={stockHandler} />
        <ProductTable products={products} />
    </div>
}