import { faStar, faStarHalf, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ratings = ({rating}) => {
    return (
        <div className='text-secondary'>
              <FontAwesomeIcon icon={
           (rating >= 1 ?  faStar : rating >= 0.5 ?  faStarHalf : faStarOfDavid)
          } />
          <FontAwesomeIcon icon={
           (rating >= 2 ?  faStar : rating >= 1.5 ?  faStarHalf : faStarOfDavid)
          } />
          <FontAwesomeIcon icon={
           (rating >= 3 ?  faStar : rating >= 2.5 ?  faStarHalf : faStarOfDavid)
          } />
          <FontAwesomeIcon icon={
           (rating >= 4 ?  faStar : rating >= 3.5 ?  faStarHalf : faStarOfDavid)
          } />
          <FontAwesomeIcon icon={
           (rating >= 5 ?  faStar : rating >= 4.5 ?  faStarHalf : faStarOfDavid)
          } />
        </div>
    );
};

export default Ratings;