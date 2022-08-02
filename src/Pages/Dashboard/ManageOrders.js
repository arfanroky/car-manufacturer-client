import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import DeleteDialog from '../../Shared/DeleteDialog';
import Spinner from '../../Shared/Spinner';
import SingleOrderRow from './SingleOrderRow';
import './ScrollRemove.css';

const ManageOrders = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);

  const { data: orders, isLoading } = useQuery('orders', () =>
    axiosPrivate.get('https://sleepy-anchorage-47167.herokuapp.com/order')
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleCancel = async (id) => {
    const url = `https://sleepy-anchorage-47167.herokuapp.com/order/${id}`;
    await axios.delete(url).then((res) => {
      const { data } = res;
      if (data.result.deletedCount) {
        toast.success('Delete Successfully');
        setConfirmDelete(null);
      }
    });
  };

  return (
    <>
      <div className="container mx-auto ">
        <h1 className="text-center text-primary md:text-5xl text-2xl my-12 font-semibold">
          Manage ALl Orders
        </h1>

        <div className="overflow-x-auto mx-6">
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
                  handleCancel={handleCancel}
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
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ManageOrders;
