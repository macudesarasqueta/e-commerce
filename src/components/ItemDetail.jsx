import ItemCount from "./ItemCount";

export default function ItemDetail(props) {
  // console.log("Entro al ItemDetail");
  const { price, title, text, img, stock } = props;

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidad/es al carrito`);
    console.log(`Stock: ${stock}`);
  }

  // if (!title)
  //   console.log("Loading1...")
  // else if (!price)
  //   console.log("Loading2...")
  // else if (!img)
  //   console.log("Loading3...")
  return (
    <div>
      <img src={img} width="150" height="150" alt="product img" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          <p>$ {price}</p>
          <p>Stock : {stock}</p>
        </div>
        {/* <p>{description}</p> */}
      </div>
      <div>
        <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
      </div>
    </div>
  );
}