import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Home from './components/home/Home';
import Header from './components/header/Header';
import InicioDeSesion from './components/inicioDeSesion/InicioDeSesion';
import RegistroUsuario from './components/registro/Registro';
import FormularioTatuaje from './components/formularios/FormularioTatuaje';
import FormularioIlustracion from './components/formularios/FormularioIlustracion';
import Tatuajes from './components/tatuajes/Tatuajes';
import Ilustraciones from './components/ilustraciones/Ilustraciones';
import Footer from './components/footer/Footer'
import SobreMi from './components/sobreMi/SobreMi';
import TattooPanel from './components/dashboard/tattooPanel';
import IlustracionPanel from './components/dashboard/ilustracionPanel';
import UsersPanel from './components/dashboard/userPanel';
import Carrito from './components/carrito/Carrito';


const App = () => {
  return (
    <Router>
      <div className="bg-center h-screen w-full max-w-screen-full" >
        <CustomHeader />
        <div className="contact-buttons">
          <DropdownButton />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
          <Route path="/Registro" element={<RegistroUsuario />} />
          <Route path="/FormularioTatuaje" element={<FormularioTatuaje />} />
          <Route path="/FormularioIlustracion" element={<FormularioIlustracion />} />
          <Route path="/Tatuajes" element={<Tatuajes />} />
          <Route path="/Ilustraciones" element={<Ilustraciones />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/TattooPanel" element={<TattooPanel />} />
          <Route path="/UsersPanel" element={<UsersPanel />} />
          <Route path="/IlustracionPanel" element={<IlustracionPanel />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}


const CustomHeader = () => {
  const location = useLocation();
  const isInicioDeSesion = location.pathname === '/InicioDeSesion';
  const isRegistro = location.pathname === '/Registro';
  const isFormularioTatuaje = location.pathname === '/FormularioTatuaje';
  const isFormularioIlustracion = location.pathname === '/FormularioIlustracion';

  return (
    <Header isInicioDeSesion={isInicioDeSesion || isRegistro || isFormularioTatuaje || isFormularioIlustracion} />
  );
}

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTatuajesClick = () => {
    setIsOpen(false);
    window.location.href = "mailto:adrianusa25@gmail.com?subject=Idea para Tatuaje&body=Escribe aquí tu idea para el tatuaje...";
  };

  const handleIlustracionesClick = () => {
    setIsOpen(false);
    window.location.href = "mailto:adriaunsa25@gmail.com?subject=Idea de Ilustración&body=Escribe aquí tu idea para la ilustración...";
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="contact-button" onClick={toggleDropdown} aria-expanded={isOpen}>
        Reserva
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={handleTatuajesClick}>Tatuajes</div>
          <div className="dropdown-item" onClick={handleIlustracionesClick}>Ilustraciones</div>
        </div>
      )}
    </div>
  );
};


export default App;