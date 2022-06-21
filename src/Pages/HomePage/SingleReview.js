
import React from 'react';
import Ratings from './Ratings';

const SingleReview = ({ review }) => {
  const { rating, description, userImg, userName } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-primary">
      <div className="card-body p-6 ">
     <div className="flex justify-between">
    <div className='flex gap-x-2'>
    <div className="avatar ">
          <div className=" w-12 rounded ring-offset-2">
            <img src={userImg} alt="userImg" />
          </div>
        </div>
       <div>
       <p className=" uppercase font-bold text-primary">{userName}</p>
        <small className='text-secondary'>Jessore</small>
       </div>
    </div>
        <Ratings rating={rating} />
     </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleReview;
