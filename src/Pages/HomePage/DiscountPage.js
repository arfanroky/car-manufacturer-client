import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner-2.webp';

const DiscountPage = () => {
    return (
        <div class="hero min-h-screen bg-fixed mt-12" style={{backgroundImage: `url('${bannerImg}')`, height: '800px'}}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 md:text-7xl text-5xl font-bold uppercase text-accent">discount of 10%</h1>
            <p class="mb-5 text-justify"><span className='text-xl font-semibold text-white'>Hi there, </span><br />
            as soon as possible take your product which is you need for your car servicing
            .</p>
            <button class="btn btn-primary">
                <Link to='/machinery'>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default DiscountPage;