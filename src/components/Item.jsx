import Button from "./Button";
import "./cardproduct.css";
import { Link } from "react-router-dom";


export default function Item(props) {
  const { price, title, text, img, id, stock, discount, freeDelivery } = props;
  
  return (
    <div className={`card ${freeDelivery ? "card_accent" : ""}`}>
      <img src={img} width="120" height="120" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p
            style={{ backgroundColor: discount ? "green" : "inherit" }}
            className="card-price"
          >
            $ {price}
            {discount && (
            <span style={{ display: "block", marginTop: "5px", fontSize: "0.9em", color: "white" }}>
              Producto en oferta!
            </span>
          )}
          </p>
          <p className="card-stock">Stock : {stock}</p>
        </div>
        <p style={{backgroundColor: "green"}}>
        {freeDelivery && "Envío gratis!"}
        </p>
        <Link to={`/item/${id}`}>
          <Button>Ver detalle</Button>
        </Link>
      </div>
    </div>
  );
}