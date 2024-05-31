import React, { useState, useEffect } from 'react';
 
const UsersPanel = () => {
  const [users, setUsers] = useState([]);

  const id_rol = localStorage.getItem('id_rol');
  const isAdmin = id_rol === '1';
 
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-500">No tienes permiso para ver esta página.</p>
      </div>
    );
  }
 
  return (
    <div id="tattoos-container" className="flex h-full justify-center items-center bg-cover bg-center w-screen" style={{ backgroundSize: '100% auto' }}>
        <div className="w-full px-4 text-center text-black p-8 rounded-lg mt-custom mx-16 mb-5">
            <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>
            {users.map(user => (
            <div key={user.id_user} className="bg-black text-white p-4 mb-4 rounded shadow-lg">
                <p><strong>Nombre:</strong> {user.nombre}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Rol:</strong> {user.id_rol === 1 ? 'user' : 'admin'}</p>
            </div>
            ))}
        </div>
    </div>
  );
};
 
export default UsersPanel;