import { useState, useContext, useEffect } from "react";
import "../App.css";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";

export default function FormCheckout() {
  let { cartItems, getTotalPrice, setCartItems } = useContext(cartContext);

  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    email: "",
    phonenumber: "",
  });

  const [orderId, setOrderId] = useState(null);
  const totalPrice = getTotalPrice();

  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: { ...userData},
      items: cartItems,
      total: totalPrice,
      date: new Date(),
    };
    // console.log(totalPrice)

    const newOrderID = await createBuyOrder(orderData);
    setOrderId(newOrderID);
    //setCartItems([])
  }

  function onInputChange(evt) {
    const inputName = evt.target.name;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputName]: evt.target.value,
    }));
  }

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
        <h2 className="greeting">Gracias por su compra 🎉</h2>
        <p>Monto total pagado : €{totalPrice}</p>
        <p>Su ID de compra es: <strong>{orderId}</strong></p>
        <br />
        <p>Hasta la proxima!! 👋🏼</p>
      </div>
    );
  }
  return (
    <form>
      <h2 className="title" style={{color: "pink"}}>Precio total de compra: €{totalPrice}</h2>
      <h2 className="title">Completa con tus datos para completar la compra 🧉</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input style={{color: "black"}}
          name="username"  
          type="text" 
          value={userData.username}
          onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
        <input style={{color: "black"}}
          name="surname" 
          type="text" 
          value={userData.surname}
          onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input style={{color: "black"}}
          name="email" 
          type="text" 
          value={userData.email}
          onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
        <input style={{color: "black"}}
          name="phonenumber" 
          type="text" 
          value={userData.phonenumber}
          onChange={onInputChange} />
      </div>

      <button style={{background:"green"}}
        disabled={
          !(
            userData.username !== "" &&
            userData.surname !== "" &&
            userData.email !== "" &&
            userData.phonenumber !== ""
          )
        }
        onClick={handleCheckout}
      >
        Crear orden
      </button>
    </form>
  );
}