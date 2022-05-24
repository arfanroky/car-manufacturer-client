import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Machinery from './Machinery';
import Reviews from './Reviews';

const Home = () => {
    return (
       <>
       <Carousel/>
        <Machinery/>
        <BusinessSummary/>
        <Reviews/>
       </>
    );
};

export  {Home};