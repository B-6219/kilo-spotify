const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile,
  updatePassword
} = require('../controllers/users');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

// Profile routes
router.route('/profile').get(protect, getProfile).put(protect, updateProfile);
router.route('/password').put(protect, updatePassword);

// Admin routes
router
  .route('/')
  .get(protect, authorize('admin'), getUsers)
  .post(protect, authorize('admin'), createUser);

router
  .route('/:id')
  .get(protect, authorize('admin'), getUser)
  .put(protect, authorize('admin'), updateUser)
  .delete(protect, authorize('admin'), deleteUser);

module.exports = router;