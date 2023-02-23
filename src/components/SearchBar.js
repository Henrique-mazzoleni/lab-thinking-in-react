export default function SearchBar(props) {
    const searchHandler = (event) => {
        props.onSearch(event.target.value)
    }

    const stockHandler = (event) => {
        props.onStock(event.target.checked);
    }

    return <div className="search">
        <h2>Search</h2>
        <input type="text" onChange={searchHandler} />
        <label>
            <input type="checkbox" onChange={stockHandler} />
            Only show products in stock
        </label>
    </div>
}