import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import getAsyncData, { getAsyncItemsByCategory } from "../data/database";

export default function ItemListContainer (props) {
    
    const [products, setProducts] = useState([]);
    const {catid} = useParams();

    useEffect(() => {
        if (catid === undefined) {
            const respuestaPromise = getAsyncData();
            console.log(respuestaPromise);
            respuestaPromise
                .then((respuesta) => setProducts(respuesta))
                .catch((error) => alert(error));
        }
        else {
            const respuestaPromise = getAsyncItemsByCategory(catid);
            console.log(respuestaPromise);
            respuestaPromise
                .then((respuesta) => setProducts(respuesta))
                .catch((error) => alert(error));
        }
    }, [catid]);

    return (
        <div>
            <ItemList greeting = {props.greeting} products = {products}/>
        </div>
    );
};