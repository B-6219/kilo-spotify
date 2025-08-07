const express = require('express');
const {
  getSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
  streamSong
} = require('../controllers/songs');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getSongs)
  .post(protect, authorize('admin', 'artist'), createSong);

router
  .route('/:id')
  .get(getSong)
  .put(protect, authorize('admin', 'artist'), updateSong)
  .delete(protect, authorize('admin', 'artist'), deleteSong);

router
  .route('/:id/stream')
  .get(streamSong);

module.exports = router;