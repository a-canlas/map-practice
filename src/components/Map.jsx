import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../map.css';

const Map = ({ location, zoomLevel }) => {


  return (
  <div className="map">
    <h2 className="map-h2">My House</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{key: ''}}
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
