const express = require('express');
const {
  getArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist
} = require('../controllers/artists');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getArtists)
  .post(protect, authorize('admin'), createArtist);

router
  .route('/:id')
  .get(getArtist)
  .put(protect, authorize('admin'), updateArtist)
  .delete(protect, authorize('admin'), deleteArtist);

module.exports = router;