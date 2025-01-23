import { useContext } from "react";
import cartContext from "../context/cartContext";
import { NavLink } from "react-router-dom";

function CartContainer() {
  const { cartItems, removeItem } = useContext(cartContext);

  // 1. conectarlo al context -> useContext, cartContext
  // 2. mostrar el listado de productos ->
  // 3. Mostrar de forma condicional un mensaje cuando el carrito esté vacío
  // 4. Control para eliminar items del carrito
  if (!cartItems || cartItems.length === 0)
    return <p>No hay productos en el carrito</p>

  return (
    <div>
      <h1>Tu carrito</h1>
        {cartItems.map((item) => (
          <>
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Unidades: {item.count}</p>
              <NavLink to="/">
                <button>Seguir comprando</button>
              </NavLink>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
            <hr />
          </>
        ))}
    </div>
  );
}

export default CartContainer;