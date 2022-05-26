import React from 'react';
import perfumeStore from '../../images/portfolio/img-1.PNG';
import Migrate from '../../images/portfolio/img-2.PNG';
import chocolateHouse from '../../images/portfolio/img-3.PNG';

const MyPortfolio = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-center font-thin text-primary my-12">
        My Portfolio
      </h1>

      <div className="md:flex justify-around">
        <div className="w-50 max-w-md mx-auto ">
          <h1 className="text-5xl font-thin my-3">
            Hi, <br />
            <span className="text-secondary">I'm Arfan Roky</span>
          </h1>
          <p>
            I could not study for 5 years due to some crisis. I have been
            admitted to Vocational from this year. I am studying in class 9 at
            the moment
          </p>
          <p className="mt-3 md:mb-0 mb-12">
            Email:{' '}
            <span className="underline text-secondary">rokyyy40@gmail.com</span>
          </p>
        </div>
        <div className="w-50 max-w-md mx-auto mb-12">
          <h1 className="text-3xl text-secondary uppercase text-center mb-5">
            What are i know?
          </h1>

          <div className="flex ">
            <ul>
              <li className="btn btn-sm btn-accent m-4">NODE JS</li>
              <li className="btn btn-sm btn-accent m-4">EXPRESS JS</li>
              <li className="btn btn-sm btn-accent m-4">MONGODB</li>
              <li className="btn btn-sm btn-accent m-4">GIT AND GITHUB</li>
              <li className="btn btn-sm btn-accent m-4">HERUKU</li>
              <li className="btn btn-sm btn-accent m-4">NETLIFY</li>
            </ul>

            <ul className="">
              <li className="btn btn-sm btn-accent m-4">NODE JS</li>
              <li className="btn btn-sm btn-accent m-4">EXPRESS JS</li>
              <li className="btn btn-sm btn-accent m-4">MONGODB</li>
              <li className="btn btn-sm btn-accent m-4">GIT AND GITHUB</li>
              <li className="btn btn-sm btn-accent m-4">HERUKU</li>
              <li className="btn btn-sm btn-accent m-4">NETLIFY</li>
            </ul>
          </div>
        </div>
      </div>

{/*  */}
<h1 className='text-center text-6xl font-thin text-primary mb-12'>Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center">
        <div className="card bg-base-100 shadow-xl border border-primary h-[350px]">
          <figure className="w-full">
            <img
              src={perfumeStore}
              alt="perfume"
              className="rounded-xl h-52 w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Perfume Store</h2>
            <div className="card-actions">
              <a
                href="https://borrow-741c0.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm"
              >
                Watch
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-primary h-[350px]">
          <figure className="w-full">
            <img
              src={Migrate}
              alt="migrate"
              className="rounded-xl h-52 w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Immigration Process</h2>
            <div className="card-actions">
              <a
                href="https://borrow-741c0.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm"
              >
                Watch
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-primary h-[350px]">
          <figure className="px-10 pt-10">
            <img
              src={chocolateHouse}
              alt="perfume"
              className="rounded-xl h-52 w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Chocolate House</h2>
            <div className="card-actions">
              <a
                href="https://chocolate-house-arfan-roky.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm"
              >
                Watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
