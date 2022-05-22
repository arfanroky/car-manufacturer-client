import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar bg-base-100 px-12 sticky top-0 z-10">
      <div className="navbar-start">
        <Link className="text-xl uppercase font-bold" to="/">
          Help <span className="text-info">Bari</span>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>

          <li tabIndex="0" className="mr-4">
            <NavLink to="/machinery">
              Machinery
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink to="/business-summary">Business Summary</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
            </ul>
          </li>

          <li>
            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="btn btn-outline btn-error"
              >
                Sign Out
              </button>
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
        </ul>
      </div>

      <div className="navbar-center md:hidden flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            
          <li tabIndex="0" className="mr-4">
            <NavLink to="/machinery">
              Machinery
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink to="/business-summary">Business Summary</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
            </ul>
          </li>
            <li>
              {user ? (
                <button className="btn btn-outline btn-error">Sign Out</button>
              ) : (
                <>
                  <Link
                    className="btn btn-outline font-bold rounded btn-primary md:my-0 my-4"
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
