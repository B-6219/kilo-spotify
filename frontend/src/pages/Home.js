import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Good afternoon</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {/* Recently played cards */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-900 bg-opacity-50 rounded-md flex items-center hover:bg-opacity-70 transition">
            <div className="w-16 h-16 bg-gray-800 rounded-l-md"></div>
            <div className="p-4 truncate">
              <div className="font-semibold">Recently played {item}</div>
              <div className="text-gray-400 text-sm">Artist name</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Made for you</h2>
          <a href="#" className="text-gray-400 hover:text-white text-sm uppercase">
            See all
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Playlist cards */}
          {[1, 2, 3, 4, 5].map((item) => (
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
                Description of the playlist that can be quite long
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular new releases</h2>
          <a href="#" className="text-gray-400 hover:text-white text-sm uppercase">
            See all
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Album cards */}
          {[1, 2, 3, 4, 5].map((item) => (
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
              <div className="font-bold mb-2">Album {item}</div>
              <div className="text-gray-400 text-sm">
                Artist name
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;