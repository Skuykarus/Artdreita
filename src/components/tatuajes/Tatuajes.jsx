import React, { useState, useEffect } from 'react';
import FotoSobreAndrea from '../../assets/img/Fondos/fondoIlusTatos.jpg';
import { Link } from 'react-router-dom';
import { updateCartCount } from '../header/cartEvents';
import '../../styles/articulos/Tatuajes.css'

const Tatuajes = () => {
  const [tatuajes, setTatuajes] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const id_user = localStorage.getItem('id_user');
  const id_rol = localStorage.getItem('id_rol');
  const isAdmin = id_rol === '1';

  useEffect(() => {
    fetch('http://localhost:3000/api/tatuajes')
      .then(response => response.json())
      .then(data => setTatuajes(data))
      .catch(error => console.error('Error al obtener los tatuajes:', error));
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

  const addToCart = (id_tatuaje) => {
    if (!id_user) {
      console.error('Error: id_user no está definido');
      return;
    }

    fetch('http://localhost:3000/api/carrito', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_user, id_tatuaje, cantidad: 1 })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCarrito([...carrito, { id_user, id_tatuaje, cantidad: 1 }]);
        updateCartCount();
      })
      .catch(error => console.error('Error al agregar al carrito:', error));
  };

  const isItemInCart = (id_tatuaje) => {
    return carrito.some(item => item.id_tatuaje === id_tatuaje);
  };

  return (
    <div id="tattoos-container" className="flex justify-center items-center bg-cover bg-center w-screen" style={{ backgroundSize: '100% auto' }}>
      <div className="tattoos-container w-full px-4 bg-gray-500 bg-opacity-90 text-center text-white p-8 rounded-lg mt-custom mx-16 mb-5">
        <h1 className="text-4xl font-bold mb-8">Tatuajes Disponibles</h1>
        {isAdmin && (
          <Link to="../TattooPanel">
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mb-4">
              Agregar Tatuaje
            </button>
          </Link>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 custom:grid-cols-5 gap-4">
          {tatuajes.map(tatuaje => (
            <div key={tatuaje.id_tatuaje} className="bg-white text-black p-4 rounded shadow">
              <img src={tatuaje.src} alt={tatuaje.nombre} className="rounded h-64 w-52 mx-auto" />
              <h2 className="text-lg mt-2 font-semibold">{tatuaje.nombre}</h2>
              <p className="text-gray-600">${tatuaje.precio}</p>
              <button
                onClick={() => addToCart(tatuaje.id_tatuaje)}
                disabled={isItemInCart(tatuaje.id_tatuaje)}
                className={`mt-2 mb-4 left-4 py-2 px-4 rounded-2xl transition duration-300 ${
                  isItemInCart(tatuaje.id_tatuaje) ? 'bg-gray-700 cursor-not-allowed text-white' : 'bg-black text-white hover:bg-gray-600'
                }`}
              >
                {isItemInCart(tatuaje.id_tatuaje) ? 'Añadido' : 'Comprar'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tatuajes;