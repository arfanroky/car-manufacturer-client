import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const email = user?.email;
  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useQuery('user', () =>
    axiosPrivate.get(`http://localhost:5000/user/${email}`)
  );



  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log(data?.data);
  const { userName, userImg, userEmail, age, education, phone, city, linkedin } = data?.data;

  const onSubmit = async (e) => {
    const profileUpdate = {
      userName: e.name,
      education: e.education,
      city: e.city,
      age: e.age,
      phone: e.phone,
      linkedin: e.linkedin,
    };

    const { data } = await axiosPrivate.put(
      `http://localhost:5000/user/${email}`,
      profileUpdate
    );
    if (data.success) {
      toast.success('profile update successfully');
    } else {
      toast.error('failed to update profile');
    }
  };

  const updated = async (e) => {
    const { data } = await axiosPrivate.put(
      `http://localhost:5000/user/${email}`,
    );
    if (data.success) {
      toast.success('profile update successfully');
    } else {
      toast.error('failed to update profile');
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="md:w-[650px] w-[400px] mx-auto px-4">
        <div className="">
          <div className="avatar online ">
            <div className="text-neutral-content rounded-full w-24 border-2 border-primary">
              <img src={userImg} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-success text-xl">My Profile</h1>
            <ul>
              <li>Name: {userName}</li>
              <li>Email: {userEmail}</li>
              <li>Age: {age}</li>
              <li>Education: {education}</li>
              <li>City: {city}</li>
              <li>Phone: {phone}</li>
              <li>
                Linkedin:{' '}
                <a
                  className="text-error underline"
                  href={linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-x-4 w-full">
            <div className="mt-4 w-full">
              <input
                {...register('name')}
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary w-full max-w-md"
                // value={userName}
                contentEditable='true'
              />
            </div>
            <div className="mt-4 w-full">
              <input
                {...register('education')}
                type="text"
                placeholder="Education?"
                className="input input-bordered input-primary w-full max-w-md"
              />
            </div>
          </div>
          <div className="md:flex gap-x-4">
            <div className="mt-4 w-full">
              <input
                {...register('city')}
                type="text"
                placeholder="What's your City?"
                className="input input-bordered input-primary w-full max-w-md"
              />
            </div>
            <div className="mt-4 w-full">
              <input
                {...register('age')}
                type="number"
                placeholder="What's your age?"
                className="input input-bordered input-primary w-full max-w-md"
              />
            </div>
          </div>
          <div className="md:flex gap-x-4">
            <div className="mt-4 w-full">
              <input
                {...register('phone')}
                type="number"
                placeholder="Phone"
                className="input input-bordered input-primary w-full max-w-md"
              />
            </div>
            <div className="mt-4 w-full">
              <input
                {...register('linkedin')}
                type="url"
                placeholder="Linkedin Profile"
                className="input input-bordered input-primary w-full max-w-md"
              />
            </div>
          </div>
          <input
            className="btn btn-secondary w-full my-4"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
