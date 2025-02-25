import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { NavLink } from "react-router-dom";
import products from "../data/data";

export default function ItemDetail(props) {
  // console.log("Entro al ItemDetail");
  const [isAddedToCart, setisAddedToCart] = useState(false);
  const { price, title, text, img, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    // console.log(`Agregaste ${count} unidad/es al carrito`);
    // console.log(`Stock: ${stock}`);
    addItem({id, price, title, count, img});
    // console.log("Imagen cargada", img);
    setisAddedToCart(true);
  }

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
      </div>
      {isAddedToCart ? (
      <div>
        <NavLink to="/cart">
          <button>Ver Carrito</button>
        </NavLink>
        <NavLink to="/">
          <button>Seguir comprando</button>
        </NavLink>
      </div>
      ) : (
        <ItemCount onSubmitCount={onSubmitCount} max={stock} /> 
        )
      }
    </div>
  )
}

