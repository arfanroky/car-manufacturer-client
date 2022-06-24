import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
  const { register, handleSubmit } = useForm();
  const [user, loading] = useAuthState(auth);

  const { data, isLoading } = useQuery('user', () =>
    axiosPrivate.get(
      `https://sleepy-anchorage-47167.herokuapp.com/user/${user?.email}`
    )
  );

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }

  const { userName, userEmail, age, city, phone, userImg, education } =
    data?.data;

  const onSubmit = async (e) => {
    const profileUpdate = {
      userName: e.name,
      userEmail: e.email,
      education: e.education,
      city: e.city,
      age: e.age,
      phone: e.phone,
    };

    const { data } = await axiosPrivate.patch(
      `https://sleepy-anchorage-47167.herokuapp.com/profileUpdate/${user?.email}`,
      profileUpdate
    );
    if (data.success) {
      toast.success('profile update successfully');
    } else {
      toast.error('failed to update profile');
    }
  };

  return (
    <>
      <div className="container mx-auto px-6">
        <form
          className="md:w-[700px] p-4 mx-auto  shadow-2xl rounded  md:py-0 py-12 mt-12 md:mb-0 mb-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" text-center pt-12">
            {/* user img */}
            <div className="avatar pl-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userImg} className="text-center" alt="userImg" />
              </div>
            </div>

            {/* Edit link */}
            <div className="md:text-xl uppercase font-normal tracking-wider text-primary ml-5 pt-4">
              <Link to="/my-profile">My Profile</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            <div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register('name')}
                  defaultValue={userName}
                  type="text"
                  className=" py-2 rounded shadow-inner border-b-2 border-primary outline-none pl-2"
                />
              </div>

              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register('email')}
                  defaultValue={userEmail}
                  type="text"
                  className=" py-2 rounded shadow-inner border-b-2 border-primary outline-none pl-2"
                />
              </div>

              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  {...register('education')}
                  defaultValue={education}
                  type="text"
                  className=" py-2 rounded shadow-inner border-b-2 border-primary outline-none pl-2"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  {...register('age')}
                  defaultValue={age}
                  type="text"
                  className=" py-2 rounded shadow-inner border-b-2 border-primary outline-none pl-2"
                />
              </div>
              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  {...register('city')}
                  defaultValue={city}
                  type="text"
                  className=" py-2 rounded shadow-inner border-b-2 border-primary outline-none pl-2"
                />
              </div>
              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  {...register('phone')}
                  defaultValue={phone}
                  type="text"
                  className=" py-2 rounded shadow-inner border-b-2 border-primary outline-none pl-2"
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Update Edit"
            className="py-4 px-8 mb-6 bg-primary rounded text-white text-lg tracking-widest "
          />
        </form>
      </div>
    </>
  );
};

export default MyProfile;
