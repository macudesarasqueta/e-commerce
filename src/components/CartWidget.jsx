import { useContext } from "react";
import cartContext from "../context/cartContext";
import { NavLink } from "react-router-dom";

export default function CartWidget () {
    const context = useContext(cartContext);
    return (
        <div className="cart-icon">
        <NavLink to={"/cart"}>
            🛒 
        </NavLink>
            <span className="cart-count text-black">{context.countItemsInCart()}</span>
        </div>    
    );
};