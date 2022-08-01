import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner-1.webp';
import banner2 from '../../images/banner-2.webp';

const Carousel = () => {
  return (
    
    <div className='container mx-auto px-6'>
    <div className="carousel w-full ">

      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="sm:w-full md:h-[547px] h-[250px] overflow-hidden" alt="banner-1" />
        <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>

        <div className="absolute top-12 left-4 md:top-1/4 md:left-28 ">
            <h1 className='mb-4 text-neutral text-xl uppercase tracking-tighter md:text-4xl md:tracking-wider md:font-bold'>new <span className='md:text-primary'>Technology</span> & Build </h1>
            <p className='text-2xl font-bold mb-4 text-neutral md:text-5xl uppercase md:mb-12'>Car <span className='md:text-accent text-info'>machinery</span> & <span className='block md:mt-5'> <span >parts</span> collections</span></p>
            <button className='btn md:btn-primary text-xl md:hover:bg-green-500 transition md:btn-xl md:text-2xl text-accent'>
                <Link to='/machinery'>
                    Shop Now
                </Link>
            </button>
        </div>

      </div>

   
      <div id="slide2" className="carousel-item relative w-full md:block hidden">
        <img src={banner2} className="md:w-full md:h-[547px] h-auto overflow-hidden" alt="banner-2" /> /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-12 left-4 md:top-1/4 md:left-28">
            <h1 className='mb-4 text-neutral text-sm uppercase tracking-tighter md:text-4xl md:tracking-wider md:font-bold'>new <span className=''>Technology</span> & Build </h1>
            <p className='text-3xl font-bold mb-4 text-neutral md:text-5xl uppercase md:mb-12'>Car <span className='md:text-info'>machinery</span> & <span className='block md:mt-5'> <span className=''>parts</span> collections</span></p>
            <button className='btn text-xl  transition md:btn-xl md:text-2xl text-accent'>
                <Link to='/machinery'>
                    Shop Now
                </Link>
            </button>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Carousel;
