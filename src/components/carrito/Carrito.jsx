import React, { useState, useEffect } from 'react';
import FotoSobreAndrea from '../../assets/img/Fondos/fondoIlusTatos.jpg';
import { updateCartCount } from '../header/cartEvents';

const Carrito = () => {
  const [cartItems, setCartItems] = useState([]);
  const id_user = localStorage.getItem('id_user');

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

  useEffect(() => {
    if (id_user) {
      fetch(`http://localhost:3000/api/carrito/${id_user}`)
        .then(response => response.json())
        .then(data => setCartItems(data))
        .catch(error => console.error('Error al obtener el carrito:', error));
    }
  }, [id_user]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  const handleRemoveItem = (id_carrito_item) => {
    fetch(`http://localhost:3000/api/carrito/${id_carrito_item}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      updateCartCount();
      setCartItems(prevItems => prevItems.filter(item => item.id_carrito_item !== id_carrito_item));
    })
    .catch(error => console.error('Error al eliminar el producto:', error));
  };

  const handleEmptyCart = () => {
    fetch(`http://localhost:3000/api/carrito/empty/${id_user}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      updateCartCount();
      setCartItems([]);
    })
    .catch(error => console.error('Error al vaciar el carrito:', error));
  };

  return (
    <div id="tattoos-container" className="flex justify-center items-center w-screen min-h-screen bg-gray-100 p-6"  style={{ backgroundSize: '100% auto' }}>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-40 border border-black">
        <h1 className="text-2xl font-bold mb-4">MI CESTA</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id_carrito_item} className="flex items-center border-b border-gray-200 py-4">
                  <img src={item.src || 'default-image.jpg'} alt={item.tatuaje || item.ilustracion} className="w-20 h-20 object-cover rounded mr-4" />
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">{item.tatuaje || item.ilustracion}</h2>
                        <p className="text-gray-600">{item.precio}€</p>
                    </div>
                    <div className="flex items-center">
                    <button onClick={() => handleRemoveItem(item.id_carrito_item)} className="px-2 py-1 bg-gray-200 rounded">Eliminar</button>
                    </div>
                </div>
              ))
            ) : (
              <p className="text-lg mt-2">Tu carrito está vacío.</p>
            )}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">RESUMEN</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal artículos</span>
              <span>{calculateTotal()}€</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total (Impuestos incluidos)</span>
              <span>{calculateTotal()}€</span>
            </div>
            <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">
              <i className="fab fa-paypal"></i> Pagar con PayPal
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-6">
        <button onClick={handleEmptyCart} className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">Vaciar cesta</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;