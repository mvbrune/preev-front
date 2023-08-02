import React from 'react';
import AppRoutes from './Routes'; 
import FixedAlert from './components/Alert/Alert';

function App() {
  return (
    <div>
       <FixedAlert message="Page under construction" severity="warning" />
      <AppRoutes /> 
    </div>
  );
}

export default App;
