import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const { _id, price, name, email } = order;

  const orderData = async () => {
    await axios
      .post(
        'https://sleepy-anchorage-47167.herokuapp.com/create-payment-intent',
        { price }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  };

  orderData();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '');
    // success('')
    setProcessing(true);
    // confirm card
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      setSuccess('Your payment is done');

      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };

      const { data } = await axios.patch(
        `https://sleepy-anchorage-47167.herokuapp.com/order/${_id}`,
        payment
      );

      if (data.success) {
        toast.success('successfully paid');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="text-right mt-6">
          <button
            className="btn btn-sm px-8 btn-primary text-white  capitalize"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {success && (
        <div>
          <p className="text-success">{success}</p>{' '}
          <p>
            Your TransactionId:{' '}
            <span className="text-warning">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
