import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Purchase = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { isLoading, error } = useQuery(['equipment', id], () =>
    fetch(`https://sleepy-anchorage-47167.herokuapp.com/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
  );

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

 
  const onSubmit = async (e) => {


    let prevPrice = parseInt(product.price);
    const getPrice = prevPrice * parseInt(e.quantity);
       prevPrice += getPrice;
    
    const avQuantity = parseInt(product.available_quantity) - parseInt(e.quantity);

  
    const orderData = {
      img: product.img,
      name: e.email,
      email: e.userName,
      productName: e.productName,
      quantity: e.quantity,
      price: prevPrice,
      location: e.location
    }

    await axios.put(`http://localhost:5000/equipment/${id}`, {avQuantity});

    const { data } = await axios.put(`http://localhost:5000/order/${id}`,
      orderData
    );

    if (data.success) {
      toast.success(
        'go to dashboard click my orders and pay for the this product'
      );
    }

    reset();
  };

  return (
    <div className="container mx-auto px-6">
      <h1 className="md:text-5xl text-2xl text-center my-12 text-primary">
        Purchase Your Order
      </h1>
      <form
        className="md:w-[600px] mx-auto shadow-2xl p-6 bg-gray-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-3 gap-4 mb-6">
          <figure className="col-span-1">
            <img src={product.img} alt="" />
          </figure>
          <div className="col-span-2 text-justify">
            <p>{product.description} </p>
            <p>Available_Quantity: {product.available_quantity}</p>
            <p>
              Price: <span className="text-primary">${product.price}</span>{' '}
            </p>
          </div>
        </div>
        <div className="md:flex gap-x-3">
          <div className="w-full mb-3">
            <label
              className="block uppercase text-md font-bold"
              htmlFor="user-name"
            >
              name
            </label>
            <input
              className="w-full py-3 pl-2 outline-none text-lg shadow-lg rounded"
              type="text"
              {...register('userName')}
              value={user?.displayName ? user.displayName : 'User'}
              readOnly
            />
          </div>

          <div className="w-full mb-3">
            <label
              className="block uppercase text-md font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" w-full py-3 pl-2 outline-none text-lg  rounded shadow-lg"
              type="email"
              {...register('email')}
              value={user?.email}
              readOnly
            />
          </div>
        </div>

        <div className="md:flex gap-x-3">
          <div className="w-full mb-3">
            <label
              className="block uppercase text-md font-bold"
              htmlFor="product-name"
            >
              Product Name
            </label>
            <input
              className="w-full py-3 pl-2 outline-none text-lg shadow-lg rounded"
              type="text"
              {...register('productName')}
              value={product.name}
              readOnly
            />
          </div>

          <div className="w-full mb-3">
            <label className="block capitalize text-sm" htmlFor="quantity">
              Minimum Quantity
            </label>
            <input
              className=" w-full py-3 pl-2 outline-none  text-lg rounded shadow-md"
              type="text"
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Quantity is Required',
                },
                min: {
                  value: product.quantity,
                  message: `You have to Order more than ${product.quantity}`,
                },
                max: {
                  value: product.available_quantity,
                  message: `You should order under the maximum ${product.available_quantity}`,
                },
              })}
              defaultValue={product.quantity}
            />
            {errors.quantity?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
            {errors.quantity?.type === 'min' && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
            {errors.quantity?.type === 'max' && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </div>
        </div>

        <div className="md:flex gap-x-3">
          <div className="w-full mb-3">
            <label
              className="block uppercase text-md font-bold"
              htmlFor="location"
            >
              Location
            </label>
            <select
              class=" w-full py-3 pl-2 outline-none text-lg shadow-lg rounded"
              {...register('location')}
            >
              <option>Bangladesh</option>
              <option>America</option>
              <option>Switzerland</option>
              <option>England</option>
            </select>
          </div>

          <div className="w-full mb-3">
            <label
              className="block uppercase text-md font-bold"
              htmlFor="quantity"
            >
              Phone
            </label>
            <input
              className=" w-full py-3 pl-2 outline-none  text-lg rounded shadow-md"
              type="tel"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Phone is Required',
                },
              })}
              placeholder="Phone"
            />
            {errors.phone?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <input
          type="submit"
          value="Purchase"
          className="btn btn-accent w-full mt-4"
        />
      </form>
    </div>
  );
};

export default Purchase;
