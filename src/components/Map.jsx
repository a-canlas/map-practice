import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../map.css';
import api from '../api';

const Map = ({ location, zoomLevel }) => {
  const apiKey = api.googleKey;

  return (
  <div className="map">
    <h2 className="map-h2">My House</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  )
}

export default Map;
