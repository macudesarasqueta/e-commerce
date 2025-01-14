import ItemCount from "./ItemCount";

export default function ItemDetail(props) {
  const { price, title, text, img, stock } = props;

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidad/es al carrito`);
  }

  if (!title || !price || !img)
    return <p>Loading...</p>

  return (
    <div className="">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{text}</p>
        <div>
          <p className="">$ {price}</p>
          <p className="card-stock">Stock : {stock}</p>
        </div>
        {/* <p>{description}</p> */}
      </div>
      <div>
        <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
      </div>
    </div>
  );
}