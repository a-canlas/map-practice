import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class App extends React.Component {
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 21.295730, lng: -157.707370 }}
        />
      </>
    );
  }
}

export default App;
