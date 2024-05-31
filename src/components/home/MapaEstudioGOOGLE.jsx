import React, { useEffect } from 'react';

const MapaEstudio = () => {

  useEffect(() => {
    // Verificar si la API de Google Maps ya está cargada
    if (!window.google) {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxB8zYqLHI3bbxoUlAqokqb1G6V5Lal2U&callback=initMap`;
      googleMapsScript.async = true;
      window.initMap = initMap;
      document.body.appendChild(googleMapsScript);

      return () => {
        document.body.removeChild(googleMapsScript);
      };
    } else {
      initMap(); // Si ya está cargada, inicializa el mapa directamente
    }
  }, []);

  const initMap = () => {
    const center = { lat: 41.38879, lng: 2.15899 }; // Por ejemplo, Nueva York

    const mapOptions = {
      center: center,
      zoom: 15,
      /* styles: [
        {
            elementType: 'geometry',
            stylers: [{ color: '#242f3e' }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#242f3e' }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#746855' }]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
        }
    ] */
};

    // Crear el mapa
    new window.google.maps.Map(document.getElementById('map'), mapOptions);
  };

  return (
    <section>
      {/* <img src="src/assets/img/Links/maps.png" /> */}
{/*       <div id="map" style={{ height: '400px', width: '100%' }}></div> */}
    </section>
  );
}

export default MapaEstudio;