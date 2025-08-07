const Song = require('../models/Song');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all songs
// @route   GET /api/v1/songs
// @access  Public
exports.getSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().populate('artist album');

    res.status(200).json({
      success: true,
      count: songs.length,
      data: songs
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single song
// @route   GET /api/v1/songs/:id
// @access  Public
exports.getSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id).populate('artist album');

    if (!song) {
      return next(
        new ErrorResponse(`Song not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: song
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new song
// @route   POST /api/v1/songs
// @access  Private
exports.createSong = async (req, res, next) => {
  try {
    const song = await Song.create(req.body);

    res.status(201).json({
      success: true,
      data: song
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update song
// @route   PUT /api/v1/songs/:id
// @access  Private
exports.updateSong = async (req, res, next) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!song) {
      return next(
        new ErrorResponse(`Song not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: song
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete song
// @route   DELETE /api/v1/songs/:id
// @access  Private
exports.deleteSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return next(
        new ErrorResponse(`Song not found with id of ${req.params.id}`, 404)
      );
    }

    await song.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Stream song
// @route   GET /api/v1/songs/:id/stream
// @access  Public
exports.streamSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return next(
        new ErrorResponse(`Song not found with id of ${req.params.id}`, 404)
      );
    }

    // In a real implementation, you would stream the actual audio file
    // For now, we'll just return the file path
    res.status(200).json({
      success: true,
      data: {
        filePath: song.filePath
      }
    });
  } catch (err) {
    next(err);
  }
};