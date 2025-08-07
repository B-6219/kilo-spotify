const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Song = require('../models/Song');
const Playlist = require('../models/Playlist');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Search artists, albums, songs, and playlists
// @route   GET /api/v1/search
// @access  Public
exports.search = async (req, res, next) => {
  try {
    const query = req.query.q;

    if (!query) {
      return next(new ErrorResponse('Please provide a search query', 400));
    }

    // Search artists
    const artists = await Artist.find({
      name: { $regex: query, $options: 'i' }
    });

    // Search albums
    const albums = await Album.find({
      title: { $regex: query, $options: 'i' }
    }).populate('artist');

    // Search songs
    const songs = await Song.find({
      title: { $regex: query, $options: 'i' }
    }).populate('artist album');

    // Search playlists (only public ones)
    const playlists = await Playlist.find({
      name: { $regex: query, $options: 'i' },
      isPublic: true
    }).populate('user');

    res.status(200).json({
      success: true,
      data: {
        artists,
        albums,
        songs,
        playlists
      }
    });
  } catch (err) {
    next(err);
  }
};