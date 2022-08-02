import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import DeleteDialog from '../../Shared/DeleteDialog';
import Spinner from '../../Shared/Spinner';
import SingleOrderRow from './SingleOrderRow';
import './ScrollRemove.css';

const ManageOrders = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [query, setQuery] = useState('');
  const [orders, setOrders] = useState([]);
  const { data, isLoading, error } = useQuery(['orders'], () =>
    axiosPrivate.get('https://sleepy-anchorage-47167.herokuapp.com/order')
  );

  useEffect(() => {
    setOrders(data?.data);
  }, [data]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
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
        <h1 className="text-center md:text-4xl text-2xl my-12 font-semibold">
          Manage ALl <span className="text-primary">Orders</span>
        </h1>

        <div className="flex justify-end items-center mb-4 px-8">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search by email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>

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
              {orders
                ?.filter((e) => e.email.includes(query))
                .map((order, index) => (
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
