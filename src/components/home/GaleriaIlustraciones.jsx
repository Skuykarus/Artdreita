import React from 'react';
import { Link } from 'react-router-dom';
import Paradax from '../../assets/img/Fondos/fondo.jpg';
import '../../styles/home/GaleriaIlustraciones.css';


const GaleriaIlustraciones = () => {
  const images = [
    'src/assets/img/Ilustraciones/ilustacion1.jpg',
    'src/assets/img/Ilustraciones/ilustacion2.jpg',
  ];

  return (
     <div className='flex justify-center items-center h-auto bg-cover bg-center w-screen' style={{ background: `url(${Paradax}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
        <div className='flex pt-12 pb-24 '>
            <div className='flex flex-wrap justify-center'>              
              <div className='flex flex-wrap'>

                {images.map((image, index) => (
                  <div className='imagenes flex pt-8 custom:pr-5' key={index}>
                    <img className="imagen rounded-lg " src={image} alt={`Imagen ${index + 1}`} />
                  </div>
                ))}
                <div className='galeria'>
                <div className="button1 flex justify-center items-center rounded-xl">
                    <Link to="/Ilustraciones" className="gallery-button" style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span class="custom:relative inline-flex custom:items-center justify-start inline-block custom:px-5 py-3 overflow-hidden font-medium transition-all bg-black rounded-full group" style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}>
                        <span class="custom:absolute custom:inset-0 border-2 border-transparent group-hover:border-slate-300 rounded-md transition-all "></span>
                        <span class="custom:relative z-10 w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-slate-200">Ver Galería completa</span>
                      </span>
                    </Link>
                  </div>
                </div>
                
              </div> 
          </div>
        </div>


        {/*<div className='flex justify-center p-10'>
          <Link to="/Ilustraciones" className="gallery-button">
             <button className="bg-gray-700 hover:bg-white text-white hover:text-black px-4 rounded-3xl">Ver Galería de Ilustraciones</button> 
            <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Ver Galería</span>
              <span class="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </Link>
        </div>*/}
        
      </div>
  );
}

export default GaleriaIlustraciones;