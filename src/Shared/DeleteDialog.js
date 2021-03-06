import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteDialog = ({confirmDelete, handleCancel, handleDelete, handleProductDelete}) => {
    const {_id, productName, }  = confirmDelete;

    console.log(confirmDelete)

    return (
        <>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="handleProductDelete" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are You sure you want to delete <span className='text-primary'>{productName}</span>
            </h3>
            <div className="modal-action">
              <button
               onClick={() => handleProductDelete(_id)}
                className="btn btn-primary"
              >
                Delete
                <FontAwesomeIcon className="ml-4 text-xl" icon={faBan} />
              </button>
            </div>
          </div>
        </div>

        <input type="checkbox" id="handleCancel" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are You sure you want to delete <span className='text-primary'>{productName}</span>
            </h3>
            <div className="modal-action">
              <button
               onClick={() => handleCancel(_id)}
                className="btn btn-primary"
              >
                Delete
                <FontAwesomeIcon className="ml-4 text-xl" icon={faBan} />
              </button>
            </div>
          </div>
        </div>

        <input type="checkbox" id="handleDelete" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are You sure you want to delete <span className='text-primary'>{productName}</span>
            </h3>
            <div className="modal-action">
              <button
               onClick={() => handleDelete(_id)}
                className="btn btn-primary"
              >
                Delete
                <FontAwesomeIcon className="ml-4 text-xl" icon={faBan} />
              </button>
            </div>
          </div>
        </div>
      </>
      
    );
};

export default DeleteDialog;