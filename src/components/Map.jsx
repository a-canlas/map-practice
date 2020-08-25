import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../map.css';

const Map = (props) => {
  const location = {
    address: null,
    latitude: null,
    longitude: null
  };

  return (
  <div>{location.address}</div>
  )
}

export default Map;
