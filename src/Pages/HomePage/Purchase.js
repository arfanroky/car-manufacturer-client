import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
const Purchase = () => {
  const inputFieldQuantity = useRef('');
  const phoneRef = useRef('');
  const locationRef = useRef('');
  // const [updateQuantity, setUpdateQuantity] = useState(0);
  // const [avQuantity, setAvQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState();
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  const { isLoading, error } = useQuery(['equipment', id], () =>
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // setUpdateQuantity(data.quantity);
        // setAvQuantity(data.available_quantity);
      })
  );

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  console.log(product);

  

  // const handleQDecreaseQuantity = (e) => {
  //   const orderQuantityText = quantityDecreaseRef.current.value;
  //   const quantity = parseInt(updateQuantity);
  //   const availableQuantity = parseInt(avQuantity);
  //   const orderQuantity = parseInt(orderQuantityText);
  //   const url = `http://localhost:5000/equipment/${id}`;

  //   fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ availableQuantity }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (
  //         quantity > 0 &&
  //         orderQuantity > quantity &&
  //         orderQuantity < avQuantity
  //       ) {
  //         setAvQuantity(availableQuantity - orderQuantity);
  //         toast.success(`you added ${orderQuantity} order`);
  //       } else {
  //         toast.error(
  //           'you must be order greater than quantity and less available quantity'
  //         );
  //       }
  //     });
  // };

  const handlePurchase = (e) => {
    e.preventDefault();
    const purchaseData = {
      img: product.img,
      purchaseId: product._id,
      name: user?.displayName,
      productName: product.name,
      email: user.email,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
    };

    const inputQuantity = parseInt(inputFieldQuantity.current.value);
    console.log(inputQuantity);
    const prevQuantity = parseInt(product.quantity);
    const availableQuantity = parseInt(product.available_quantity);
    console.log(availableQuantity);

    axios.post('http://localhost:5000/order', purchaseData).then((res) => {
      const { data } = res;
      console.log(data.result.insertedId);

      const url = `http://localhost:5000/equipment/${id}`;

      if (data.result.insertedId) {
        fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({prevQuantity}),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }

    });
  };

  const handleChangeQuantity = (event) => {
    const quantity = event.target.value;

    // const prevQuantity = product.quantity;
    // const availableQuantity = product.quantity;
    // if (quantity >= prevQuantity && quantity < availableQuantity) {
    //   setQuantity(quantity);
    //   toast.success('your order successfully');
    //   e.target.reset();
    // } else {
    //   toast.error(
    //     `You should be able to order at least ${prevQuantity} or more and less than availableQuantity ${availableQuantity}`
    //   );
    // }
    setQuantity(quantity);
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
              : {product.quantity}
            </p>
            <p>
              <span className="font-semibold text-primary text-md">
                Available_Quantity
              </span>
              : {product.available_quantity}
            </p>
            <p className="text-info">
              <span className="font-semibold text-primary text-md">Price</span>:{' '}
              {product?.price}
            </p>
            {/* <p className="text-error">{errorMessage1}</p> */}
            {/* <div className="w-[330px] flex justify-between outline-none border border-accent rounded mb-4">
              <input
                className="3/4  py-3 pl-2 outline-none "
                ref={quantityDecreaseRef}
                placeholder="How many needs?"
                type="number"
                name="quantity"
              />
              <button
                onClick={handleQDecreaseQuantity}
                className="py-3 px-5 bg-accent text-white transition"
              >
                Get Quantity
              </button>
            </div> */}
          </div>
        </div>

        {/* Purchase */}
        <div className="md:w-3/4 card card-compact w-96 bg-base-100 shadow-xl border-t mt-8">
          <h1 className="text-4xl text-center font-thin my-4">
            Purchase Your Order
          </h1>
          <form onSubmit={handlePurchase}>
            <div className="card-body">
              <div className="md:flex gap-x-3">
                <div className="w-full mb-3">
                  <label
                    className="block uppercase text-md font-bold"
                    htmlFor="name"
                  >
                    name
                  </label>
                  <input
                    className="w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
                    type="text"
                    name="name"
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
                    name="email"
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
                  type="text"
                  name="text"
                  value={product.name}
                  readOnly
                />
              </div>

              <div className="w-full mb-3">
                <label
                  className="block uppercase text-md font-bold"
                  htmlFor="order-quantity"
                >
                  order quantity
                </label>
                <input
                  className="w-full py-3 pl-2 outline-none border text-lg border-accent rounded"
                  type="number"
                  ref={inputFieldQuantity}
                  value={quantity}
                  onChange={handleChangeQuantity}
                  name="quantity"
                />
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
                  placeholder="Location"
                  ref={locationRef}
                  autoComplete="off"
                  name="location"
                  required
                />
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
                  placeholder="Phone"
                  required
                  ref={phoneRef}
                  name="phone"
                />
              </div>
              <input
                type="submit"
                value="Purchase"
                className="py-3 px-5 bg-accent text-white transition rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
