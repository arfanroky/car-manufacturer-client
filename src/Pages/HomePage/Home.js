import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import DiscountPage from './DiscountPage';
import Gallery from './Gallery';
import Machinery from './Machinery';
import Reviews from './Reviews';

const Home = () => {
    return (
       <div className='container mx-auto px-6'>
       <Carousel/>
        <Machinery/>
        <BusinessSummary/>
        <Reviews/>
        <Gallery></Gallery>
        <DiscountPage></DiscountPage>
       </div>
    );
};

export  {Home};