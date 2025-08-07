import React from 'react';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const { id } = useParams();

  // Mock data for the artist
  const artist = {
    name: "Artist Name",
    followers: "12,345,678",
    monthlyListeners: "5,432,109",
    verified: true,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.",
    coverImage: "https://placehold.co/800x300",
    avatar: "https://placehold.co/200x200"
  };

  // Mock data for popular songs
  const popularSongs = [
    { id: 1, title: "Song 1", album: "Album 1", duration: "3:45" },
    { id: 2, title: "Song 2", album: "Album 2", duration: "4:20" },
    { id: 3, title: "Song 3", album: "Album 3", duration: "3:15" },
    { id: 4, title: "Song 4", album: "Album 1", duration: "5:10" },
    { id: 5, title: "Song 5", album: "Album 2", duration: "3:55" }
  ];

  // Mock data for albums
  const albums = [
    { id: 1, title: "Album 1", year: "2023", cover: "https://placehold.co/200x200" },
    { id: 2, title: "Album 2", year: "2022", cover: "https://placehold.co/200x200" },
    { id: 3, title: "Album 3", year: "2021", cover: "https://placehold.co/200x200" },
    { id: 4, title: "Album 4", year: "2020", cover: "https://placehold.co/200x200" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Artist header */}
      <div className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${artist.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-8">
          {artist.verified && (
            <div className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-4">
              Verified Artist
            </div>
          )}
          <h1 className="text-6xl font-bold">{artist.name}</h1>
          <p className="mt-4 text-gray-300">{artist.followers} followers</p>
        </div>
      </div>

      {/* Popular songs */}
      <div className="p-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular</h2>
          
          <div className="space-y-2">
            {popularSongs.map((song, index) => (
              <div key={song.id} className="flex items-center p-2 rounded hover:bg-gray-900 hover:bg-opacity-50 group">
                <div className="w-8 text-center mr-4">
                  <span className="text-gray-400 group-hover:hidden">{index + 1}</span>
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
                <div className="flex-1">
                  <div className="font-medium">{song.title}</div>
                  <div className="text-gray-400 text-sm">{song.album}</div>
                </div>
                <div className="text-gray-400 text-sm mr-4">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Albums */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Albums</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {albums.map((album) => (
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
                  {album.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist bio */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <p className="text-gray-300 max-w-3xl">{artist.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Artist;