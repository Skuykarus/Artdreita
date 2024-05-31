import React, { useState, useEffect } from 'react';
import FotoSobreAndrea from '../../assets/img/Fondos/fondoIlusTatos.jpg';
import { Link } from 'react-router-dom';
import { updateCartCount } from '../header/cartEvents';
import '../../styles/articulos/Ilustraciones.css'

const Ilustraciones = () => {
  const [ilustraciones, setIlustraciones] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const id_user = localStorage.getItem('id_user'); // Recupera el ID del usuario desde el almacenamiento local
  const id_rol = localStorage.getItem('id_rol');
  const isAdmin = id_rol === '1';  

  useEffect(() => {
    fetch('http://localhost:3000/api/ilustraciones')
      .then(response => response.json())
      .then(data => setIlustraciones(data))
      .catch(error => console.error('Error al obtener las ilustraciones:', error));
  }, []);

  useEffect(() => {
    if (id_user) {
      fetch(`http://localhost:3000/api/carrito/${id_user}`)
        .then(response => response.json())
        .then(data => setCarrito(data))
        .catch(error => console.error('Error al obtener el carrito:', error));
    }
  }, [id_user]);

  useEffect(() => {
    const container = document.getElementById('tattoos-container');
    if (container) {
      container.style.backgroundImage = `url(${FotoSobreAndrea})`;
    }
    return () => {
      if (container) {
        container.style.backgroundImage = '';
      }
    };
  }, []);

  const addToCart = (id_ilustracion) => {
    if (!id_user) {
      console.error('Error: id_user no está definido');
      return;
    }

    fetch('http://localhost:3000/api/carrito', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_user, id_ilustracion, cantidad: 1 })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCarrito([...carrito, { id_user, id_ilustracion, cantidad: 1 }]);
        updateCartCount(); // Emitir el evento personalizado
    })
      .catch(error => console.error('Error al agregar al carrito:', error));
  };

  const isItemInCart = (id_ilustracion) => {
    return carrito.some(item => item.id_ilustracion === id_ilustracion);
  };

  return (
    <div id="tattoos-container" className="flex justify-center items-center bg-cover bg-center w-screen" style={{ backgroundSize: '100% auto' }}>
      <div className="ilustraciones-container w-full px-4 bg-gray-500 bg-opacity-90 text-center text-white p-8 rounded-lg mt-custom mx-16 mb-5">
        <h1 className="text-4xl font-bold mb-8">Ilustraciones Disponibles</h1>
        {isAdmin && (
          <Link to="../IlustracionPanel">
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mb-4">
              Agregar Ilustracion
            </button>
          </Link>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-6 pr-6">
          {ilustraciones.map(ilustracion => (
            <div key={ilustracion.id_ilustracion} className="bg-white text-black p-1 rounded shadow">
              <img src={ilustracion.src} alt={ilustracion.nombre} className="rounded h-auto w-auto mx-auto" />
              <h2 className="text-lg mt-2 font-semibold">{ilustracion.nombre}</h2>
              <p className="text-gray-600">${ilustracion.precio}</p>
              <button
                onClick={() => addToCart(ilustracion.id_ilustracion)}
                disabled={isItemInCart(ilustracion.id_ilustracion)}
                className={`mt-2 mb-4 left-4 py-2 px-4 rounded-2xl transition duration-300 ${
                  isItemInCart(ilustracion.id_ilustracion) ? 'bg-gray-600 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-600'
                }`}
              >
                {isItemInCart(ilustracion.id_ilustracion) ? 'Añadido' : 'Comprar'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ilustraciones;