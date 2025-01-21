import { useContext } from "react";
import cartContext from "../context/cartContext";

export default function CartWidget () {
    const context = useContext(cartContext);
    return (
        <div className="cart-icon">
            🛒
            <span className="cart-count text-black">{context.countItemsInCart()}</span>
        </div>    
    );
};