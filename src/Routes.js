import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Signup from './pages/Sign-up/Sign-up';
import Signin from './pages/Sign-in/Sign-in';

// [dashboard]

import Index from './pages/Dashboard/Home/Index'

function AppRoutes() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path='/dashboard/index' element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes; 
