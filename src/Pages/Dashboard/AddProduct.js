import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageStorageKey = '  c98da956e68ae4ac227cac3ce42b3012';

  const onSubmit = async (e) => {
    const image = e.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          const img = data.data.url;
          const equipment = {
            img: img,
            name: e.name,
            description: e.description,
            quantity: e.minimumQuantity,
            available_quantity: e.maximumQuantity,
            price: e.price,
          };

          fetch('https://sleepy-anchorage-47167.herokuapp.com/equipment', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(equipment),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success('Product Added Successfully');
              } else {
                toast.error('Failed to add an product');
              }
            });
        }
      });

    reset();
  };

  return (
    <div className="py-12">
      <h1 className="text-center text-5xl text-primary font-thin mb-12">
        Add A Product
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[400px] p-8 mx-auto md:shadow-2xl md:-shadow-2xl border border-primary rounded text-center"
      >
        <div className="my-4">
          <input
            {...register('name', {
              required: {
                value: true,
                message: 'name is Required',
              },
            })}
            type="text"
            placeholder="Product name"
            className="input input-bordered input-primary w-full max-w-md"
          />
          {errors.name?.type === 'required' && (
            <p className="my-2 text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="mt-4">
          <input
            {...register('description', {
              required: {
                value: true,
                message: 'description is Required',
              },
            })}
            type="text"
            placeholder="description"
            className="input input-bordered input-primary w-full max-w-md"
          />
          {errors.description?.type === 'required' && (
            <p className="my-2 text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="mt-4">
          <input
            {...register('minimumQuantity', {
              required: {
                value: true,
                message: 'minimumQuantity is Required',
              },
            })}
            type="number"
            placeholder="minimumQuantity"
            className="input input-bordered input-primary w-full max-w-md"
          />
          {errors.minimumQuantity?.type === 'required' && (
            <p className="my-2 text-red-500">
              {errors.minimumQuantity.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <input
            {...register('maximumQuantity', {
              required: {
                value: true,
                message: 'maximumQuantity is Required',
              },
            })}
            type="number"
            placeholder="maximumQuantity"
            className="input input-bordered input-primary w-full max-w-md"
          />
          {errors.maximumQuantity?.type === 'required' && (
            <p className="my-2 text-red-500">
              {errors.maximumQuantity.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <input
            {...register('price', {
              required: {
                value: true,
                message: 'price is Required',
              },
            })}
            type="number"
            placeholder="price"
            className="input input-bordered input-primary w-full max-w-md"
          />
          {errors.price?.type === 'required' && (
            <p className="my-2 text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="my-4">
          <input
            {...register('image', {
              required: {
                value: true,
                message: 'file is Required',
              },
            })}
            type="file"
            placeholder="file"
            className="input  w-full max-w-md"
          />
          {errors.image?.type === 'required' && (
            <p className="my-2 text-red-500">{errors.image.message}</p>
          )}
        </div>

        <input
          className="btn btn-primary w-full max-w-md"
          type="submit"
          value="Add a Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
