import React from 'react';
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

  const {userName, education,city, age, phone, linkedin} = data?.data?.user;
//   console.log(data.data.user.userName);

  const onSubmit = (e) => {
    const profileUpdate = {
      userName: e.name,
      education: e.education,
      city: e.city,
      age: e.age,
      phone: e.phone,
      linkedin: e.linkedin,
    };

   fetch(`http://localhost:5000/user/${email}`, {
       method: 'PUT',
       headers: {
           'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(profileUpdate)
   })
   .then(res => res.json())
   .then(data => {
       if(data.success){
           toast.success('Your profile updated');
       }
       else{
           toast.error('failed to update profile')
       }
   })

  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="md:w-[650px] w-[400px] mx-auto px-4">
        <div className="">
          <div class="avatar online ">
            <div class="text-neutral-content rounded-full w-24 bg-accent">
              <span class="uppercase text-3xl font-thin text-white">P</span>
            </div>
          </div>
          <div>
            <h1 className="text-success text-xl">My Profile</h1>
            <ul>
                <li>Name: {userName}</li>
                <li>Email: {data.data.email}</li>
                <li>Age: {age}</li>
                <li>Education: {education}</li>
                <li>City: {city}</li>
                <li>Linkedin: <a 
                className='text-error underline'
                href={linkedin} rel="noreferrer" target='_blank'>Linkedin Profile</a></li>
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
