import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';



function HomePage() {
    return (<>
    
        <Hero/> 
        <Awards/>
        <Stats/> 
        <Pricing/> 
        <OpenAccount/> 
    
    </>);
}

export default HomePage;