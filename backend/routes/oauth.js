const express = require('express');
const { googleAuth, googleAuthCallback } = require('../controllers/oauth');

const router = express.Router();

router.route('/google').get(googleAuth);
router.route('/google/callback').get(googleAuthCallback);

module.exports = router;