import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L17wgDQ6lNUJHfS21o4msZeXStfav9pXTJNT3nZ8ogjItNEjex5ARO3wGJnQGo4pFUjn9zgKH3j4IfsAPsYQJFx00aFrMFU0U'
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;

  const { data: order, isLoading } = useQuery(['order', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  //   console.log(order);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-screen py-12 ">
      <h1 className="text-6xl uppercase text-primary font-thin">Payment</h1>
      <div className="card w-50  max-w-md bg-base-100 shadow-xl border border-primary mx-auto">
        <div className="card-body">
          <h2 className="card-title">
            Pay for{' '}
            <span className="pl-1 text-primary">{order.productName}</span>
          </h2>
        </div>
      </div>

      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 border-primary border mx-auto mt-12">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
