# Spotify Clone Backend

This is the backend API for the Spotify Clone application built with Node.js, Express, and MongoDB.

## Table of Contents

1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [Seeding Data](#seeding-data)
6. [Folder Structure](#folder-structure)

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/spotifyclone
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Running the Application

```bash
# Run in development mode
npm run dev

# Run in production mode
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | /api/v1/auth/register | Register a new user |
| POST   | /api/v1/auth/login    | Login user          |
| GET    | /api/v1/auth/logout   | Logout user         |
| GET    | /api/v1/auth/me       | Get current user    |

### Users

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/users/profile | Get user profile   |
| PUT    | /api/v1/users/profile | Update user profile|
| PUT    | /api/v1/users/password | Update password   |
| GET    | /api/v1/users     | Get all users (Admin)|
| POST   | /api/v1/users     | Create user (Admin)  |
| GET    | /api/v1/users/:id | Get user by ID (Admin)|
| PUT    | /api/v1/users/:id | Update user (Admin)  |
| DELETE | /api/v1/users/:id | Delete user (Admin)  |

### Artists

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/artists   | Get all artists      |
| POST   | /api/v1/artists   | Create artist (Admin)|
| GET    | /api/v1/artists/:id | Get artist by ID   |
| PUT    | /api/v1/artists/:id | Update artist (Admin)|
| DELETE | /api/v1/artists/:id | Delete artist (Admin)|

### Albums

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/albums    | Get all albums       |
| POST   | /api/v1/albums    | Create album (Admin/Artist)|
| GET    | /api/v1/albums/:id | Get album by ID     |
| PUT    | /api/v1/albums/:id | Update album (Admin/Artist)|
| DELETE | /api/v1/albums/:id | Delete album (Admin/Artist)|

### Songs

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/songs     | Get all songs        |
| POST   | /api/v1/songs     | Create song (Admin/Artist)|
| GET    | /api/v1/songs/:id | Get song by ID       |
| PUT    | /api/v1/songs/:id | Update song (Admin/Artist)|
| DELETE | /api/v1/songs/:id | Delete song (Admin/Artist)|
| GET    | /api/v1/songs/:id/stream | Stream song     |

### Playlists

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/playlists | Get all public playlists|
| POST   | /api/v1/playlists | Create playlist      |
| GET    | /api/v1/playlists/:id | Get playlist by ID |
| PUT    | /api/v1/playlists/:id | Update playlist    |
| DELETE | /api/v1/playlists/:id | Delete playlist    |
| PUT    | /api/v1/playlists/:id/songs/:songId | Add song to playlist|
| DELETE | /api/v1/playlists/:id/songs/:songId | Remove song from playlist|

### Likes

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/likes/songs | Get user's liked songs|
| POST   | /api/v1/likes/songs/:id | Like a song     |
| DELETE | /api/v1/likes/songs/:id | Unlike a song   |
| GET    | /api/v1/likes/playlists | Get user's liked playlists|
| POST   | /api/v1/likes/playlists/:id | Like a playlist|
| DELETE | /api/v1/likes/playlists/:id | Unlike a playlist|

### Search

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/search?q=query | Search artists, albums, songs, and playlists|

### OAuth

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/v1/oauth/google | Google OAuth login |
| GET    | /api/v1/oauth/google/callback | Google OAuth callback|

## Seeding Data

To seed the database with mock data:

```bash
# Import data
npm run seed:import

# Destroy data
npm run seed:destroy
```

## Folder Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── auth.js
│   ├── artists.js
│   ├── albums.js
│   ├── songs.js
│   ├── playlists.js
│   ├── search.js
│   ├── likes.js
│   ├── users.js
│   └── oauth.js
├── middleware/
│   ├── auth.js
│   ├── error.js
│   └── upload.js
├── models/
│   ├── User.js
│   ├── Artist.js
│   ├── Album.js
│   ├── Song.js
│   └── Playlist.js
├── routes/
│   ├── auth.js
│   ├── artists.js
│   ├── albums.js
│   ├── songs.js
│   ├── playlists.js
│   ├── search.js
│   ├── likes.js
│   ├── users.js
│   └── oauth.js
├── utils/
│   ├── errorResponse.js
│   ├── seed.js
│   └── _data/
│       ├── users.json
│       ├── artists.json
│       ├── albums.json
│       ├── songs.json
│       └── playlists.json
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js