import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Contact from './Contact';
import DiscountPage from './DiscountPage';
import Gallery from './Gallery';
import Machinery from './Machinery';
import Reviews from './Reviews';


const Home = () => {
    return (
       <div className=''>
       <Carousel/>
        <Machinery/>
        <BusinessSummary/>
        <Reviews/>
        <Gallery></Gallery>
        {/* <DiscountPage></DiscountPage> */}
        <Contact></Contact>
       </div>
    );
};

export  {Home};