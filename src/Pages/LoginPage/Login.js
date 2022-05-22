import React from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  if (signInUser || user) {
    navigate(from, {replace: true});
  }

  if (signInLoading || loading) {
    return <Spinner></Spinner>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data?.email, data?.password);
  };

  return (
    <div className="h-[92vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-thin text-primary tracking-wider uppercase -mt-20 mb-12 ">
        Log In
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[400px] md:p-8 px-12 w-full md:mx-auto md:shadow-2xl md:-shadow-2xl md:border md:border-primary rounded text-center"
      >
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
            class="input input-bordered input-primary w-full max-w-md"
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

        <p className="md:text-left w-full max-w-md">
          New to Help Bari?{' '}
          <Link to="/sign-up" className=" text-accent underline">
            Please Sign Up
          </Link>
        </p>

        <p className="w-full max-w-md md:text-left text-error my-4 pl-1">
          <small>{(signInError || error) && (signInError.message || error.message)}</small>
        </p>
        <input
          className="btn btn-primary w-full max-w-md"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default Login;
