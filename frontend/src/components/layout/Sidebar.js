import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="hidden md:block w-64 bg-black p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="flex items-center text-gray-300 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/collection/tracks"
              className="flex items-center text-gray-300 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              Your Library
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-10">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">
          Playlists
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Create Playlist
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Liked Songs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;