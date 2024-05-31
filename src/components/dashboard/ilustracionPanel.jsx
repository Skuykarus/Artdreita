import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StylesPanels.css';
import { Link } from 'react-router-dom';

const IlustracionPanel = () => {
  const [ilustraciones, setIlustraciones] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [ilustracionEditada, setIlustracionEditada] = useState(null);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [src, setSrc] = useState('');
  const [error, setError] = useState('');

  const id_rol = localStorage.getItem('id_rol');
  const isAdmin = id_rol === '1';

  useEffect(() => {
    fetchIlustraciones();
  }, []);

  const fetchIlustraciones = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/ilustraciones');
      if (response && response.data) {
        setIlustraciones(response.data);
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al obtener las ilustraciones:', error);
      setError('Error al obtener las ilustraciones.');
    }
  };

  const handleDelete = async (id_ilustracion) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/ilustraciones/${id_ilustracion}`);
      if (response && response.data) {
        console.log('Ilustración eliminada correctamente:', response.data);
        setIlustraciones(ilustraciones.filter(ilustracion => ilustracion.id_ilustracion !== id_ilustracion));
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al eliminar la ilustración:', error);
      setError('Error al eliminar la ilustración.');
    }
  };

  const handleEdit = (ilustracion) => {
    setIlustracionEditada(ilustracion);
    setNombre(ilustracion.nombre);
    setPrecio(ilustracion.precio);
    setSrc(ilustracion.src);
    setShowEditPopup(true);
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    const updatedData = { nombre, precio, src };

    try {
      const response = await axios.put(`http://localhost:3000/api/ilustraciones/${ilustracionEditada.id_ilustracion}`, updatedData);
      if (response && response.data) {
        console.log('Ilustración editada correctamente:', response.data);
        setShowEditPopup(false);
        fetchIlustraciones();
        resetForm();
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al editar la ilustración:', error);
    }
  };

  const handleAddIlustracion = async (event) => {
    event.preventDefault();
    const nuevaIlustracion = { nombre, precio, src };

    try {
      const response = await axios.post('http://localhost:3000/api/ilustraciones', nuevaIlustracion);
      if (response && response.data) {
        console.log('Ilustración agregada correctamente:', response.data);
        setShowEditPopup(false);
        fetchIlustraciones();
        resetForm();
      } else {
        console.error('Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error al agregar la ilustración:', error);
    }
  };

  const resetForm = () => {
    setIlustracionEditada(null);
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
    <div id="ilustraciones-container" className="flex h-full justify-center items-center bg-cover bg-center w-screen" style={{ backgroundSize: '100% auto' }}>
      <div className="w-full px-4 text-center text-black p-8 rounded-lg mt-custom mx-16 mb-5">
        <Link to="../UsersPanel">
          <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mb-4">
            Panel de usuarios
          </button>
        </Link>
        <h1 className="text-2xl font-bold mb-4">Lista de Ilustraciones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ilustraciones.map(ilustracion => (
            <div key={ilustracion.id_ilustracion} className="bg-black text-white p-4 rounded shadow-lg">
              <p><strong>Nombre:</strong> {ilustracion.nombre}</p>
              <p><strong>Precio:</strong> {ilustracion.precio}</p>
              <p className="no-wrap truncate"><strong>Src:</strong> {ilustracion.src}</p>
              <button className="mt-2 mr-2 bg-gray-700 text-white p-2 rounded" onClick={() => handleEdit(ilustracion)}>Editar</button>
              <button className="mt-2 bg-red-800 text-white p-2 rounded" onClick={() => handleDelete(ilustracion.id_ilustracion)}>Eliminar</button>
            </div>
          ))}
        </div>
        {showEditPopup && (
          <div className="popup fixed inset-0 flex justify-center items-center backdrop-blur-lg bg-black/60">
            <div className="popup-content bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">{ilustracionEditada ? 'Editar Ilustración' : 'Agregar Ilustración'}</h2>
              <form onSubmit={ilustracionEditada ? handleSubmitEdit : handleAddIlustracion}>
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
                <button className="bg-green-500 text-white p-2 rounded mr-2" type="submit">{ilustracionEditada ? 'Guardar Cambios' : 'Agregar Ilustración'}</button>
                <button className="bg-gray-500 text-white p-2 rounded" type="button" onClick={handleClosePopup}>Cancelar</button>
              </form>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </div>
        )}
        <button className="mt-4 bg-gray-800 text-white p-2 rounded" onClick={handleOpenPopup}>Agregar Ilustración</button>
      </div>
    </div>
  );
};

export default IlustracionPanel;