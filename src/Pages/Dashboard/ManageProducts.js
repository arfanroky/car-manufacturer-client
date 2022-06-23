import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useProduct from '../../hooks/useProduct';
import DeleteDialog from '../../Shared/DeleteDialog';
import Spinner from '../../Shared/Spinner';
import Product from './Product';

const ManageProducts = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [products, isLoading] = useProduct();

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleProductDelete = async (id) => {
    const url = `https://sleepy-anchorage-47167.herokuapp.com/equipment/${id}`;
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
      <div className="container mx-auto py-12 ">
        <h1 className="text-center md:text-6xl font-thin text-primary text-3xl font-serif">
          Equipments
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-y-8 ">
          {products?.map((product) => (
            <Product
              key={product?._id}
              product={product}
              handleProductDelete={handleProductDelete}
              setConfirmDelete={setConfirmDelete}
            ></Product>
          ))}
        </div>
      </div>

      {confirmDelete && (
        <DeleteDialog
          confirmDelete={confirmDelete}
          handleProductDelete={handleProductDelete}
        />
      )}
    </>
  );
};

export default ManageProducts;
