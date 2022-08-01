import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile container mx-auto">
      <input
        id="dashboard-side-nav"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content drawerScroll">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-side-nav" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
          <li>
            <NavLink className='mb-3' to="/dashboard">My Profile</NavLink>
          </li>

              <li>
               {
                 (admin === false) && <>
                  <NavLink className='mb-3' to="/dashboard/my-orders">My Orders</NavLink>
                 </>
               }
              </li>

            <li>
              {
                (admin === true) &&  <>
              <NavLink className='mb-3' to="/dashboard/manage-orders">
                Manage All Orders
              </NavLink>
              <NavLink className='mb-3' to="/dashboard/add-product">Add A Product</NavLink>
              <NavLink className='mb-3' to="/dashboard/make-admin">Make Admin</NavLink>
              <NavLink className='mb-3' to="/dashboard/manage-products">
                Manage Products
              </NavLink>
              </>
              }
            </li>
            
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
