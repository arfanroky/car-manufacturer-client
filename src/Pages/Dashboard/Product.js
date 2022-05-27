import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Product = ({product, setConfirmDelete}) => {
  const { name, img, description, quantity, available_quantity, price, _id } = product;

  const desc = description.slice(0, 150);

  return (
    <div className="col">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="equipment" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
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
          <div className="card-actions justify-end ">
          <label
                onClick={() => setConfirmDelete(product)}
                htmlFor="delete-dialog"
                className="btn btn-outline btn-error"
              >
               Delete <FontAwesomeIcon className='w-6 ml-3' icon={faTrash}/>
              </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
