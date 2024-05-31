import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import '../../index.css'
import '../../styles/SobreMi/sobremi.css';
import Estilos from './Estilos';

import Foto1 from '../../assets/img/SobreMi/1.jpg';
import Foto2 from '../../assets/img/SobreMi/2.jpg';
import Foto3 from '../../assets/img/SobreMi/3.jpg';
import Foto4 from '../../assets/img/SobreMi/4.1.jpg';
import Foto5 from '../../assets/img/SobreMi/5.1.jpg';
import Fondo from '../../assets/img/Fondos/SobreMi4.jpg';
import Fondomv from '../../assets/img/Fondos/SobreMimv.jpg'

const SobreMi = () => {
    return (
        <div className="main">
            <div className="sobremipc">
            <div className='flex relative'>
                <img src={Foto4} className="brightness-75" alt="Imagen" />
                <div className="absolute inset-0 flex flex-col justify-center items-center" style={{background: 'linear-gradient(to bottom, rgba(27, 26, 26, 0),  rgba(0, 0, 0, 1))'}}>
                    <h1 className='text-white text-center font-custom'>ARTDREITA</h1>
                    <p className="text-white text-center text-xl p-4 mx-20">Mi nombre es Andrea y ahora mismo os encontráis en un espacio web que es mi rincón de proyectos. Aquí comparto con vosotros todas esas ideas que me ayudan a expresar parte de mis historias, con un fondo de expresión emocional, surrealista, con mensaje propio o uno dado por vosotros, pues quizás lo que más me gusta de la lectura gráfica es que cada persona lee de una manera distinta aquello que observa, y eso convierte esa pieza en algo mucho más interesante.</p>
                </div>
            </div>

           <div className='flex p-20 bg-black'>
                <div className="flex w-full h-[900px]  pl-24 rounded-lg" style={{background: 'linear-gradient(to bottom, #1B1A1A, #000000)' }}>                    
                    <div className='flex-1 flex justify-center items-center'>
                        <img src={Foto5} alt="Foto" className=" img-fluid h-[750px]  rounded-lg" />
                    </div>                    
                    <div className="flex flex-[2] justify-center items-center" >
                        <p className="text-white text-center text-xl p-12 mx-20 w-[72ch] rounded-lg" >Comencé a dibujar en cuanto tuve la capacidad de coger un lápiz y entender que junto a un
                            papel se crea un espacio único e infinito, sin límites más allá de los que te dan las medidas de esa
                            hoja. En mi vida han habido muchas idas y venidas, cambios de necesidades y rumbos varios, pero
                            el dibujo siempre ha estado ahí, y las ganas de explorar nuevos lienzos como tradicionales, digitales
                            o piel.
                            El papel y el formato digital me permiten trabajar sin límites, y la piel me pone unos límites que me
                            permite ser más meticulosa, pulcra y exacta. Ambas disciplinas se alimentan la una de la otra, y van
                            cogidas de la mano sin poder vivir separadas.</p>
                    </div>                                                    
                </div>
           </div>

           <div className='flex p-20 bg-black'>
                <div className="flex flex-col gap-20 w-full h-full pr-24 rounded-lg" style={{background: 'linear-gradient(to top, #1B1A1A, #000000)' }}>    
                    <div className='flex'>
                        <div className="flex flex-[2] justify-center items-center" >
                            <p className="text-white text-center text-xl p-12 mx-20 w-[72ch] rounded-lg" >He hecho varias formaciones artísticas pero reconozco que siempre he sido bastante
                                autodidacta, solitaria para relajarme, aprender y aplicar. Sin embargo me encanta compartir aquellas
                                piezas de las cuales siento orgullo con cercanos y lejanos, por si a alguien le llega alguna
                                satisfacción con mi estilo, o le llena de alguna manera como me llena a mi misma.
                                Ahora mismo me encuentro con varios proyectos personales, a nivel ilustrativo y de tatuaje, y en
                                esta página iré acomodando todas estas ideas por si quisierais hacerle un hueco en vuestra pared,
                                estantería o piel.</p>
                        </div>                                                    
                        <div className='flex-1 flex justify-center items-center'>
                            <img src={Foto1} alt="Foto" className=" img-fluid h-[600px] rounded-lg" />
                        </div>
                    </div>                
                    <div className='flex p-20 '>
                        <p className="text-white text-center text-xl">
                            Trabajo mayoritariamente en Barcelona, pero a veces también me muevo por otros estudios
                            para disfrutar de un cambio de aires, conocer artistas nuevos, observar, aprender y conectar. Pues
                            con el tiempo si de algo me he dado cuenta, es que aunque trabaje sentada necesito moverme el
                            resto del tiempo para bañarme de espacios, conversaciones, personas que sumen a mi bolsa personal
                            de ideas. Y que en el tiempo para mi misma es donde encuentro la creatividad.
                            En esta página podréis encontrar ilustraciones disponibles en lámina, aplicadas al tatuaje
                            para reservarlas y solicitudes de encargo personalizado.
                            De momento, daros las gracias si habéis llegado a leer hasta aquí, esos significa que quizás algo
                            interesante te ha parecido esta primera impresión.
                            Disfrutad del contenido.
                            Atentamente, Andrea.
                        </p>
                    </div>
                                      
                </div>
           </div>
           <Estilos />

            </div>
            
            <div className='sobremimv'>
                <div className='flex relative'>
                        <img src={Fondomv} className="brightness-75" alt="Imagen" />
                        <div className="absolute inset-0 flex flex-col justify-end items-start" >
                            <div style={{background: 'linear-gradient(to bottom, rgba(27, 26, 26, 0),  rgba(0, 0, 0, 1))'}}>
                                <h1 className='text-white font-custom  px-10'>ARTDREITA</h1>
                                <div className="flex flex-col" >
                                    <p className="text-white text-center text-xs p-4 mx-5">Soy Andrea y este es mi rincón de proyectos. Aquí comparto ideas que expresan mis historias de manera emocional y surrealista, con mensajes propios o interpretados por vosotros. Me encanta que cada persona vea algo diferente en mis obras, haciendo cada pieza única e interesante.</p>
                                </div>
                            </div>
                            
                        </div>
                        
                </div>
                                
                
                <div className='flex flex-wrap items-center justify-center bg-black'>
                    <img src={Foto5} alt="Foto" className=" img-fluid h-[250px] rounded-lg mt-5"/>
                    <p className="text-white text-center text-xs mx-5 p-10 rounded-lg mb-10" style={{background: 'linear-gradient(to top, #1B1A1A, #000000)' }}>Desde que aprendí a sostener un lápiz, comprendí el poder de crear en un espacio infinito: el papel. A lo largo de mi vida, he experimentado cambios y explorado distintos medios artísticos, desde tradicionales hasta digitales e incluso la piel. El papel y lo digital me ofrecen libertad ilimitada, mientras que la piel exige precisión y meticulosidad. Estas disciplinas se complementan, creando un equilibrio vital en mi arte</p>
                </div>                  
                <Estilos />
            </div>
        </div>

        
    );
};
    
export default SobreMi;
