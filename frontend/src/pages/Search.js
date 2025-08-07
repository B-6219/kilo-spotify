import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for search results
  const searchResults = {
    topResult: {
      type: "artist",
      name: "Artist Name",
      image: "https://placehold.co/100x100",
      followers: "12,345,678 followers"
    },
    songs: [
      { id: 1, title: "Song 1", artist: "Artist 1", album: "Album 1", duration: "3:45" },
      { id: 2, title: "Song 2", artist: "Artist 2", album: "Album 2", duration: "4:20" },
      { id: 3, title: "Song 3", artist: "Artist 3", album: "Album 3", duration: "3:15" }
    ],
    albums: [
      { id: 1, title: "Album 1", artist: "Artist 1", year: "2023", cover: "https://placehold.co/150x150" },
      { id: 2, title: "Album 2", artist: "Artist 2", year: "2022", cover: "https://placehold.co/150x150" },
      { id: 3, title: "Album 3", artist: "Artist 3", year: "2021", cover: "https://placehold.co/150x150" }
    ],
    artists: [
      { id: 1, name: "Artist 1", image: "https://placehold.co/100x100" },
      { id: 2, name: "Artist 2", image: "https://placehold.co/100x100" },
      { id: 3, name: "Artist 3", image: "https://placehold.co/100x100" }
    ],
    playlists: [
      { id: 1, title: "Playlist 1", owner: "User 1", cover: "https://placehold.co/100x100" },
      { id: 2, title: "Playlist 2", owner: "User 2", cover: "https://placehold.co/100x100" },
      { id: 3, title: "Playlist 3", owner: "User 3", cover: "https://placehold.co/100x100" }
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would trigger an API call to search
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search bar */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full bg-gray-900 text-white rounded-full px-6 py-3 pl-12 text-xl focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </form>

        {/* Search results */}
        {searchTerm && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            
            {/* Top result */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Top result</h3>
              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 flex items-center">
                <img 
                  src={searchResults.topResult.image} 
                  alt={searchResults.topResult.name} 
                  className="w-32 h-32 rounded-full mr-6"
                />
                <div>
                  <p className="text-gray-400 mb-2">Artist</p>
                  <h4 className="text-3xl font-bold mb-2">{searchResults.topResult.name}</h4>
                  <p className="text-gray-400">{searchResults.topResult.followers}</p>
                  <button className="mt-4 bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:bg-green-400 transition">
                    Play
                  </button>
                </div>
              </div>
            </div>

            {/* Songs */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Songs</h3>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  See all
                </a>
              </div>
              <div className="bg-gray-900 bg-opacity-30 rounded-lg overflow-hidden">
                <div className="divide-y divide-gray-800">
                  {searchResults.songs.map((song) => (
                    <div key={song.id} className="grid grid-cols-12 px-4 py-3 hover:bg-gray-800 hover:bg-opacity-50 group">
                      <div className="col-span-1 flex items-center">
                        <button className="hidden group-hover:block text-white">
                          <svg
                            className="w-5 h-5"
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
                      <div className="col-span-5">
                        <div className="font-medium">{song.title}</div>
                        <div className="text-gray-400 text-sm">{song.artist}</div>
                      </div>
                      <div className="col-span-4 text-gray-400">{song.album}</div>
                      <div className="col-span-2 text-gray-400 text-right">{song.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Albums */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Albums</h3>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  See all
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {searchResults.albums.map((album) => (
                  <div key={album.id} className="bg-gray-900 bg-opacity-50 p-4 rounded-md hover:bg-opacity-70 transition">
                    <div className="relative mb-4">
                      <img 
                        src={album.cover} 
                        alt={album.title} 
                        className="aspect-square rounded-md"
                      />
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
                    <div className="font-bold mb-2">{album.title}</div>
                    <div className="text-gray-400 text-sm">
                      {album.artist} • {album.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Artists */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Artists</h3>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  See all
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {searchResults.artists.map((artist) => (
                  <div key={artist.id} className="bg-gray-900 bg-opacity-50 p-4 rounded-md hover:bg-opacity-70 transition text-center">
                    <div className="relative mb-4">
                      <img 
                        src={artist.image} 
                        alt={artist.name} 
                        className="w-32 h-32 rounded-full mx-auto"
                      />
                    </div>
                    <div className="font-bold mb-2">{artist.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Playlists */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Playlists</h3>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  See all
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {searchResults.playlists.map((playlist) => (
                  <div key={playlist.id} className="bg-gray-900 bg-opacity-50 p-4 rounded-md hover:bg-opacity-70 transition">
                    <div className="relative mb-4">
                      <img 
                        src={playlist.cover} 
                        alt={playlist.title} 
                        className="aspect-square rounded-md"
                      />
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
                    <div className="font-bold mb-2">{playlist.title}</div>
                    <div className="text-gray-400 text-sm">
                      By {playlist.owner}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Browse all categories when no search term */}
        {!searchTerm && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Browse all</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { id: 1, name: "Pop", color: "bg-green-500" },
                { id: 2, name: "Hip-Hop", color: "bg-blue-500" },
                { id: 3, name: "Rock", color: "bg-red-500" },
                { id: 4, name: "Jazz", color: "bg-yellow-500" },
                { id: 5, name: "Electronic", color: "bg-purple-500" },
                { id: 6, name: "Classical", color: "bg-pink-500" },
                { id: 7, name: "Country", color: "bg-indigo-500" },
                { id: 8, name: "R&B", color: "bg-teal-500" }
              ].map((category) => (
                <div key={category.id} className={`${category.color} rounded-lg p-6 relative overflow-hidden`}>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black bg-opacity-20 rounded-full"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black bg-opacity-20 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;