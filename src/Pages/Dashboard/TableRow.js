
import React from 'react';

const TableRow = ({order, index , handleCancel}) => {

    // console.log(order);
    const {_id, name, email, productName , img} = order;


    return (
        <>
             <tr>
        <th>{index + 1}</th>
        <td>{name} <br />
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
            <button 
            onClick={() => handleCancel(_id)}
            className='btn btn-primary'>
                Cancel
            </button>
        </td>
      </tr>
        </>
    );
};

export default TableRow;