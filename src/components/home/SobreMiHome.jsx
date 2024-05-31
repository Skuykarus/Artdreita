import { Link } from 'react-router-dom';
import FotoSobreAndrea from '../../assets/img/Fondos/fondoSobreMi2.png';
import FotoSobreAndrea2 from '../../assets/img/Fondos/fondoSobreMi.jpg';
import Video from '../../assets/img/Fondos/fondoSobreMiPC.m4v';
import '../../styles/style.css';
import '../../styles/home/sobremi.css';


const SobreMiHome = () => {
  return (
    <section className='flex bg-gray-600'>
       {/* <img 
        src={FotoSobreAndrea} 
        className="img-default flex-1 h-auto object-cover" 
        alt="Foto sobre Andrea" 
      /> */}
      
       <video 
        /* ref={videoRef} */
        src={Video} 
        className="img-default flex-1 h-auto object-cover" 
        alt="Foto sobre Andrea"
        autoPlay
        muted
      />
      <img 
        src={FotoSobreAndrea2} 
        className="img-small flex-1 h-auto object-cover" 
        alt="Foto sobre Andrea versión pequeña" 
      />
      
      <div className="titulo flex flex-col absolute custom:right-40 custom:top-2/4">
      <h1 className=' custom:mb-3 px-4 font-custom text-white'>ARTDREITA</h1>
        <div className='justify-center text-center'>
          <Link to="/SobreMi">
            <a href="#_" className="botonsobremi relative inline-flex items-center justify-center custom:p-4 text-white custom:px-6 custom:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sobre Mi</span>
              <span className="relative invisible text-white">Sobre Mi</span>
            </a>
          </Link>
        </div>        
      </div>
    </section>
  );
}

export default SobreMiHome;