import React from 'react';
import './Sign-up.css'; 

// [components global]

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// [component page]

import FormComponent from './components/Form/Form';
import SimpleCard from './components/Card/Card';

function Signup () {
    return (
      <div>
          <Header></Header>
          <div style={{ 
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center' }}>
            <SimpleCard 
              title="register" 
              description="Lorem Ipsum Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum" />
            <FormComponent></FormComponent>
          </div>
          <Footer></Footer>
      </div>
    );
  }
  
  export default Signup;
  