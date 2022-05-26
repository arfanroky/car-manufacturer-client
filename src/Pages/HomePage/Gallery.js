import React from 'react';
import useProduct from '../../hooks/useProduct';
import Spinner from '../../Shared/Spinner';

const Gallery = () => {
  const [products, isLoading] = useProduct();

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-screen">
        <h1 className='text-6xl font-thin text-primary my-12 text-center'>Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5">
        {products.map((product) => (
          <>
            <div key={product._id} className={`border p-4 hover:bg-gradient-to-tr hover:from-primary hover:to-neutral transition`}>
                <img className='w-full' src={product.img} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
