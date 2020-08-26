import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from '../api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 21.295730, lng: -157.707370 }}
      >
        <Marker position={{ lat: 21.295730, lng: -157.707370 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api.googleKey
})(MapContainer);
