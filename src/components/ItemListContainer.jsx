import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer (props) {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const respuestaPromise = getAsyncData();
        console.log(respuestaPromise);
        respuestaPromise
          .then((respuesta) => setProducts(respuesta))
          .catch((error) => alert(error));
      }, []);

    return (
        <div>
            <ItemList greeting = {props.greeting} products = {products}/>
        </div>
    );
};