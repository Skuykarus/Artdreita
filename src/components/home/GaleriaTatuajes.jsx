import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FotoSobreAndrea from '../../assets/img/Fondos/fondoSobreMi.png';
import '../../styles/galeriaTatuajes/CSSGaleriaTatuajes.css';


const GaleriaTatuajes = () => {
  // Array de URLs de imágenes
  const images = [
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js';
    script.async = true;

    document.body.appendChild(script);

    const initSwiper = () => {
      const swiper = new Swiper('.mySwiper', {
        // Configuración de Swiper
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        loop:true,
        loopAdditionalSlides: 0,
        loopedSlides: 3, 
        coverflowEffect: {
          depth: 50, // Profundidad de las diapositivas en píxeles
          modifier: 1, // Multiplicador del efecto
          rotate: 10, // Rotación de las diapositivas en grados
          scale: 0.9, // Efecto de escala de las diapositivas
          slideShadows: true, // Sombras de las diapositivas
          stretch: 45 // Espacio de estiramiento entre diapositivas en píxeles
        }
      });
    };

    script.onload = () => {
      initSwiper();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full h-full" style={{ background: 'linear-gradient(to bottom, #1B1A1A, #383838, #8E8E8E, #383838, #1B1A1A)' }}>
      <div className='flex  text-center justify-center'>
        <div>
          <div className='flex swiper mySwiper'>
            <div className='flex swiper-wrapper'>
              {images.map((image, index) => (
                <div className='flex swiper-slide' key={index}>
                  <img className="rounded-sm" style={{ /* height: '35rem', width: '25rem' */ }} src={image} alt={`Imagen ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className='mb-10'>
            <Link to="/Tatuajes" className="gallery-button">{/* <button className="bg-white hover:bg-gray-700 text-black hover:text-white px-4 rounded-3xl">Ver Galería de Tatuajes</button> */}<a href="#_" class=" inline-block text-lg group">
              <span class=" z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class=" inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class=" left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="">Tattoos</span>
              </span>              
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaTatuajes;