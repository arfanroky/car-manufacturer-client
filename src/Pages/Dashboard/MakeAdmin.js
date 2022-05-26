import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import Spinner from '../../Shared/Spinner';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);

  const { isLoading, error, refetch } = useQuery('users', () =>
    axiosPrivate
      .get('https://sleepy-anchorage-47167.herokuapp.com/user')
      .then((data) => {
        setUsers(data?.data);
      })
  );

  // console.log(users);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div className="overflow-x-auto">
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
          {users?.map((user, index) => (
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
  );
};

export default MakeAdmin;
