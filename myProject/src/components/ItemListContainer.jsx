import CardProduct from "./CardProduct";
import FlexContainer from "./FlexContainer";
import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";


export default function ItemListContainer (props) {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const respuestaPromise = getAsyncData();
        console.log(respuestaPromise);
        respuestaPromise
          .then((respuesta) => setProducts(respuesta))
          .catch((error) => alert(error));
      }, []);

    const list = products.map( prod => (
        <CardProduct
        key = {prod.id}
        title = {prod.title} 
        price = {prod.price} 
        text = {prod.text}
        img = {prod.img}
        stock = {prod.stock}
        />))
    return (
        <div>
            <h2>{props.greeting}</h2>
            <FlexContainer>
                {list}
            </FlexContainer>
        </div>
    );
};