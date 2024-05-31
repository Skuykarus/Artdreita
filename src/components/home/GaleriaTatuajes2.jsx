import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/CSSGaleriaTatuajes.css';

const GaleriaTatuajes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo2.jpg',
    'src/assets/img/Tattos/tattoo3.jpg',
    'src/assets/img/Tattos/tattoo1.jpg',
    'src/assets/img/Tattos/tattoo2.jpg',
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getClassName = (index) => {
    const difference = (index - currentIndex + images.length) % images.length;
    if (difference === 2) return 'gallery-item gallery-item-1'; // La imagen que estaba en la posición 3 ahora está en la posición 1
    if (difference === 1) return 'gallery-item gallery-item-2'; // La imagen que estaba en la posición 4 ahora está en la posición 2
    if (difference === 0) return 'gallery-item gallery-item-3'; // La imagen que estaba en la posición 5 ahora está en la posición 3
    if (difference === 4) return 'gallery-item gallery-item-4'; // La imagen que estaba en la posición 1 ahora está en la posición 4
    if (difference === 3) return 'gallery-item gallery-item-5'; // La imagen que estaba en la posición 2 ahora está en la posición 5
  };

  const getOpacity = (index) => {
    const difference = (index - currentIndex + images.length) % images.length;
    if (difference === 1 || difference === 4) return 0.8; // Opacidad para las imágenes en las posiciones 1 y 4
    if (difference === 2 || difference === 3) return 0.2; // Opacidad para la imagen en la posición 3
    return 1; // Opacidad completa para las imágenes en las posiciones 2 y 5
  };

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id  = setInterval(() => {
      // Llamar a la función deseada aquí
      handlePrevious();
    }, 2500);
    setIntervalId(id);

    // Limpiar el intervalo cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(id);
  }, []);


  const handleDragStart = (event) => {
    const initialX = event.clientX;
    clearInterval(intervalId);
    // Agrega un event listener para detectar el final del arrastre
    document.addEventListener('dragend', handleDragEnd);

    // Función para manejar el final del arrastre
    function handleDragEnd(event) {
        // Remueve el event listener una vez que el arrastre ha terminado
        document.removeEventListener('dragend', handleDragEnd);

        // Obtiene la posición final del cursor al finalizar el arrastre
        const finalX = event.clientX;

        // Calcula la diferencia entre la posición inicial y final del cursor
        const deltaX = finalX - initialX;

        // Determina la dirección del movimiento (izquierda o derecha) según el valor de deltaX
        if (deltaX > 0) {
            console.log('Movimiento hacia la derecha');            
            handleNext();
            // Realiza acciones específicas para el movimiento hacia la derecha
        } else if (deltaX < 0) {
            console.log('Movimiento hacia la izquierda');
            handlePrevious();
            // Realiza acciones específicas para el movimiento hacia la izquierda
        }
    }

    
  }

  

  return (
    <section className="w-full h-full" style={{ background: 'linear-gradient(to bottom, #1B1A1A, #383838, #8E8E8E, #383838, #1B1A1A)' }}>
      <div className='flex  text-center justify-center'>
        <div>
          <div className='gallery'>
            <div className='gallery-container'>
              {images.map((imageUrl, index) => (
                <img onDragStart={handleDragStart}
                  key={index}
                  className={getClassName(index)}
                  src={imageUrl}
                  style={{
                    opacity: getOpacity(index),
                    zIndex: currentIndex === index ? 2 : 1,
                  }}
                  alt={`Tattoo ${index + 1}`}
                />
              ))}
            </div>
            <div className='gallery-controls'>
              {/* <button className='gallery-controls-previous text-white' onClick={handleNext}>a</button>
              <button className='gallery-controls-next text-white' onClick={handlePrevious}><img style={{ height: '50px', width: '50px' }} src="src/assets/img/Links/Next.png" /></button> */}
            </div>
          </div>
          <div className='mb-10'>
            <Link to="/Tatuajes" className="gallery-button">
              <a href="#_" className="botonsobremi relative inline-flex items-center justify-center custom:p-4 text-white custom:px-6 custom:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Tatuajes</span>
                <span className="relative invisible text-white">Tatuajes</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaTatuajes;