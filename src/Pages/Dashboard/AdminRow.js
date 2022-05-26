import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
  const { _id, email, role } = user;
  console.log(email, role);
  const makeAdmin =  () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT', 
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 403){
        toast.error('failed to make an admin')
      }
      return res.json();
    })
    .then(data => {
      if(data.modifiedCount > 0){
        refetch();
        toast.success('Admin added successfully')
      }
    })
    
  };

  return (
    <tr>
      <th>{index + index}</th>
      <td>{_id}</td>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} className="btn btn-accent">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default AdminRow;
