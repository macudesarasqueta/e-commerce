import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = "Bienvenidos a mi sitio web"/>
      <section>
        <ItemCount/>
      </section>
    </>
  );
}