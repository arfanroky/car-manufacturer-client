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

const MyOrder = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [orders, setOrders] = useState([]);
  const email = user?.email;
  const url = `http://localhost:5000/order?email=${email}`;

  const findOrders = async () => {
    try {
      const { data } = await axiosPrivate.get(url);
      setOrders(data);
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        navigate('/login');
      }
    }
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
        setConfirmDelete(null);
      }
    });
  };

  return (
    <>

    <div className=" h-screen">

<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {orders.map((order, index) => (
              <TableRow
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
{confirmDelete && (
        <DeleteDialog
          confirmDelete={confirmDelete}
          handleCancel={handleCancel}
        />
      )}
    </div>


      {/* <div className="min-h-screen">
        <table className="table w-full ">
          <thead>
            <tr>
              <th />
              <th>Name & Email</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="min-h-screen">
            {orders.map((order, index) => (
              <TableRow
                order={order}
                index={index}
                handleCancel={handleCancel}
                key={order._id}
                setConfirmDelete={setConfirmDelete}
              />
            ))}
          </tbody>
        </table>
      </div> */}
      
    </>
  );
};

export default MyOrder;
