import { useContext } from "react";
import cartContext from "../context/cartContext";
import { NavLink } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import "../App.css";


function CartContainer() {
  const { cartItems, removeItem } = useContext(cartContext);

  if (!cartItems || cartItems.length === 0)
    return <p>No hay productos en el carrito</p>

  return (
    <div>
      <h1 className="title">Tu carrito</h1>
        {cartItems.map((item) => (
          <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Precio: €{item.price}</p>
              <p>Unidades: {item.count}</p>
              <NavLink to="/">
                <button>Seguir comprando</button>
              </NavLink>
              <button style={{background:"red"}}onClick={() => removeItem(item.id)}>Eliminar</button>
            <hr />
          </div>
        ))}
        <FormCheckout/>
    </div>
  );
}

export default CartContainer;