import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <h1 className=" text-9xl font-bold text-center text-primary">404</h1>
        <p className="text-7xl text-error">Page Not Found</p>
        <button className="btn btn-outline btn-accent px-12  mt-6">
          <Link to="/">Back </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
