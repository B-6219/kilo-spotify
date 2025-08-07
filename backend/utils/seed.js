const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Song = require('../models/Song');
const Playlist = require('../models/Playlist');

// Load env vars
dotenv.config({ path: '../.env' });

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read JSON files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'));
const artists = JSON.parse(fs.readFileSync(`${__dirname}/_data/artists.json`, 'utf-8'));
const albums = JSON.parse(fs.readFileSync(`${__dirname}/_data/albums.json`, 'utf-8'));
const songs = JSON.parse(fs.readFileSync(`${__dirname}/_data/songs.json`, 'utf-8'));
const playlists = JSON.parse(fs.readFileSync(`${__dirname}/_data/playlists.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    await Artist.create(artists);
    await Album.create(albums);
    await Song.create(songs);
    await Playlist.create(playlists);
    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Artist.deleteMany();
    await Album.deleteMany();
    await Song.deleteMany();
    await Playlist.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}