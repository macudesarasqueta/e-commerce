// 1. /Icono>
// 2. Componente Navbar con links (lading page, no hace falta que funcionen los link)
// 3. Crear CartWidget como componente con un icono o img con numero fijo (carrito)

//4. Crear un componente contenedor ItemListContainer "Bienvenidos a mi tienda"

//App -> NavBar -> Cart Widget
//App -> ItemListContainer ("greeting")

import React from 'react';
import CartWidget from './CartWidget';


export default function Navbar () {
    return (
        <nav>
            <img src="/images/Untitled design.png" width={30} alt="logo" />
            <li style = {{display: 'inline-block'}}>
                <a href="">&nbsp;Inicio </a>
                <a href="">Mates </a>
                <a href="">Bombillas </a>
                <a href="">Yerberas</a>
            </li>
            <CartWidget/> Carrito 3
        </nav>
    );
};