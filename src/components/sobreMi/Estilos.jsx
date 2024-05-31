import '../../styles/style.css';
import '../../index.css'
import '../../styles/SobreMi/estilos.css'
import Fondo from '../../assets/img/Fondos/SobreMi1.3.jpg';
import EstudioK from '../../assets/img/SobreMi/EstudioK.jpg';
import EstudioA from '../../assets/img/SobreMi/EstudioA.png';
import EstudioA2 from '../../assets/img/SobreMi/EstudioA2.png';
import Tattoo1 from '../../assets/img/SobreMi/tattoo1.jpg';
import Tattoo2 from '../../assets/img/SobreMi/tattoo2.jpg';
import Tattoo3 from '../../assets/img/SobreMi/tattoo3.jpg';
import Tattoo4 from '../../assets/img/SobreMi/tattoo4.jpg';
import Tattoo5 from '../../assets/img/SobreMi/tattoo5.jpg';
import Tattoo6 from '../../assets/img/SobreMi/tattoo6.jpg';
import Tattoo7 from '../../assets/img/SobreMi/tattoo7.jpg';
import Tattoo8 from '../../assets/img/SobreMi/tattoo8.jpg';
import Tattoo9 from '../../assets/img/SobreMi/tattoo9.jpg';
import Tattoo10 from '../../assets/img/SobreMi/tattoo10.jpg';
import Tattoo11 from '../../assets/img/SobreMi/tattoo11.jpg';



function Estilos() {
    const tattooImages = [Tattoo1, Tattoo2, Tattoo3, Tattoo4, Tattoo5, Tattoo6, Tattoo7, Tattoo8, Tattoo9, Tattoo10, Tattoo11];

    return (
      <div className='bg-black'>
        <div className="sobremipc">
            <div className='bg-zinc-800 bg-opacity-90' >
                <h1 className='text-white text-center font-custom px-24'>MI ESTILO</h1>   
            </div>

            <div className='p-20' style={{ backgroundImage: `url(${Fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className='bg-zinc-700 bg-opacity-50 rounded-lg p-16 flex flex-wrap'>
                    {tattooImages.map((image, index) => (
                        <img key={index} src={image} alt={`Tattoo ${index + 1}`} className='Tatuaje4 w-full max-w-xs mx-auto p-5 rounded cursor-pointer hover:opacity-95' />
                    ))}
                </div>  

                <div className='p-20'>
                    <h1 className='text-white font-custom'>ESTUDIOS</h1>
                    <a href="https://www.instagram.com/asimetric.gallery/?hl=es" className='rounded-lg'
                    style={{backgroundImage: `url(${EstudioA2})`, display: 'block', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', textAlign: 'center', lineHeight: '200px', color: 'white', textDecoration: 'none', marginTop: '20px'}}>
                        <div className='font-custom2'>Barcelona - ASIMETRIC GALLERY SL</div>
                    </a> 
                    <a href="https://www.instagram.com/killstattoostudio/?hl=es" className='rounded-lg'
                    style={{backgroundImage: `url(${EstudioK})`, display: 'block', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', textAlign: 'center', lineHeight: '200px', color: 'white', textDecoration: 'none', marginTop: '20px'}}>
                        <div className='font-custom2'>Mataró - KILLS TATTOO STUDIO</div>
                    </a> 
                </div>          
            </div>
        </div>

        <div className='sobremimv'>
        <div className='bg-zinc-800 bg-opacity-90 w-full' >
                <h1 className='text-white text-center font-custom '>MI ESTILO</h1>   
            </div>

            <div className='p-10' style={{ backgroundImage: `url(${Fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className='bg-zinc-700 bg-opacity-50 rounded-lg  flex flex-wrap' style={{ zIndex: '1' }}>
                    {tattooImages.map((image, index) => (
                        <img key={index} src={image} alt={`Tattoo ${index + 1}`} className='Tatuaje4 h-[200px] max-w-xs mx-auto p-5 rounded cursor-pointer hover:opacity-95' />
                    ))}
                </div>  

                <div className='pt-10'>
                    <h1 className='text-white font-custom'>ESTUDIOS</h1>
                    <div>
                        <a href="https://www.instagram.com/asimetric.gallery/?hl=es" className='rounded-lg'
                        style={{backgroundImage: `url(${EstudioA})`, display: 'block', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', textAlign: 'center', lineHeight: '100px', color: 'white', textDecoration: 'none', marginTop: '20px'}}>
                            <div className='font-custom3'>Barcelona - ASIMETRIC GALLERY SL</div>
                        </a> 
                        <a href="https://www.instagram.com/killstattoostudio/?hl=es" className='rounded-lg'
                        style={{backgroundImage: `url(${EstudioK})`, display: 'block', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', textAlign: 'center', lineHeight: '100px', color: 'white', textDecoration: 'none', marginTop: '20px'}}>
                            <div className='font-custom3'>Mataró - KILLS TATTOO STUDIO</div>
                        </a> 
                    </div>
                    
                </div>          
            </div>
        </div>
        

       
      </div>
    );
  }
  
  export default Estilos;