const express = require('express');
const {
  getPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist
} = require('../controllers/playlists');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(getPlaylists)
  .post(protect, createPlaylist);

router
  .route('/:id')
  .get(protect, getPlaylist)
  .put(protect, updatePlaylist)
  .delete(protect, deletePlaylist);

router
  .route('/:id/songs/:songId')
  .put(protect, addSongToPlaylist)
  .delete(protect, removeSongFromPlaylist);

module.exports = router;