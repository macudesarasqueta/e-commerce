import Item from "./Item"

export default function ItemList (props) {
    return (
      <div>
        {props.products.map((item) => (
            <Item
            key = {item.id}
            title = {item.title} 
            price = {item.price} 
            text = {item.text}
            img = {item.img}
            stock = {item.stock}
        />))}
      </div>
    )
}
