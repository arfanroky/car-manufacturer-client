import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
     <SpinnerDotted size={90} thickness={105} speed={78} color="rgba(71, 172, 57, 0.66)" />
        </div>
    );
};

export default Spinner;