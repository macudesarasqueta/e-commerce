import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import React, { useState, useRef, useEffect } from 'react';
import "./navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
  
    // Cerrar el menú si se hace clic fuera de él
    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleLinkClick = () => {
      setIsOpen(false);
    };
  
    return (
      <nav className="relative bg-white p-6">
        <div className="flex justify-between items-center">
        <NavLink to="/">
          <img src="images/icon.png" className= "flex items-center" width={40} height={40} alt="logo"/>
        </NavLink>
          {/* Botón de hamburguesa - visible solo en móviles */}
          <div className="sm:hidden">
            <button
              onClick={setIsOpen}
              className="text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <div className="space-y-1">
                <span className="block w-8 h-1 bg-black"></span>
                <span className="block w-8 h-1 bg-black"></span>
                <span className="block w-8 h-1 bg-black"></span>
                <span className="block w-8 h-1 bg-black"></span>
              </div>
            </button>
          </div>
  
          {/* Menú de navegación - visible solo en pantallas más grandes */}
          <ul className="hidden sm:flex space-x-4">
            <li><NavLink to="/" className="text-black">Inicio</NavLink></li>
            <li><NavLink to="/item" className="text-black">Detalle</NavLink></li>
            <li><NavLink to="/mates" className="text-black">Mates</NavLink></li>
            <li><NavLink to="/bombillas" className="text-black">Bombillas</NavLink></li>
            <li><NavLink to="/yerberas" className="text-black">Yerberas</NavLink></li>
          </ul>
          <CartWidget/>
        </div>
  
        {/* Fondo negro y menú hamburguesa - visible solo en móviles */}
        {isOpen && (
          <div className="hamburguer-menu">
            <ul
              ref={menuRef}
              className="bg-white p-6 rounded-lg space-y-4"
            >
              <li><NavLink to="/" className="text-black" onClick={handleLinkClick}>Inicio</NavLink></li>
              <li><NavLink to="/item" className="text-black" onClick={handleLinkClick}>Detalle</NavLink></li>
              <li><NavLink to="/mates" className="text-black" onClick={handleLinkClick}>Mates</NavLink></li>
              <li><NavLink to="/bombillas" className="text-black" onClick={handleLinkClick}>Bombillas</NavLink></li>
              <li><NavLink to="/yerberas" className="text-black" onClick={handleLinkClick}>Yerberas</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    );
};