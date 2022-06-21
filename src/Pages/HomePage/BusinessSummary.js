import {

  faGear,

  faSackDollar,

  faStarHalf,

  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const BusinessSummary = () => {
  return (
    <div className=" shadow-2xl rounded-lg my-12 py-6 bg-accent">
     <div className='text-center'>
     <h1 className='md:text-5xl text-2xl text-center font-bold capitalize text-primary'>millions business trust us</h1>
      <h3 className='md:text-3xl text-lg text-center font-bold uppercase text-white mb-6'>try to understand users expectation</h3>

     </div>

      <div className="grid md:grid-cols-4 grid-cols-2 justify-items-center md:gap-y-0 gap-y-6 my-12">
        <div className=' w-40'>
            <span className='block md:text-7xl text-5xl text-primary'><FontAwesomeIcon icon={faUsers} /></span> 
            <span className='block md:text-5xl text-2xl font-bold text-white'><CountUp end="100" />K+ </span>
            <span className="block md:text-xl  text-lg text-primary">Happy Customers</span>
        </div>
        <div className='w-40'>
          <span className='block md:text-7xl text-5xl text-primary'><FontAwesomeIcon icon={faSackDollar} /> </span>
          <span className='block md:text-5xl text-2xl font-bold text-white'><CountUp end="120" />M+</span> 
          <span className="block md:text-xl text-lg text-primary">Annual Revenue</span>
        </div>
        <div className='w-40'>
          <span className='block md:text-7xl text-5xl text-primary'><FontAwesomeIcon icon={faStarHalf} /> </span>
          <span className='block md:text-5xl text-2xl font-bold text-white'><CountUp end="33" />K+</span> 
          <span className="block md:text-xl text-lg text-primary">Reviews</span>
        </div>

        <div className='w-40'>
          <span className='block md:text-7xl text-5xl text-primary'><FontAwesomeIcon icon={faGear} /></span> 
          <span className='block md:text-5xl text-2xl font-bold text-white'><CountUp end="50" />+ </span>
          <span className="block md:text-xl text-lg text-primary">Tools</span>
        </div>
      </div>

      <div className='text-center'>
              <h1 className='md:text-3xl text-center text-2xl font-bold text-primary '>Have you any question about use or get a product Request <p className='text-white uppercase font-bold md:text-3xl mt-3 text-xl'>Don't hesitate to contact us</p></h1>
          <div className='flex justify-center gap-x-5 my-5 '>
              <button className='btn text-white btn-primary '>Request for quote</button>
              <button className='btn btn-secondary'>Contact Us</button>
          </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
