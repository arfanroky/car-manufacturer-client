import React from 'react';
import useProduct from '../../hooks/useProduct';
import Spinner from '../../Shared/Spinner';

const Gallery = () => {
  const [products, isLoading] = useProduct();

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="container mx-auto px-6 ">
        <h1 className='md:text-5xl text-2xl font-semibold text-primary my-12 text-center'>Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:justify-between   gap-6">
        {products.slice(0, 6).map((product) => <div key={product._id} className={`border p-4 hover:bg-gradient-to-tr hover:from-primary hover:to-neutral transition rounded-lg`}>
                <img className='w-full' src={product.img} alt="" />
            </div>

        )}
      </div>
    </div>
  );
};

export default Gallery;
