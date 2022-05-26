import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteDialog = ({confirmDelete, handleCancel}) => {
    const {_id, name, }  = confirmDelete;


    return (
        <>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="delete-dialog" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are You sure you want to delete {name}
            </h3>
            <div className="modal-action">
            <button
                onClick={() => handleCancel(_id)}
                className="btn btn-primary"
              >
                Cancel
                <FontAwesomeIcon className="ml-4 text-xl" icon={faBan} />
              </button>

              <label htmlFor="delete-dialog" className="btn">
               Cancel!
              </label>
            </div>
          </div>
        </div>
      </>
      
    );
};

export default DeleteDialog;