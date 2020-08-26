import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from '../api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [
        { latitude: 33.796070, longitude: -118.123350},
        { latitude: 33.714670, longitude: -117.980590},
        { latitude: 33.732290, longitude: -117.991650}
      ]
    };
    this.placeMarkers = this.placeMarkers.bind(this);
  }

  placeMarkers() {
    const results = [...this.state.results];
    const markers = results.map((marker, index) => {
      return <Marker key={index} position={{ lat: marker.latitude, lng: marker.longitude}} />
    });
    return markers;
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 33.759174, lng: -117.989708 }}
      >
        {this.placeMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api.googleKey
})(MapContainer);
