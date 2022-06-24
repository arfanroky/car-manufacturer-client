import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import Spinner from '../../Shared/Spinner';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
  const { data, isLoading, error, refetch } = useQuery('users', () =>
    axiosPrivate.get('https://sleepy-anchorage-47167.herokuapp.com/user')
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  console.log(data.data);

  return (
    <div className="container mx-auto">
      <h1 className="text-center md:text-5xl text-2xl font-thin text-primary my-12">
        Make Admin
      </h1>
      <div className="overflow-x-auto mx-6 ">
        <table className="table w-full">
          <thead>
            <tr>
              <th />
              <th>Id</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((user, index) => (
              <AdminRow
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
