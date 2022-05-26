import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [rating, setRating] = useState(0);
  // const [description, setDescription] = useState('');

  const onSubmit = async e => {

    const review = {
        rating: e.ratings,
        description: e.message
    }

    const {data} = await axios.post('http://localhost:5000/allReviews', review);

    if(data){
      toast.success('you have added a review.. go to home page and see your review')
    }

  };

  return (
    <div>
      <h1>Add A Review</h1>

      <form
        className="w-[300px] mx-auto p-5 border border-warning"
        onSubmit={handleSubmit(onSubmit)}
      >

        

        <div className="w-full mb-3">
          <label className="block uppercase text-md font-bold text-left" htmlFor="name">
            Ratings
          </label>

          <input
            className="w-full py-3 pl-2 outline-none border text-lg border-warning rounded"
            placeholder="Type Ratings"
            type="number"
            {...register('ratings', {
              required: {
                value: true,
                message: 'Please give a single rating',
              },
              min: {
                value: 1,
                message: 'Enter valid number',
              },
              max: {
                value: 5,
                message: `you can give ratings less than 5 or equal`,
              },
            })}
          />
          {errors.ratings?.type === 'required' && (
            <p className="text-error mt-1">{errors.ratings.message}</p>
          )}
          {errors.ratings?.type === 'min' && (
            <p className="text-error mt-1">{errors.ratings.message}</p>
          )}
          {errors.ratings?.type === 'max' && (
            <p className="text-error m-1">{errors.ratings.message}</p>
          )}
        </div>

        <div className="w-full mb-3">
          <label className="block uppercase text-md font-bold text-left" htmlFor="name">
            Description
          </label>

          <input
            className="w-full py-6 pl-2 outline-none border text-lg border-warning rounded"
            placeholder="Type message"
            type="text"
            {...register('message', {
              required: {
                value: true,
                message: 'Please give a single rating',
              },
            })}
          />
          {errors.message?.type === 'required' && (
            <p className="text-error mt-1">{errors.ratings.message}</p>
          )}
        </div>



        <input
          className="btn btn-primary w-full max-w-md"
          type="submit"
          value="Login"
        />
      </form>

      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default AddReview;
