import FlexContainer from "./FlexContainer"
import Item from "./Item"

export default function ItemList (props) {
    return (
      <div>
        <h2>{props.greeting}</h2>
        <FlexContainer>
        {props.products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        </FlexContainer>
      </div>
    )
}
