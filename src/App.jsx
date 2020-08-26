import React from 'react';
import './App.css';
import Map from './components/Map';

function App() {
  const location = {
    address: '555 Hahaione St, Honolulu, HI',
    lat: 21.295730,
    lng: -157.707370
  };
  return (
    <>
    <Map location={location} zoomLevel={8}/>
    </>
  );
}

export default App;
