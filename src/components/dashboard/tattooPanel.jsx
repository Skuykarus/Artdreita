import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StylesPanels.css';
import { Link } from 'react-router-dom';


const TattooPanel = () => {
  const [tatuajes, setTatuajes] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [tatuajeEditado, setTatuajeEditado] = useState(null);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [src, setSrc] = useState('');
  const [error, setError] = useState('');
  const id_rol = localStorage.getItem('id_rol');
  const isAdmin = id_rol === '1';

  useEffect(() => {
    fetchTatuajes();
  }, []);

  const fetchTatuajes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tatuajes');
      if (response && response.data) {
        setTatuajes(response.data);
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al obtener los tatuajes:', error);
      setError('Error al obtener los tatuajes.');
    }
  };

  const handleDelete = async (id_tatuaje) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/tatuajes/${id_tatuaje}`);
      if (response && response.data) {
        console.log('Tatuaje eliminado correctamente:', response.data);
        setTatuajes(tatuajes.filter(tatuaje => tatuaje.id_tatuaje !== id_tatuaje));
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al eliminar el tatuaje:', error);
      setError('Error al eliminar el tatuaje.');
    }
  };

  const handleEdit = (tatuaje) => {
    setTatuajeEditado(tatuaje);
    setNombre(tatuaje.nombre);
    setPrecio(tatuaje.precio);
    setSrc(tatuaje.src);
    setShowEditPopup(true);
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    const updatedData = { nombre, precio, src };

    try {
      const response = await axios.put(`http://localhost:3000/api/tatuajes/${tatuajeEditado.id_tatuaje}`, updatedData);
      if (response && response.data) {
        console.log('Tatuaje editado correctamente:', response.data);
        setShowEditPopup(false);
        fetchTatuajes(); // Refresh the list without reloading the page
        resetForm();
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al editar el tatuaje:', error);
    }
  };

  const handleAddTatuaje = async (event) => {
    event.preventDefault();
    const nuevoTatuaje = { nombre, precio, src };

    try {
      const response = await axios.post('http://localhost:3000/api/tatuajes', nuevoTatuaje);
      if (response && response.data) {
        console.log('Tatuaje agregado correctamente:', response.data);
        setShowEditPopup(false);
        fetchTatuajes();
        resetForm();
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al agregar el tatuaje:', error);
    }
  };

  const resetForm = () => {
    setTatuajeEditado(null);
    setNombre('');
    setPrecio('');
    setSrc('');
    setError('');
  };

  const handleOpenPopup = () => {
    resetForm();
    setShowEditPopup(true);
  };

  const handleClosePopup = () => {
    resetForm();
    setShowEditPopup(false);
  };

  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-500">No tienes permiso para ver esta página.</p>
      </div>
    );
  }
 

  return (
    <div id="tattoos-container" className="flex justify-center items-center bg-cover bg-center w-screen" style={{ backgroundSize: '100% auto' }}>
      <div className="w-full px-4 text-center text-black p-8 rounded-lg mt-custom mx-16 mb-5">
      <Link to="../UsersPanel">
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mb-4">
              Panel de usuarios
            </button>
          </Link>
        <h1 className="text-2xl font-bold mb-4">Lista de Tatuajes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tatuajes.map(tatuaje => (
            <div key={tatuaje.id_tatuaje} className="bg-black text-white p-4 rounded shadow-lg">
              <p><strong>Nombre:</strong> {tatuaje.nombre}</p>
              <p><strong>Precio:</strong> {tatuaje.precio}</p>
              <p className="no-wrap truncate"><strong>Src:</strong> {tatuaje.src}</p>
              <button className="mt-2 mr-2 bg-gray-700 text-white p-2 rounded" onClick={() => handleEdit(tatuaje)}>Editar</button>
              <button className="mt-2 bg-red-800 text-white p-2 rounded" onClick={() => handleDelete(tatuaje.id_tatuaje)}>Eliminar</button>
            </div>
          ))}
        </div>
        {showEditPopup && (
          <div className="popup fixed inset-0 flex justify-center items-center backdrop-blur-lg bg-black/60">
            <div className="popup-content bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">{tatuajeEditado ? 'Editar Tatuaje' : 'Agregar Tatuaje'}</h2>
              <form onSubmit={tatuajeEditado ? handleSubmitEdit : handleAddTatuaje}>
                <div className="mb-4">
                  <label className="block text-black mb-2">Nombre:</label>
                  <input className="w-full p-2 border rounded" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2">Precio:</label>
                  <input className="w-full p-2 border rounded" type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2">Src:</label>
                  <input className="w-full p-2 border rounded" type="text" value={src} onChange={(e) => setSrc(e.target.value)} />
                </div>
                <button className="bg-green-500 text-white p-2 rounded mr-2" type="submit">{tatuajeEditado ? 'Guardar Cambios' : 'Agregar Tatuaje'}</button>
                <button className="bg-gray-500 text-white p-2 rounded" type="button" onClick={handleClosePopup}>Cancelar</button>
              </form>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </div>
        )}
        <button className="mt-4 bg-gray-800 text-white p-2 rounded" onClick={handleOpenPopup}>Agregar Tatuaje</button>
      </div>
    </div>
  );
};

export default TattooPanel;

