import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import Icon from '../../assets/img/Home/IconMaps.png';

const MapaEstudio = () => {
  const mapRef = useRef(null); // Referencia para el mapa

  useEffect(() => {
    if (!mapRef.current) { // Verifica si el mapa ya está inicializado
      // Configurar Leaflet para usar un mapa en blanco y negro de Stadia Maps
      const grayscaleMap = L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 19,
          attribution: '© Stadia Maps, © OpenStreetMap contributors',
        }
      );

      // Creamos un mapa y lo agregamos al contenedor
      const map = L.map('map').setView([41.4056958, 2.1557744], 11);
      grayscaleMap.addTo(map);

      // Define el icono personalizado
      const greenIcon = new L.Icon({
        iconUrl: Icon,
        iconSize: [45, 50],
        iconAnchor: [22, 50],
       /*  popupAnchor: [-13, -76] */
      });

      // Añadir marcadores con el icono personalizado
      L.marker([41.5355973, 2.4392678], { icon: greenIcon }).addTo(map)
        .bindPopup('KILLS TATTO STUDIO')
        .openPopup();

      L.marker([41.4056958, 2.1557744], { icon: greenIcon }).addTo(map)
        .bindPopup('ASIMETRIC GALLERY SL')
        .openPopup();

      mapRef.current = map; // Asigna el mapa a la referencia
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <section>
      <div id="map" style={{ width: '100%', height: '600px', position: 'relative', zIndex: 0 }}></div>
    </section>
  );
}

export default MapaEstudio;