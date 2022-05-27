import React from 'react';
import useProduct from '../../hooks/useProduct';
import Spinner from '../../Shared/Spinner';
import Items from './Items';

const Machinery = () => {
  const [products, isLoading] = useProduct();

  if(isLoading){
    return <Spinner></Spinner>
  }
  
  return (
    <div className="container-fluid py-12">
      <h1 className="text-center md:text-6xl font-thin text-primary text-3xl font-serif">
        Equipments
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-8">
        {
        products?.slice(0, 6).map((product) => <Items key={product?._id} product={product}></Items>
        )
        }
      </div>
    </div>
  );
};

export default Machinery;
