import React, {useState } from 'react';
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
 const [prevQuantity, setPrevQuantity] = useState();
 const [avQuantity, setAvQuantity] = useState('');
 const [quantity, setQuantity] = useState(0)

  const { isLoading, error } = useQuery(['equipment', id], () =>
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setPrevQuantity(data?.quantity)
        setAvQuantity(data?.available_quantity)
      })
  );

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  // console.log('av', avQuantity);

  const onSubmit = (e) => {
    setQuantity(e.quantity);
    const purchaseData = {
      purchaseId: product._id,
      img: product?.img,
      name: e.userName,
      email: e.email,
      productName: e.productName,
      location: e.location,
      phone: e.phone,
    };

    axios.post('http://localhost:5000/order', purchaseData).then(res => {
      const {data} = res;

      if(data){
        console.log(data);
        toast.success('go to dashboard click my orders and pay for the this product')
      }

      // if(data.success){
      //   const url = `http://localhost:5000/equipment/${id}`;
      //   const inputQuantity = e.quantity;
      //   const quantity = Number(inputQuantity)

      //   console.log(typeof quantity, typeof avQuantity);
      //   fetch(url, {
      //     method: 'PUT', 
      //     headers: {
      //       'content-type': 'application/json'
      //     },
      //     body: JSON.stringify({quantity, avQuantity})
      //   })
      //   .then(res => res.json())
      //   .then(data => {
      //     if(data){
      //       console.log(data);
      //       if(quantity >= prevQuantity && quantity < avQuantity){
      //         const result = avQuantity - quantity;
      //         console.log('second point ',result);
      //         setAvQuantity(result)
      //         toast.success('success')
      //       }
      //     }
      //   })
      // }
    })

  

    reset()
  };


  return (
    <div className="md:h-[90vh] min-h-screen md:py-0 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center  items-center h-3/4 w-full mt-12 justify-items-center">
        {/* Order details */}
         <div className="card card-compact w-96 bg-base-100 shadow-xl border-t md:mb-0 mb-12">
          <figure>
            <img src={product?.img} alt="equipment" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.name}</h2>
            <p>{product?.description}</p>
            <p>
              <span className="font-semibold text-primary text-md">
                Quantity
              </span>
              : {prevQuantity}
            </p>
            <p>
              <span className="font-semibold text-primary text-md">
                Available_Quantity
              </span>
              : {avQuantity}
            </p>
            <p className="text-info">
              <span className="font-semibold text-primary text-md">Price</span>:{' '}
              {product?.price}
            </p>
          </div>
        </div>

        {/* Purchase */}
        <div className="md:w-3/4 card card-compact w-96 bg-base-100 shadow-xl border-t mt-8">
          <h1 className="text-4xl text-center font-thin my-4">
            Purchase Your Order
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-x-3">
              <div className="w-full mb-3">
                <label
                  className="block uppercase text-md font-bold"
                  htmlFor="user-name"
                >
                  name
                </label>
                <input
                  className="w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
                  type="text"
                  name="name"
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
                  className=" w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
                  type="email"
                  {...register('email')}
                  value={user?.email}
                  readOnly
                />
              </div>
            </div>
           
            <div className="w-full mb-3">
              <label
                className="block uppercase text-md font-bold"
                htmlFor="product-name"
              >
                Product name
              </label>

              <input
                className=" w-full py-3 pl-2 outline-none border text-lg border-accent rounded uppercase text-accent "
                type='text'
                {...register('productName')}
                value={product.name}
                readOnly
              />
            </div>

            <div className="w-full mb-3">
              <label
                className="block uppercase text-md font-bold"
                htmlFor="name"
              >
                quantity
              </label>

              <input
                className="w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
                placeholder={`minimum order ${product?.quantity} piece`}
                type="number"
                {...register('quantity', {
                  required: {
                    value: true,
                    message: 'should be contain',
                  },
                  min: {
                    value: product?.quantity,
                    message: `you have to order At least minimum ${product?.quantity} `,
                  },
                  max: {
                    value: product?.available_quantity,
                    message: `you can't order more than availableQuantity ${product?.available_quantity}`,
                  },
                })}
              />
              {errors.quantity?.type === 'required' && (
                <p className="text-error mt-1">{errors.quantity.message}</p>
              )}
              {errors.quantity?.type === 'min' && (
                <p className="text-error m-1">{errors.quantity.message}</p>
            )}
              {errors.quantity?.type === 'max' && (
                <p className="text-error m-1">{errors.quantity.message}</p>
              )}
            </div>

            <div className="w-full mb-3">
              <label
                className="block uppercase text-md font-bold"
                htmlFor="location"
              >
                Location
              </label>
              <input
              className="w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
              type="text"
              placeholder='Location'
              {...register('location', {
                required: {
                  value: true,
                  message: 'Provide a Location',
                }
              })}
              />
                {errors.location?.type === 'required' && (
                <p className="text-error mt-1">{errors.location.message}</p>
              )}
            </div>

            <div className="w-full mb-3">
              <label
                className="block uppercase text-md font-bold"
                htmlFor="phone"
              >
                phone
              </label>

              <input
              className="w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
              type="number"
              placeholder='Phone'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Provide a phone Number',
                }
              })}
              />
                {errors.phone?.type === 'required' && (
                <p className="text-error mt-1">{errors.phone.message}</p>
              )}
            </div>

            <input
            
              type="submit"
              value="Purchase"
              className="btn btn-accent w-full mt-4"
            />
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
