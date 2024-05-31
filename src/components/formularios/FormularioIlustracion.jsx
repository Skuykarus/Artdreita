import React from 'react';
import Logo from '../../assets/img/logoAndrea.png';

const FormularioIlustracion = () => {
  return (
    <div className="flex justify-center items-center h-auto bg-cover bg-center w-screen " style={{overflowX: 'hidden', background: 'linear-gradient(to bottom,#F4F4F4,  #3A3A3A)'}}>
      <div className='flex justify-center bg-gray-100 rounded-lg border shadow-lg border-gray-500 px-12 pb-16 md:px-16 mt-60 mb-32 ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)' }}>
      <form className="relative md:px-16" >
        <div className="absolute inset-0 bg-cover bg-center filter brightness-50 blur-xs" style={{ backgroundImage: `url(${Logo})`, opacity: 0.1, backgroundSize: '60%', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }}></div>
        <h1 className="pt-4 mb-2 text-center textoForm font-bold ">FORMULARIO DE ILUSTRACIÓN</h1>
        <div className="mb-2 pt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
            </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
            type="text" placeholder="Nombre" />
        </div>
        <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
            type="text" placeholder="Apellido" />
        </div>
        <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
            type="email" placeholder="Correo Electrónico" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Descripción de tu idea
          </label>
          <textarea
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
            placeholder="Descripción" />
        </div>
        <div className="flex justify-center">
          <button className="botonForm mt-8" type="button">
            Enviar tu idea
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default FormularioIlustracion;