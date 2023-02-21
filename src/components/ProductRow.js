export default function ProductRow(props) {
    return <tr className={props.product.inStock && "danger"}>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
</tr>
}