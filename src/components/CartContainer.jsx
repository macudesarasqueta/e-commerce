import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import { NavLink } from "react-router-dom";

function CartContainer() {
  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    age: "",
  });

  function onInputChange(evt) {
    //1. Que input modificamos
    const inputName = evt.target.name;
    // 2. Copiar el state
    const newUserData = { ...userData };
    // 3. modifico el nuevo objecot
    newUserData[inputName] = evt.target.value;
    // 4. update del state
    setUserData(newUserData);
  }

  const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: {
        username: userData.username,
        surname: userData.surname,
        age: userData.age,
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);
    console.log("Compra realizada", newOrderID);
  }

  if (!cartItems || cartItems.length === 0)
    return <p>No hay productos en el carrito</p>

  return (
    <div>
      <h1>Tu carrito</h1>
        {cartItems.map((item) => (
          <div>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Unidades: {item.count}</p>
              <NavLink to="/">
                <button>Seguir comprando</button>
              </NavLink>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            <hr />
          </div>
        ))}
        <form>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
            <input name="username" type="text" onChange={onInputChange} />
          </div>

          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
            <input name="surname" type="text" onChange={onInputChange} />
          </div>

          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
            <input name="age" type="text" onChange={onInputChange} />
          </div>

          <button
            disabled={
              !(
                userData.username !== "" &&
                userData.surname !== "" &&
                userData.age !== ""
              )
            }
            onClick={handleCheckout}>Realizar compra</button>
        </form>
    </div>
  );
}

export default CartContainer;