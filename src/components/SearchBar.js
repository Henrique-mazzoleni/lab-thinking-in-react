export default function SearchBar(props) {
    const searchHandler = (event) => {
        props.onSearch(event.target.value)
    }

    return <input onChange={searchHandler} />
}