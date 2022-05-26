import React from 'react';

const SingleReview = ({review}) => {

    const {rating, description} = review;

    console.log(rating);

    return (
      
        <div class="card w-96 bg-base-100 shadow-xl border border-primary">
        <div class="card-body">
          <h2 class="card-title"><span className='font-bold text-primary'>Ratings</span>{rating}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default SingleReview;