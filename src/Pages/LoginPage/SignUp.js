
import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../../Shared/Spinner';

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
    const [token] = useToken(createUser || googleUser)
  
    if(token){
      navigate('/machinery')
    }


  if (createLoading || updating || googleLoading) {
    return <Spinner></Spinner>;
  }

  const onSubmit = async (e) => {
    const email = e.email;
    await createUserWithEmailAndPassword(email, e.password);
    await updateProfile({ displayName: e.name });
    console.log('update done');
  };

  return (
    <div className="md:h-[92vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-thin text-primary tracking-wider uppercase -mt-20 mb-12 ">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[400px] md:p-8 px-12 w-full md:mx-auto md:shadow-2xl md:-shadow-2xl md:border md:border-primary rounded text-center"
      >
        <div className="my-4">
          <input
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-md"
          />
        </div>
        {/* Error For Name */}
        <label className="label">
          {errors.name?.type === 'required' && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>

        <div className="my-4">
          <input
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required',
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email',
              },
            })}
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-md"
          />
        </div>
        {/* Error For Email */}
        <label className="label">
          {errors.email?.type === 'required' && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
        </label>

        <div className="mt-4">
          <input
            {...register('password', {
              required: {
                value: true,
                message: 'Password is Required',
              },
              minLength: {
                value: 6,
                message: 'Must be 6 characters or longer',
              },
            })}
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-md"
          />
        </div>
        {/* Error For Password */}
        <label className="label">
          {errors.password?.type === 'required' && (
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === 'minLength' && (
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          )}
        </label>

        <p className=" w-full max-w-md md:text-left">
          Already Have An Account?{' '}
          <Link to="/login" className=" text-accent underline">
            Please Login
          </Link>
        </p>

        <p className=" w-full max-w-md md:text-left text-error my-4 pl-1">
          <small>
            {(createError || updateError || googleError) &&
              (createError.message ||
                updateError.message ||
                googleError.message)}
          </small>
        </p>
        <input
          className="btn btn-primary w-full max-w-md"
          type="submit"
          value="Sign Up"
        />
        <div className="divider border-t border-b border-b-primary border-t-info w-full max-w-md mx-auto">
          OR
        </div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-accent w-full max-w-md"
        >
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
