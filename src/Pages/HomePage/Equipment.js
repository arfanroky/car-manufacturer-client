import React from 'react';
import { Link } from 'react-router-dom';

const Equipment = ({ equipment }) => {
  const { _id, img, name, description, quantity, available_quantity, price } =
    equipment;

  const desc = description.slice(0, 150);

  return (
    <div className="col">
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="equipment" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{desc}</p>
          <p>
            <span className="font-semibold text-primary text-md">Quantity</span>
            : {quantity}
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
          <div className="card-actions justify-end">
            <Link class="btn btn-primary btn-outline " to={`/purchase/${_id}`}>
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
