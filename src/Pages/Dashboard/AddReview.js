import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../../Shared/Spinner';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import './Review.css';

const AddReview = () => {
  const id = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user, loading] = useAuthState(auth);

  const reviewId = id.id;
  const { data, isLoading, error } = useQuery(['equipment', id], () =>
    axios.get(`http://localhost:5000/equipment/${reviewId}`)
  );

  if (loading | isLoading) {
    return <Spinner></Spinner>;
  }

  if(error){
    toast.error(error)
  }

  const onSubmit = async (e) => {
    const review = {
      userName: user.reloadUserInfo.displayName,
      userImg: user.reloadUserInfo.photoUrl,
      productName: e.productName,
      rating: e.rating,
      description: e.description
    }

     await axios.put(`http://localhost:5000/equipment/${reviewId}`, {review}).catch(err => {
      toast.error(err)
     })

    const {data} =  await axios.put(`http://localhost:5000/userReview/${reviewId}`, {review})
   
    console.log(data);
    if(data.result.acknowledged){
      toast.success(data.success)
    }

  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-8 font-bold capitalize md:text-4xl text-2xl">
        write a <span className="text-warning">review</span>
      </h1>
      <form
        className="md:w-[500px] mx-auto p-5 border border-warning"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <div>
            <label
              className="block uppercase text-md font-bold text-left"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              className="w-full py-3 pl-2 outline-none border text-lg border-warning rounded"
              type="text"
              {...register('productName')}
              value={data.data.name}
              readOnly
            />
          </div>

          <div>
            <label
              className="block uppercase text-md font-bold text-left"
              htmlFor="name"
            >
              Ratings
            </label>

            <input
              className="w-full py-3 pl-2 outline-none border text-lg border-warning rounded"
              placeholder="Ratings"
              type="number"
              {...register('rating', {
                required: {
                  value: true,
                  message: 'Rating should contain',
                },
                min: {
                  value: 1,
                  message: 'Give a rating more than 0',
                },
                max: {
                  value: 5,
                  message: `Give a rating of 5 or equal`,
                },
              })}
            />
            {errors.rating?.type === 'required' && (
              <p className="text-error mt-1">{errors.rating.message}</p>
            )}
            {errors.rating?.type === 'min' && (
              <p className="text-error mt-1">{errors.rating.message}</p>
            )}
            {errors.rating?.type === 'max' && (
              <p className="text-error m-1">{errors.rating.message}</p>
            )}
          </div>
        </div>

        <div className="w-full my-3">
          <label
            className="block uppercase text-md font-bold text-left"
            htmlFor="name"
          >
            Description
          </label>

          <input
            className="w-full pt-2 pl-2 pb-24 outline-none border text-lg border-warning rounded"
            placeholder="Description"
            type="text"
            {...register('description', {
              required: {
                value: true,
                message: `Write something about ${data.data.name}`,
              },
            })}
          />

          {errors.description?.type === 'required' && (
            <p className="text-error mt-1">{errors.description.message}</p>
          )}
        </div>

        <input
          className="btn btn-primary w-full max-w-md"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default AddReview;
