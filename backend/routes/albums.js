const express = require('express');
const {
  getAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum
} = require('../controllers/albums');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getAlbums)
  .post(protect, authorize('admin', 'artist'), createAlbum);

router
  .route('/:id')
  .get(getAlbum)
  .put(protect, authorize('admin', 'artist'), updateAlbum)
  .delete(protect, authorize('admin', 'artist'), deleteAlbum);

module.exports = router;