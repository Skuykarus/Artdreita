import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logoAndrea2.png';
import '../../styles/sesion/sesion.css';

const InicioDeSesion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Define useNavigate

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('token', data.token); // Almacena el token en localStorage
        localStorage.setItem('id_user', data.id_user);
        localStorage.setItem('id_rol', data.id_rol);
        navigate('/'); // Redirige al home
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un error al iniciar sesión');
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-cover bg-center w-screen " style={{overflowX: 'hidden', background: 'linear-gradient(to bottom,#F4F4F4,  #3A3A3A)'}}>
    <div className='form-container flex justify-center bg-gray-100 rounded-lg border shadow-lg border-gray-500 px-12 pb-16 md:px-16 mt-60 mb-32 ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)' }}>

      <form className="relative md:px-16" >
        <div className="absolute inset-0 bg-cover bg-center filter brightness-50 blur-xs " style={{backgroundImage: `url(${Logo})`, opacity: 0.1, backgroundSize: '60%', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }}></div>
        <h1 className="pt-8 mb-2 text-center textoForm font-bold ">INICIO DE SESIÓN</h1>
        <div className="mb-4 pt-12">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
              Correo Electrónico
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="usuario" type="text" placeholder="Correo Electrónico" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-6" style={{ zIndex: 1 }}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        <div className="flex justify-center items-center pt-4">
          <button
            className="botonForm"
            type="button" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>
        <Link to="../Registro">
          <div className="text-center mt-4 text-gray-700">
            No tienes una cuenta? <a href="#" className="text-black font-bold ">Regístrate</a>
          </div>
        </Link>
      </form>
    </div>
    
  </div>
  );
}
export default InicioDeSesion;