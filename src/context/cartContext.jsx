import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem({ price, id, title, img, count }) {
    // const copyCartItems = [...cartItems];
    
    // copyCartItems.push({
    //   id: id,
    //   title: title,
    //   img: img,
    //   count: count,
    //   price: price,
    // });
    // setCartItems(copyCartItems);

    setCartItems( [...cartItems, { id, title, img, count, price}]);
  }

  // * 1. Agregar un item al carrito // addItem()
  // 2. Eliminar todos los items del carrito -> clear
  // * 3. removeItem(itemId, quantity) // Remover un item del cart por usando su id
  // * 4. Contar los items del carrito // countItemsInCart()

  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;