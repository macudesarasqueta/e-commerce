import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";

export default function ItemDetail(props) {
  // console.log("Entro al ItemDetail");
  const { price, title, text, img, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidad/es al carrito`);
    console.log(`Stock: ${stock}`);
    addItem({id, price, title, count, img});
  }

  // if (!title)
  //   return <h1>ERROR 404</h1>

  return (
    <div>
      <img src={img} width="150" height="150" alt="product img" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          <p>$ {price}</p>
          <p>Stock : {stock}</p>
        </div>
        {/* <p>{description}</p> */}
      </div>
      <div>
        <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
      </div>
    </div>
  );
}