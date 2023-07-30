import React from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#ff9100', 
    },
  },
});

const MapComponent = () => {
  const center = [-23.5505, -46.6333];
  const radiusInMeters = 2000; 

  return (
    <ThemeProvider theme={theme}>
      <MapContainer center={center} zoom={12} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle center={center} radius={radiusInMeters} color="#176B87" />
      </MapContainer>
    </ThemeProvider>
  );
};

export default MapComponent;
