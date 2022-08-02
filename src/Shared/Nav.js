import {
  faArrowRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Spinner from './Spinner';

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/');
    localStorage.removeItem('accessToken');
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    toast.error(error);
  }

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        {user ? (
          <>
            <button
              onClick={logout}
              className="btn btn-outline btn-error mx-2 rounded-lg"
            >
              Sign Out <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
            {user?.reloadUserInfo?.photoUrl ? (
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset">
                  <img src={user?.reloadUserInfo?.photoUrl} alt="" />
                </div>
              </div>
            ) : (
              <span className="w-12 h-12 rounded-full bg-primary mx-3 md:my-0 my-4 text-white">
                <FontAwesomeIcon className="text-xl" icon={faUser} />
              </span>
            )}
          </>
        ) : (
          <>
            <Link
              className="btn btn-outline font-bold rounded btn-primary md:my-0 my-4 md:mr-4"
              to="/login"
            >
              Log In
            </Link>
            <Link
              className="btn btn-outline font-bold rounded btn-primary "
              to="/sign-up"
            >
              Sign Up
            </Link>
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="container mx-auto px-6 sticky top-0 z-40">
      <div className="navbar bg-gray-200 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 shadow-2xl bg-accent text-white  rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Link className="text-xl uppercase font-bold" to="/">
            Help <span className="text-info">Bari</span>
          </Link>
        </div>
        <div className=" navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">{navMenu}</ul>
        </div>

        <div className="navbar-center">
          <label
            tabIndex="1"
            htmlFor="dashboard-side-nav"
            className="btn btn-ghost md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
