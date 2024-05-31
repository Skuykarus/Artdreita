import React from 'react';
import { Link } from 'react-router-dom';
import Paradax from '../../assets/img/Fondos/fondo.jpg';

const GaleriaIlustraciones = () => {
  const images = [
    'src/assets/img/Ilustraciones/ilustacion1.jpg',
    'src/assets/img/Ilustraciones/ilustacion2.jpg',
    'src/assets/img/Ilustraciones/ilustacion3.jpg',
    'src/assets/img/Ilustraciones/ilustacion4.jpg',
    'src/assets/img/Ilustraciones/ilustacion1.jpg',
    'src/assets/img/Ilustraciones/ilustacion2.jpg',
    'src/assets/img/Ilustraciones/ilustacion3.jpg',
  ];

  return (
     <div className='' style={{ background: `url(${Paradax}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
        <div className='flex pt-12 pb-24 '>
            <div className='flex flex-wrap justify-center'>              
              <div className='flex flex-wrap ml-[7.5rem]'>

                {images.map((image, index) => (
                  <div className='flex pt-8 pr-5' key={index}>
                    <img className="rounded-lg " style={{ height: '30rem', width: '25rem' }} src={image} alt={`Imagen ${index + 1}`} />
                  </div>
                ))}

                <div className='flex mt-8 mr-5 justify-center items-center rounded-lg opacity-80' style={{ height: '30rem', width: '25rem', background: 'radial-gradient(circle, #1B1A1A, #1C1A1A, #383838, #1B1A1A, #000000)' }}>
                  <Link to="/Ilustraciones" className="gallery-button ">
                    {/* <button className="bg-gray-700 hover:bg-white text-white hover:text-black px-4 rounded-3xl">Ver Galería de Ilustraciones</button> */}
                    <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-black rounded-full hover:bg-white group">
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">Ver Galería</span>
                    </a>
                  </Link>
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