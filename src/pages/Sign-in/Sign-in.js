import React from 'react';
import './Sign-in.css'; 

// [components global]

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// [component page]

import FormComponent from './components/Form/Form';

function Signin () {
    return (
      <div>
          <Header></Header>
          <div style={{ 
            display:'flex', 
            justifyContent: 'center', 
            alignItems: 'center' }}>
            <FormComponent></FormComponent>
          </div>
          <Footer></Footer>
      </div>
    );
  }
  
  export default Signin;
  