import React from 'react';
import InstagramLogo from '../../assets/img/Links/instagram.png';
import TikTokLogo from '../../assets/img/Links/tiktok.png';

const Footer = () => {
  return (
    <footer className=" bg-black bg-opacity-80 text-white py-4 px-4 flex justify-between opacity-100 overflow-x-hidden" style={{ overflowX: 'hidden' }}>
      <div className="flex flex-col">
        <div className="flex">
          <a href="https://www.instagram.com/artdreita/"><img src={InstagramLogo} alt="Instagram" className="h-6 mr-4 transition-transform duration-700 transform hover:scale-110" /></a>
          <a href="https://www.tiktok.com/"><img src={TikTokLogo} alt="TikTok" className="h-6 transition-transform duration-700 transform hover:scale-110" /></a>
        </div>
        <div className="text-sm mt-2">
          <p>artdreita@gmail.com</p>
          <p>+34 999 999 999</p>
          <p>C. de la Providència, 10, local1, Gracia, 08024 Barcelona, España</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;