import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';

const Purchase = () => {
  const [UpdateQuantity, setUpdateQuantity] = useState();
  const [equipment, setEquipment] = useState();
  const { id } = useParams();

//   const { name, description, quantity, available_quantity, price}= equipment;

  const { isLoading, error } = useQuery(['equipment', id], () =>
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipment(data);
        setUpdateQuantity(data.quantity);
      })
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }


  


  return (
    <div className="md:h-[90vh] min-h-screen md:py-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center  items-center h-3/4 w-full">
            <div className='text-center'>
                <img className='hover:scale-125 transition text-center' src={equipment?.img} alt="" />
            </div>
            <div className='p-4 md:px-0 px-4 '>
                <h1 className='text-5xl font-thin uppercase text-accent'>{equipment?.name}</h1>
                <p className='md:max-w-2xl text-justify my-4 text-lg'>{equipment?.description}</p>
                <p className='my-2'><span className='text-primary text-xl'>Quantity: </span>{equipment?.quantity}</p>
                <p className='my-2'><span className='text-primary text-xl'>Available_Quantity: </span>{equipment?.available_quantity}</p>
                <p className='text-info my-2'><span className='text-primary text-xl'>Price: </span>{equipment?.price}</p>
        <div className="w-[330px] flex justify-between outline-none border border-primary rounded">
            <input className='3/4  py-3 pl-2 outline-none ' 
            placeholder='Add Quantity'
            type="number" name="" id="" />
            <button className='py-3 px-5 bg-primary hover:text-white transition'>Add Quantity</button>
        </div>
            </div>
        </div>
    </div>
  );
};

export default Purchase;
