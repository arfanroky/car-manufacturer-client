import {
  faComments,
  faFlag,
  faFlagCheckered,
  faLaptopCode,
  faProjectDiagram,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const BusinessSummary = () => {
  return (
    <div className="md:h-[60vh] min-h-screen">
     <div className='text-center'>
     <h1 className='md:text-5xl text-2xl text-center font-bold uppercase mt-12 mb-4 text-primary'>millions business trust us</h1>
      <h3 className='md:text-4xl text-xl text-center font-bold uppercase text-accent'>try to understand users expectation</h3>

     </div>
      <div className=" h-1/2 grid lg:grid-cols-4 grid-cols-2 justify-items-center items-center text-center md:gap-y-0 gap-y-6">
        <div>
            <span className='block text-7xl text-primary'><FontAwesomeIcon icon={faFlagCheckered} /></span> 
            <span className='block text-5xl font-bold text-accent'><CountUp end="72" />+ </span>
            <span className="block text-xl text-primary">Countries</span>
        </div>
        <div>
          <span className='block text-7xl text-primary'><FontAwesomeIcon icon={faLaptopCode} /> </span>
          <span className='block text-5xl font-bold text-accent'><CountUp end="535" />+</span> 
          <span className="block text-xl text-primary">Complete Projects</span>
        </div>
        <div className="">
          <span className='block text-7xl text-primary'><FontAwesomeIcon icon={faUsers} /> </span>
          <span className='block text-5xl font-bold text-accent'><CountUp end="273" />+</span> 
          <span className="block text-xl text-primary">Happy Clients</span>
        </div>

        <div className="">
          <span className='block text-7xl text-primary'><FontAwesomeIcon icon={faComments} /></span> 
          <span className='block text-5xl font-bold text-accent'><CountUp end="535" />+ </span>
          <span className="block text-xl text-primary">Feedbacks</span>
        </div>
      </div>
      <div className='md:flex w-full justify-around px-2 py-12 item-center shadow-2xl -shadow-xl container mx-auto'>
          <div>
              <h1 className='md:text-3xl mb-2 text-2xl font-bold uppercase text-primary'>Have you any question about use or get <br /> a product Request</h1>
              <p className='md:text-2xl mt-4 text-xl text-accent uppercase font-bold'>Don't hesitate to contact us</p>

          </div>
          <div className='flex'>
              <button className='btn btn-primary mr-4'>Request for quote</button>
              <button className='btn btn-accent'>Contact Us</button>
          </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
