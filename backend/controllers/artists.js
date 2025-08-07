const Artist = require('../models/Artist');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all artists
// @route   GET /api/v1/artists
// @access  Public
exports.getArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find();

    res.status(200).json({
      success: true,
      count: artists.length,
      data: artists
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single artist
// @route   GET /api/v1/artists/:id
// @access  Public
exports.getArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return next(
        new ErrorResponse(`Artist not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: artist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new artist
// @route   POST /api/v1/artists
// @access  Private
exports.createArtist = async (req, res, next) => {
  try {
    const artist = await Artist.create(req.body);

    res.status(201).json({
      success: true,
      data: artist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update artist
// @route   PUT /api/v1/artists/:id
// @access  Private
exports.updateArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!artist) {
      return next(
        new ErrorResponse(`Artist not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: artist
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete artist
// @route   DELETE /api/v1/artists/:id
// @access  Private
exports.deleteArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return next(
        new ErrorResponse(`Artist not found with id of ${req.params.id}`, 404)
      );
    }

    await artist.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};