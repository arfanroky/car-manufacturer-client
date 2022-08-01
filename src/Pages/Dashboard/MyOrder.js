import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import DeleteDialog from '../../Shared/DeleteDialog';
import Spinner from '../../Shared/Spinner';
import TableRow from './TableRow';
import { useQuery } from 'react-query';

const MyOrder = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [orders, setOrders] = useState([]);

  const url = `https://sleepy-anchorage-47167.herokuapp.com/order/${user?.email}`;
  console.log(user?.email);

  const { isLoading } = useQuery(
    'orderItem',
    async () =>
      await axiosPrivate
        .get(url)
        .then((res) => {
          setOrders(res.data);
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
          }
        })
  );

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  const handleDelete = async (id) => {
    const url = `https://sleepy-anchorage-47167.herokuapp.com/order/${id}`;
    const { data } = await axios.delete(url);
    if (data.result.deletedCount) {
      toast.success(data.success);
      setConfirmDelete(null);
    }
  };

  return (
    <>
      <div className=" h-screen">
        <h1 className='text-center my-8 font-bold capitalize md:text-4xl text-2xl'>You have <span className='text-primary'>ordered</span> {orders.length} Equipments</h1>
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
              {orders.map((order, index) => (
                <TableRow
                  order={order}
                  index={index}
                  handleDelete={handleDelete}
                  key={order._id}
                  setConfirmDelete={setConfirmDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
        {confirmDelete && (
          <DeleteDialog
            confirmDelete={confirmDelete}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default MyOrder;
