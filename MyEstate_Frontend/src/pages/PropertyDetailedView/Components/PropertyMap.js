import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const PropertyMap = (props) => {
  const position = [props.lat, props.long];
  return (
    <MapContainer
      center={position}
      zoom={18}
      style={{ height: 300, width: '80%', borderRadius: 15, margin: 'auto' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>{props.propertyName}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default PropertyMap;
