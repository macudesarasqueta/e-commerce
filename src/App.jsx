import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  
  return (
    <BrowserRouter 
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <Navbar/>
    <Routes>
      <Route 
      path="/"
      element={<ItemListContainer greeting="Amate.allover"/>}
      />
      <Route 
      path="/category/:catid" 
      element={<ItemListContainer greeting="Compras por categoría"/>}/>
      <Route 
      path="/item/:id"
      element={<ItemDetailContainer/>}
      />
    </Routes>

    <footer className="footer">
        <p className="parrafo-footer">&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        {/* <div className="redes-sociales">
            <a href="https://www.instagram.com/fcbhockey?igsh=YmMzdXdzbHdrcHZj" target="_blank"><img src="../imagenes/instagram.png" width="20px" alt="Instagram"></a>
            <a href="https://www.facebook.com/fcbarcelona/" target="_blank"><img src="../imagenes/facebook.png" width="20px" alt="Facebook"></a>
            <a href="https://www.tiktok.com/@fcbarcelona" target="_blank"><img src="../imagenes/tik-tok.png" width="20px" alt="TikTok"></a>
            <a href="https://open.spotify.com/user/31gorrj76f2m3wczoifm6f6tbn3q?si=a20bf0c076684729&nd=1" target="_blank"><img src="../imagenes/spotify.png" width="20px" alt="Spotify"></a>
            <a href="https://www.youtube.com/user/fcbarcelona" target="_blank"><img src="../imagenes/youtube.png" width="20px" alt="YouTube"></a>
        </div> */}
    </footer>
    </BrowserRouter>
  );
}