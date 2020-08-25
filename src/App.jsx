import React from 'react';
import './App.css';
import Map from './components/Map';

function App() {
  const location = {
    address: '1 Main St, Huntington Beach, CA',
    lat: 33.653198,
    lng: -118.006142
  };
  return (
    <>
    <Map location={location}/>
    </>
  );
}

export default App;
