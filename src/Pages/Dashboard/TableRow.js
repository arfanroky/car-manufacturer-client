import {
  faBan,
  faMoneyCheckDollar,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const TableRow = ({ order, index, handleCancel , setConfirmDelete}) => {
  // console.log(order);
  const { _id, name, email, productName, img } = order;

  const [paid, setPaid] = useState(false);

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          {name} <br />
          {email}
        </td>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{productName}</div>
            </div>
          </div>
        </td>
        <td className="w-full flex justify-center">
          {paid ? (
            <button className="btn btn-info">
              Pending
              <FontAwesomeIcon className="ml-4 text-xl" icon={faSpinner} />
            </button>
          ) : (
            <>
              <label 
              onClick={() => setConfirmDelete(order)}
              htmlFor="delete-dialog" className="btn btn-primary">
                Cancel Modal
              </label>

      
              <button className="btn btn-accent ml-6">
                pay{' '}
                <FontAwesomeIcon
                  className="ml-4 text-xl"
                  icon={faMoneyCheckDollar}
                />
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
