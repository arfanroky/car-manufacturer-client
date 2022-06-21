import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import DeleteDialog from '../../Shared/DeleteDialog';
import Spinner from '../../Shared/Spinner';
import SingleOrderRow from './SingleOrderRow';

const ManageOrders = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);

  const { data: orders, isLoading } = useQuery('orders', () =>
       axiosPrivate.get('http://localhost:5000/order')
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleDelete = async (id) => {
    const url = `http://localhost:5000/order/${id}`;
    await axios.delete(url).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.result.deletedCount) {
        toast.success('Delete Successfully');
        setConfirmDelete(null);
      }
    });
  };

  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-center text-primary text-6xl my-12 font-thin">
          Manage ALl Orders
        </h1>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th />
                <th>Name & Email</th>
                <th>product Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.data.map((order, index) => (
                <SingleOrderRow
                  order={order}
                  index={index}
                  handleCancel={handleDelete}
                  key={order._id}
                  setConfirmDelete={setConfirmDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {confirmDelete && (
        <DeleteDialog
          confirmDelete={confirmDelete}
          handleCancel={handleDelete}
        />
      )}
    </>
  );
};

export default ManageOrders;
