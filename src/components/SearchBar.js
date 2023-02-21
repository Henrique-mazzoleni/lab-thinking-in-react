export default function SearchBar(props) {
    const searchHandler = (event) => {
        props.onSearch(event.target.value)
    }

    const stockHandler = (event) => {
        props.onStock(event.target.checked);
    }

    return <div className="search">
        <input onChange={searchHandler} />
        <input type="checkbox" onChange={stockHandler} />

    </div>
}