import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  // Les coordonnées initiales pour centrer la carte, ajustez-les selon vos besoins
  const position = [49.1802148, -0.3617615];

  return (
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Exemple de marqueur, vous pouvez en ajouter d'autres ou les générer dynamiquement */}
      <Marker position={position}>
        <Popup>
          Un exemple de lieu
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
