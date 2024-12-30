import Button from "./Button";
// import "./button.css";
import "./cardproduct.css";


export default function CardProduct(props) {
  const {price, title, text, img, stock} = props;

  return (
    <div className="card">
      <img src={img} width="120" height="120" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
        </div>
        <Button>Agregar al carrito</Button>
        <p className="card-stock">Stock : {stock}</p>
      </div>
    </div>
  );
}