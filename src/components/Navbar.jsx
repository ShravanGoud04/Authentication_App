import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className='navbar bg-dark'>
        <div className='container-fluid'>
          <Link to={"/"}>
            <span className='navbar-brand mb-0 h1 text-light'>Auth. App</span>
          </Link>
          <span className='navbar-brand mb-0 '>
            {user ? (
              <button
                className='btn btn-danger rounded-0'
                onClick={handleLogout}
              >
                Log-out
              </button>
            ) : (
              <>
                <Link to={"/register"}>
                  <button className='btn btn-success rounded-0'>
                    Register
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className='btn btn-warning rounded-0 mx-2'>
                    Login
                  </button>
                </Link>
              </>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
