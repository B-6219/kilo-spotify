const Song = require('../models/Song');
const Playlist = require('../models/Playlist');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Like a song
// @route   POST /api/v1/likes/songs/:id
// @access  Private
exports.likeSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return next(new ErrorResponse(`No song with id of ${req.params.id}`, 404));
    }

    // Check if user has already liked the song
    if (song.likes.includes(req.user.id)) {
      return next(new ErrorResponse('You have already liked this song', 400));
    }

    // Add user to likes array
    song.likes.push(req.user.id);
    await song.save();

    res.status(200).json({
      success: true,
      data: song
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Unlike a song
// @route   DELETE /api/v1/likes/songs/:id
// @access  Private
exports.unlikeSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return next(new ErrorResponse(`No song with id of ${req.params.id}`, 404));
    }

    // Check if user has liked the song
    if (!song.likes.includes(req.user.id)) {
      return next(new ErrorResponse('You have not liked this song', 400));
    }

    // Remove user from likes array
    song.likes = song.likes.filter(like => like.toString() !== req.user.id);
    await song.save();

    res.status(200).json({
      success: true,
      data: song
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get user's liked songs
// @route   GET /api/v1/likes/songs
// @access  Private
exports.getLikedSongs = async (req, res, next) => {
  try {
    const songs = await Song.find({ likes: req.user.id }).populate('artist album');

    res.status(200).json({
      success: true,
      count: songs.length,
      data: songs
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Like a playlist
// @route   POST /api/v1/likes/playlists/:id
// @access  Private
exports.likePlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return next(new ErrorResponse(`No playlist with id of ${req.params.id}`, 404));
    }

    // Check if user has already liked the playlist
    if (playlist.likes.includes(req.user.id)) {
      return next(new ErrorResponse('You have already liked this playlist', 400));
    }

    // Add user to likes array
    playlist.likes.push(req.user.id);
    await playlist.save();

    res.status(200).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Unlike a playlist
// @route   DELETE /api/v1/likes/playlists/:id
// @access  Private
exports.unlikePlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return next(new ErrorResponse(`No playlist with id of ${req.params.id}`, 404));
    }

    // Check if user has liked the playlist
    if (!playlist.likes.includes(req.user.id)) {
      return next(new ErrorResponse('You have not liked this playlist', 400));
    }

    // Remove user from likes array
    playlist.likes = playlist.likes.filter(like => like.toString() !== req.user.id);
    await playlist.save();

    res.status(200).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get user's liked playlists
// @route   GET /api/v1/likes/playlists
// @access  Private
exports.getLikedPlaylists = async (req, res, next) => {
  try {
    const playlists = await Playlist.find({ likes: req.user.id }).populate('user songs');

    res.status(200).json({
      success: true,
      count: playlists.length,
      data: playlists
    });
  } catch (err) {
    next(err);
  }
};