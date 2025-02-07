import { useState, useContext } from "react";
import "../App.css";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";

export default function FormCheckout() {
  const { cartItems, getTotalPrice } = useContext(cartContext);

  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    email: "",
    phonenumber: "",
  });

  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: { ...userData},
        // username: userData.username,
        // surname: userData.surname,
        // email: userData.email,
        // phonenumber: userData.phonenumber
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);
    // Cambiar console.log por monstrar en pantalla (state + rendering condicional)
    console.log("Compra realizada", newOrderID);
  }

  function onInputChange(evt) {
    const inputName = evt.target.name;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputName]: evt.target.value,
    }));
  }

  // DRY
  return (
    <form>
      <h2 className="title">Completa con tus datos para completar la compra 🧉</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input name="username" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
        <input name="surname" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input name="email" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
        <input name="phonenumber" type="number" onChange={onInputChange} />
      </div>

      <button
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