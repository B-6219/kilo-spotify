import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold mr-10">
          Spotify Clone
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/search" className="hover:text-gray-300">
            Search
          </Link>
          <Link to="/collection/tracks" className="hover:text-gray-300">
            Your Library
          </Link>
        </nav>
      </div>

      <div className="flex items-center">
        {isAuthenticated ? (
          <div className="flex items-center">
            <span className="mr-4">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;