import React from 'react';
import './Home.css'; 

// [components global]

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// [components page]

import BenefitsGrid from './components/Benefits/BenefitsGrid';
import CustomCard from './components/Card/Card';
import ServiceSection from './components/service/Service';
import MapComponent from './components/maps/Maps';

function Home() {
  return (
    <div>
        <Header></Header>  
        <BenefitsGrid></BenefitsGrid>
        <CustomCard></CustomCard>
        <ServiceSection></ServiceSection>
        <MapComponent></MapComponent>
        <Footer></Footer>
    </div>
  );
}

export default Home;
