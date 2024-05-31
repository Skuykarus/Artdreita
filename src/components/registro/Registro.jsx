import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logoAndrea2.png';
import '../../styles/sesion/sesion.css';

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Define useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/register', {  // Asegúrate de que la URL sea correcta
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Usuario registrado exitosamente');
        navigate('/InicioDeSesion');  // Redirigir al home
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Hubo un error al registrar el usuario');
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-cover bg-center w-screen" style={{ overflowX: 'hidden', background: 'linear-gradient(to bottom,#F4F4F4, #3A3A3A)' }}>
      <div className='flex justify-center bg-gray-100 rounded-lg border shadow-lg border-gray-500 px-12 pb-16 md:px-16 mt-60 mb-32' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)' }}>
        <form className="relative md:px-16" onSubmit={handleSubmit}>
          <div className="absolute inset-0 bg-cover bg-center filter brightness-50 blur-xs" style={{backgroundImage: `url(${Logo})`, opacity: 0.1, backgroundSize: '60%', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }}></div>
          <h1 className="pt-8 mb-4 text-center textoForm font-bold">REGISTRO DE USUARIO</h1>
          <div className="mb-4 pt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre de Usuario</label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="nombre" type="text" placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electrónico</label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="email" type="email" placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="password" type="password" placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center pt-4">
            <button className="botonForm" type="submit">Registrarse</button>
          </div>
          <Link to="../InicioDeSesion">
            <div className="text-center mt-4 text-gray-700">¿Ya tienes una cuenta? <strong>Inicia sesión</strong></div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegistroUsuario;