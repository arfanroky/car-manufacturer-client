import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';
import SingleReview from './SingleReview';

const Reviews = () => {

    const {data, isLoading, error} = useQuery(['reviews'], () => axios.get('http://localhost:5000/userReview'));

    if(isLoading){
        return <Spinner/>
    }
    if(error){
        toast.error(error)
    }

    return (
        <div className='container mx-auto px-6 py-12'>
            <h1 className='text-center text-primary mb-8 text-5xl '>Reviews</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {
                data.data.map(review => <SingleReview key={review._id} review={review}/>)
              }
            </div>
            
        </div>
    );
};

export default Reviews;