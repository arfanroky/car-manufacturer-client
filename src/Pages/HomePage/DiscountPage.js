import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner-2.webp';

const DiscountPage = () => {
  return (

  <div className='container mx-auto px-6'>
      <div
      className=" hero min-h-screen bg-fixed mt-12 rounded"
      style={{ backgroundImage: `url('${bannerImg}')`, height: '800px' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-7xl text-5xl font-bold uppercase text-accent">
            discount of 10%
          </h1>
          <p className="mb-5 text-justify">
            <span className="text-xl font-semibold text-white">Hi there, </span>
            <br />
            as soon as possible take your product which is you need for your car
            servicing .
          </p>
          <button className="btn btn-primary">
            <Link to="/machinery">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DiscountPage;
