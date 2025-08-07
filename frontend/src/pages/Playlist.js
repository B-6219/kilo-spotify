import React from 'react';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  const { id } = useParams();

  // Mock data for the playlist
  const playlist = {
    title: "My Playlist",
    description: "A collection of my favorite songs",
    owner: "User Name",
    likes: "123,456",
    cover: "https://placehold.co/300x300"
  };

  // Mock data for songs
  const songs = [
    { id: 1, title: "Song 1", artist: "Artist 1", album: "Album 1", duration: "3:45" },
    { id: 2, title: "Song 2", artist: "Artist 2", album: "Album 2", duration: "4:20" },
    { id: 3, title: "Song 3", artist: "Artist 3", album: "Album 3", duration: "3:15" },
    { id: 4, title: "Song 4", artist: "Artist 4", album: "Album 1", duration: "5:10" },
    { id: 5, title: "Song 5", artist: "Artist 5", album: "Album 2", duration: "3:55" },
    { id: 6, title: "Song 6", artist: "Artist 6", album: "Album 3", duration: "4:30" },
    { id: 7, title: "Song 7", artist: "Artist 7", album: "Album 4", duration: "3:40" },
    { id: 8, title: "Song 8", artist: "Artist 8", album: "Album 5", duration: "4:15" }
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Playlist header */}
        <div className="flex flex-col md:flex-row items-center md:items-end mb-12">
          <div className="mb-6 md:mb-0 md:mr-8">
            <img 
              src={playlist.cover} 
              alt={playlist.title} 
              className="w-64 h-64 rounded-md shadow-2xl"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">PLAYLIST</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">{playlist.title}</h1>
            <p className="text-gray-300 mb-2">{playlist.description}</p>
            <p className="text-gray-400 text-sm">
              Made for {playlist.owner} • {songs.length} songs
            </p>
          </div>
        </div>

        {/* Play button and like button */}
        <div className="flex items-center mb-8">
          <button className="bg-green-500 text-black rounded-full p-4 hover:bg-green-400 transition mr-6">
            <svg
              className="w-8 h-8"
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
          
          <button className="text-4xl hover:text-green-500 transition">
            ♡
          </button>
        </div>

        {/* Songs list */}
        <div className="bg-gray-900 bg-opacity-30 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 px-4 py-2 text-gray-400 text-sm border-b border-gray-800">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TITLE</div>
            <div className="col-span-4">ALBUM</div>
            <div className="col-span-2 text-right">DURATION</div>
          </div>
          
          <div className="divide-y divide-gray-800">
            {songs.map((song, index) => (
              <div key={song.id} className="grid grid-cols-12 px-4 py-2 hover:bg-gray-800 hover:bg-opacity-50 group">
                <div className="col-span-1 flex items-center">
                  <span className="group-hover:hidden">{index + 1}</span>
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
    </div>
  );
};

export default Playlist;