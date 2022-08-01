import {
  faBan,
  faMoneyCheckDollar,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ order, index, handleCancel, setConfirmDelete }) => {
  const { paid, _id, name, email, productName, img, price } = order;

  console.log(order);

  // console.log(paid);

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
          {paid ? (
            <button className="btn btn-info">
              paid
              <FontAwesomeIcon className="ml-4 text-xl" icon={faSpinner} />
            </button>
          ) : (
            <>
              <label
                onClick={() => setConfirmDelete(order)}
                htmlFor="handleDelete"
                className="btn btn-primary"
              >
                Cancel
              </label>

              <button className="btn btn-accent ml-6">
                <Link to={`/dashboard/payment/${_id}`}>
                  pay
                  <FontAwesomeIcon
                    className="ml-4 text-xl"
                    icon={faMoneyCheckDollar}
                  />
                </Link>
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
