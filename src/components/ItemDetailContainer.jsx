import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/database";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export default function ItemDetailContainer() {
  // console.log("Entro a ItemDetailContainer");
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  // console.log(`Me devuelve el ID ${id}`);

  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  if (product)
    return <ItemDetail {...product} id={id} />;
  else
    return <Loader/>
}