import Button from "./Button";
import "./cardproduct.css";
import { Link } from "react-router-dom";


export default function Item(props) {
  const {id, price, title, text, img, stock} = props;

  return (
    <div className="card">
      <img src={img} width="120" height="120" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
          <p className="card-stock">Stock : {stock}</p>
        </div>
        <Link to={`/item/${id}`}>
          <Button>Ver detalle</Button>
        </Link>
      </div>
    </div>
  );
}