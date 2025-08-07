import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../actions/authActions';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end mb-8">
          <div className="bg-gray-800 w-48 h-48 rounded-md"></div>
          <div className="ml-6">
            <p className="text-sm font-semibold">PROFILE</p>
            <h1 className="text-6xl font-bold mt-4">{user?.name}</h1>
            <p className="mt-4 text-gray-400">
              {user?.subscription === 'premium' ? 'Spotify Premium' : 'Spotify Free'}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Account</h2>
          
          <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <p className="font-medium">{user?.email}</p>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Subscription</label>
                <p className="font-medium capitalize">
                  {user?.subscription || 'free'}
                </p>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Password</label>
                <p className="font-medium">••••••••</p>
                <button className="mt-2 text-sm text-gray-400 hover:text-white underline">
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Your playlists</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Playlist cards */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-900 bg-opacity-50 p-4 rounded-md hover:bg-opacity-70 transition">
                <div className="relative mb-4">
                  <div className="bg-gray-800 aspect-square rounded-md"></div>
                  <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 hover:bg-green-400 transition transform translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="font-bold mb-2">Playlist {item}</div>
                <div className="text-gray-400 text-sm">
                  By {user?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;