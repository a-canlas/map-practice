import React from 'react';

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
