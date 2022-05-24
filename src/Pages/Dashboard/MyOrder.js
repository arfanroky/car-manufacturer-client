import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import TableRow from './TableRow';

const MyOrder = () => {
  const [user, loading, error] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  const email = user?.email;
  const url = `http://localhost:5000/order?email=${email}`;

  const findOrders = async () => {
    const { data } = await axios.get(url);
    setOrders(data);
  };
  findOrders();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  const handleCancel = async (id) => {
    const url = `http://localhost:5000/order/${id}`;
    await axios.delete(url).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.result.deletedCount) {
        toast.success(data.success);
      }
    });
  };

  return (
    <div className="h-screen">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Name & Email</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <TableRow
                order={order}
                index={index}
                handleCancel={handleCancel}
                key={order._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
