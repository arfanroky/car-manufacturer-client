import { Rating } from '@mui/material';
import React from 'react';

const SingleReview = ({ review }) => {
  console.log(review);
  const { userImg, userName, description, rating } = review;
  console.log(rating);
  return (
    <div className="md:w-[350px] shadow-lg p-4 border rounded-md hover:translate-x-2 transition-all">
      <figure className="w-24 border h-24 rounded-full mx-auto">
        <img
          className="w-full h-full rounded-full border-2 border-primary"
          src={userImg}
          alt=""
        />
      </figure>
      <div>
        <h1 className="text-center font-bold text-xl">{userName}</h1>
        <p className="text-center">
          <Rating name="half-rating-read" value={Number(rating)} readOnly />
        </p>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default SingleReview;
