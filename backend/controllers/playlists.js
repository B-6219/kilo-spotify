const Playlist = require('../models/Playlist');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all playlists
// @route   GET /api/v1/playlists
// @access  Public
exports.getPlaylists = async (req, res, next) => {
  try {
    const playlists = await Playlist.find({ isPublic: true }).populate('user songs');

    res.status(200).json({
      success: true,
      count: playlists.length,
      data: playlists
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single playlist
// @route   GET /api/v1/playlists/:id
// @access  Public
exports.getPlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('user songs');

    if (!playlist) {
      return next(
        new ErrorResponse(`Playlist not found with id of ${req.params.id}`, 404)
      );
    }

    // If playlist is private, only owner can access it
    if (!playlist.isPublic && playlist.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to access this playlist`, 401)
      );
    }

    res.status(200).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new playlist
// @route   POST /api/v1/playlists
// @access  Private
exports.createPlaylist = async (req, res, next) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const playlist = await Playlist.create(req.body);

    res.status(201).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update playlist
// @route   PUT /api/v1/playlists/:id
// @access  Private
exports.updatePlaylist = async (req, res, next) => {
  try {
    let playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return next(
        new ErrorResponse(`Playlist not found with id of ${req.params.id}`, 404)
      );
    }

    // Make sure user is playlist owner
    if (playlist.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to update this playlist`, 401)
      );
    }

    playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete playlist
// @route   DELETE /api/v1/playlists/:id
// @access  Private
exports.deletePlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return next(
        new ErrorResponse(`Playlist not found with id of ${req.params.id}`, 404)
      );
    }

    // Make sure user is playlist owner
    if (playlist.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to delete this playlist`, 401)
      );
    }

    await playlist.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Add song to playlist
// @route   PUT /api/v1/playlists/:id/songs/:songId
// @access  Private
exports.addSongToPlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return next(
        new ErrorResponse(`Playlist not found with id of ${req.params.id}`, 404)
      );
    }

    // Make sure user is playlist owner
    if (playlist.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to update this playlist`, 401)
      );
    }

    // Check if song is already in playlist
    if (playlist.songs.includes(req.params.songId)) {
      return next(
        new ErrorResponse(`Song already in playlist`, 400)
      );
    }

    // Add song to playlist
    playlist.songs.push(req.params.songId);

    await playlist.save();

    res.status(200).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Remove song from playlist
// @route   DELETE /api/v1/playlists/:id/songs/:songId
// @access  Private
exports.removeSongFromPlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return next(
        new ErrorResponse(`Playlist not found with id of ${req.params.id}`, 404)
      );
    }

    // Make sure user is playlist owner
    if (playlist.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to update this playlist`, 401)
      );
    }

    // Check if song is in playlist
    if (!playlist.songs.includes(req.params.songId)) {
      return next(
        new ErrorResponse(`Song not in playlist`, 400)
      );
    }

    // Remove song from playlist
    playlist.songs = playlist.songs.filter(
      song => song.toString() !== req.params.songId
    );

    await playlist.save();

    res.status(200).json({
      success: true,
      data: playlist
    });
  } catch (err) {
    next(err);
  }
};