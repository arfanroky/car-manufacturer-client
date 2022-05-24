import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='h-screen text-center'>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;