import { faBagShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating/Rating';

const Items = (props) => {
  const {
    name,
    img,
    description,
    quantity,
    available_quantity,
    price,
    _id,
    review,
  } = props?.product;

  const desc = description.slice(0, 150);

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl border border-primary ">
      <figure>
        <img src={img} alt="equipment" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{name}</h2>
          <Link
            className="text-warning font-semibold underline"
            to={`/dashboard/add-review/${_id}`}
          >
            Write a review
          </Link>
        </div>

        <Rating
          name="half-rating-read"
          value={Number(review)}
          readOnly
        />
        <p>{desc}</p>
        <p>
          <span className="font-semibold text-primary text-md">Quantity</span>:{' '}
          {quantity > available_quantity ? available_quantity : quantity}
        </p>
        <p>
          <span className="font-semibold text-primary text-md">
            Available_Quantity
          </span>
          : {available_quantity}
        </p>
        <p className="text-info">
          <span className="font-semibold text-primary text-md">Price</span>:{' '}
          {price}
        </p>
        <div className="card-actions justify-end ">
          <Link
            className="btn btn-primary btn-outline "
            to={`/purchase/${_id}`}
          >
            Purchase{' '}
            <FontAwesomeIcon className="ml-4 text-lg" icon={faBagShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
