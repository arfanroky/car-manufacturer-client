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
    <div className="my-12">
      <h1 className="text-center md:text-6xl font-thin text-primary text-3xl font-serif my-12">
        Equipments
      </h1>
      <div className="flex md:justify-between justify-center items-center gap-5 flex-wrap">
        {
        products?.slice(0, 6).map((product) => <Items key={product?._id} product={product}></Items>
        )
        }
      </div>
    </div>
  );
};

export default Machinery;
