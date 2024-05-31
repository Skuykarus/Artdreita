import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onUpdateCartCount, offUpdateCartCount } from './cartEvents';
import Logo from '../../assets/img/logoAndrea2.png';
import UserLogo from '../../assets/img/Links/user2.png';
import Carrito from '../../assets/img/Links/carrito2.png';
import '../../styles/header/header.css'
import '../../index.css'
import '../../styles/header/hamb.css';

const Header = ({ isInicioDeSesion }) => {
  const headerClassName = isInicioDeSesion ? "cuerpo header header-inicio-sesion" : "header";
  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
      setMenu( !menu )
  }
  /* -- */
  const [cartCount, setCartCount] = useState(0);
  const id_user = localStorage.getItem('id_user');
  const id_rol = localStorage.getItem('id_rol');

  const fetchCartCount = () => {
    if (id_user) {
      fetch(`http://localhost:3000/api/carrito/${id_user}`)
        .then(response => response.json())
        .then(data => setCartCount(data.reduce((total, item) => total + item.cantidad, 0)))
        .catch(error => console.error('Error al obtener el carrito:', error));
    }
  };

  useEffect(() => {
    fetchCartCount();
    const handleUpdateCartCount = () => fetchCartCount();
    onUpdateCartCount(handleUpdateCartCount);

    return () => {
      offUpdateCartCount(handleUpdateCartCount);
    };
  }, [id_user]);

  const handleSignOut = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/api/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('id_user', data.id_user);
        localStorage.removeItem('id_rol', data.id_rol);
        window.location.href = '/InicioDeSesion';
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un error al cerrar sesión');
    }
  };

  return (
    <header className={headerClassName} >
      {isInicioDeSesion ? null : <div className="cuerpo2 absolute top-0 left-0 custom:w-full custom:h-full bg-black opacity-75 "></div>}
      <div className="divimg1 flex justify-between items-center p-8 relative z-30">
        <Link to="../">
          <div className="transition-transform duration-700 transform hover:scale-110">
            <img src={Logo} alt="Personaje" className="img1 h-20" />
          </div>
        </Link>
        <h1 className="text-2xl text-white"></h1>
        <div className="divimg2img3 flex items-center">
        <Link to="../Carrito">
            <div className="relative">
              <img src={Carrito} alt="Carrito" className="h-9 transition-transform duration-500 transform hover:scale-110 mr-3" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <Link to="../InicioDeSesion">
            <img src={UserLogo} alt="User" className="img3 h-7 transition-transform duration-500 transform hover:scale-110 mr-2" />
          </Link>
          <button onClick={() => handleSignOut(localStorage.getItem('token'))} className="user-button text-white">
            Cerrar Sesión
          </button> 
        </div>          
      </div>
      
      <div className='Cabecera'>           
            <Link to="../">
              <div className="Cabecera-h1 transition-transform duration-700 transform hover:scale-110">
                <img src={Logo} alt="Personaje" className="Cabecera-a img1 h-20" />
              </div>
            </Link>
              <button onClick={ toggleMenu } className="Cabecera-button">
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>

              <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
                  <ul className="Cabecera-ul">
                      <Link to="../"><li className="Cabecera-li"><a href="#" className="Cabecera-a">Home</a></li></Link>
                      <Link to="/SobreMi"><li className="Cabecera-li"><a href="#" className="Cabecera-a">Sobre mi</a></li></Link>
                      <Link to="/Tatuajes"><li className="Cabecera-li"><a href="#" className="Cabecera-a">Tatuajes</a></li></Link>
                      <Link to="/Ilustraciones"><li className="Cabecera-li"><a href="#" className="Cabecera-a">Iluistraciones</a></li></Link>
                      <Link to="/Carrito"><li className="Cabecera-li"><a href="#" className="Cabecera-a">Carrito</a></li></Link>
                      <hr className="separator" />
                      <Link to="/InicioDeSesion"><li className="Cabecera-li"><a href="#" className="Cabecera-a">Inicio de sesion</a></li></Link>
                  </ul>
              </nav>           
      </div>      
    </header>
  );
}

export default Header;