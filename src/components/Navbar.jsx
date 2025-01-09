import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import React, { useState, useRef, useEffect } from 'react';

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
  
    return (
      <nav className="relative bg-white p-4 shadow-md">
        <div className="flex justify-between items-center">
        <NavLink to="/">
          <img src="images/Untitled design.png" className= "flex items-center" width={40} height={40} alt="logo"/>
        </NavLink>
          {/* Botón de hamburguesa - visible solo en móviles */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Abrir menú</span>
              <div className="space-y-1">
                <span className="block w-8 h-1 bg-black"></span>
                <span className="block w-8 h-1 bg-black"></span>
                <span className="block w-8 h-1 bg-black"></span>
              </div>
            </button>
          </div>
  
          {/* Menú de navegación - visible solo en pantallas más grandes */}
          <ul className="hidden sm:flex space-x-4">
            <li><NavLink to="/" className="text-black hover:text-gray-700">Inicio</NavLink></li>
            <li><NavLink to="/mates" className="text-black hover:text-gray-700">Mates</NavLink></li>
            <li><NavLink to="/bombillas" className="text-black hover:text-gray-700">Bombillas</NavLink></li>
            <li><NavLink to="/yerberas" className="text-black hover:text-gray-700">Yerberas</NavLink></li>
          </ul>
          <CartWidget/>
        </div>
  
        {/* Fondo negro y menú hamburguesa - visible solo en móviles */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center sm:hidden">
            <ul
              ref={menuRef}
              className="bg-white p-6 rounded-lg space-y-4"
            >
              <li><NavLink to="/" className="text-black hover:text-gray-700">Inicio</NavLink></li>
              <li><NavLink to="/mates" className="text-black hover:text-gray-700">Mates</NavLink></li>
              <li><NavLink to="/bombillas" className="text-black hover:text-gray-700">Bombillas</NavLink></li>
              <li><NavLink to="/yerberas" className="text-black hover:text-gray-700">Yerberas</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    );
};