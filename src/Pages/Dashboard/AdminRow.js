import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
  const { _id, email } = user;
  const makeAdmin = () => {
    fetch(`https://sleepy-anchorage-47167.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('failed to make an admin');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Admin added successfully');
        }
      });
  };

  return (
    <tr>
      <th>{index + index}</th>
      <td>{_id}</td>
      <td>{email}</td>
      <td>
        {user?.role !== 'admin' ? (
          <button onClick={makeAdmin} className="btn btn-accent">
            Make Admin
          </button>
        ) : (
          <button className="btn-sm rounded-full text-white uppercase btn-secondary">
            Already Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default AdminRow;
