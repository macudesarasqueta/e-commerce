import "./App.css";
// import Button from "./components/Button";
import CardProduct from "./components/CardProduct";
import FlexContainer from "./components/FlexContainer";

export default function App() {
  return (
    <>
    {/* <Navbar/>
    <ItemListContainer/> */}
      <section>
        <FlexContainer>

          <CardProduct 
            price={25.50} 
            title="Mate imperial"
            text="Mate de cuero con bombilla"
            img="/images/tarjeta.png"
          />
          <CardProduct 
            price={35.50} 
            title="Mate camionero"
            text="Mate de cuero con bombilla"
            img="/images/tarjeta.png"
          />
          <CardProduct 
            price={15} 
            title="Mate torpedo"
            text="Mate de cuero con bombilla"
            img="/images/tarjeta.png"
          />
        </FlexContainer>
      </section>
    </>
  );
}

{/* <nav>
  <h2>Logo</h2>
  <CartWidget/> Carrito
  <li>
    <a href="">Inicio</a>
    <a href="">Mates</a>
    <a href="">Bombillas</a>
    <a href="">Yerberas</a>
  </li>
</nav> */}