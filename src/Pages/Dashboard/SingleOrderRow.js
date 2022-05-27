import { faMoneyCheckDollar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

const SingleOrderRow = ({order, index, setConfirmDelete}) => {

    const { paid,  _id, name, email, productName, img, price} = order;
    const [paidBtn, setPaidBtn] =useState('Pending');
  useEffect(() => {
    if(paid){
      setPaidBtn('Pending')
    }
    else if(!paid){
      setPaidBtn('Unpaid')
    }
  }, [paid])

    const handlePaidBtn = () => {
      setPaidBtn('Shipped')
    }

   
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
        <td>
          {price}
        </td>
        <td className="w-full flex justify-center">
          {paid ? (
            <button
            onClick={handlePaidBtn}
             className="btn btn-info">
           {paidBtn}
              <FontAwesomeIcon className="ml-4 text-xl" icon={faSpinner} />
            </button>
          ) : (
            <>
            <button className='btn btn-warning mr-3'>Unpaid</button>
              <label 
              onClick={() => setConfirmDelete(order)}
              htmlFor="delete-dialog" className="btn btn-primary">
                Delete
              </label>
            </>
          )}
        </td>
      </tr>
       </>
    );
};

export default SingleOrderRow;