import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';

import Items from './Items';
// import SingleEquipment from './SingleEquipment';

const Machinery = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery('equipments', () =>
    fetch('http://localhost:5000/equipment').then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  // console.log(products);

  return (
    <div className="container-fluid py-12">
      <h1 className="text-center md:text-6xl font-thin text-primary text-3xl font-serif">
        Equipments
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-8">
        {
        products?.map((product) => <Items key={product?._id} product={product}></Items>
        )
        }
      </div>
    </div>
  );
};

export default Machinery;
