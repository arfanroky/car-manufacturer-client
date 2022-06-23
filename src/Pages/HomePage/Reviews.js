
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import Spinner from '../../Shared/Spinner';
import SingleReview from './SingleReview';

const Reviews = () => {

  const {data, isLoading, error} = useQuery('reviews', () => 
  axiosPrivate.get('https://sleepy-anchorage-47167.herokuapp.com/allReviews')
  );

 
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }
  
  return (
    <div>
      <h1 className="text-5xl font-sans uppercase mb-12 text-primary text-center">
        Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 py-12">
        {data?.data.slice(0, 3).map((review) => (
          <SingleReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
