const express = require('express');
const {
  likeSong,
  unlikeSong,
  getLikedSongs,
  likePlaylist,
  unlikePlaylist,
  getLikedPlaylists
} = require('../controllers/likes');

const router = express.Router();

const { protect } = require('../middleware/auth');

// Song likes
router.route('/songs').get(protect, getLikedSongs);
router.route('/songs/:id').post(protect, likeSong).delete(protect, unlikeSong);

// Playlist likes
router.route('/playlists').get(protect, getLikedPlaylists);
router.route('/playlists/:id').post(protect, likePlaylist).delete(protect, unlikePlaylist);

module.exports = router;