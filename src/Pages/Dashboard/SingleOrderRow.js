import {
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleOrderRow = ({ order, index, setConfirmDelete }) => {
  const { paid, _id, name, email, productName, img, price } = order;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          {name} <br />
          {email}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
            </div>
          </div>
        </td>
        <td>{price}</td>
        <td className="w-full flex justify-center">
            {
              paid === 'Pending' ? <><button className='btn btn-info'>
                {paid} <FontAwesomeIcon className='ml-2' icon={faSpinner}/>
              </button></>: ''
            }
            {
              paid === 'Shipped' ? <button className='btn btn-success'>
                {paid}
              </button> : ''
            }
            {
              paid === 'Unpaid' ? <>
              <button className='btn bg-red-600 mr-2'>
                {paid}
              </button>
              <label
                onClick={() => setConfirmDelete(order)}
                htmlFor="handleCancel"
                className="btn btn-primary"
              >
                Delete
                </label>
              </> : ''
            }
           
        </td>
      </tr>
    </>
  );
};

export default SingleOrderRow;
