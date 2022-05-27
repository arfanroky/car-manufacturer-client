import React from 'react';

const SingleReview = ({ review }) => {
  const { rating, description } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-primary">
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-bold text-primary">Ratings</span>
          {rating}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleReview;
