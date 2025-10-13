const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User'); // Adjust path to your User model
const auth = require('../middleware/auth');

// Multer for profile pic uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/profiles/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// GET /api/auth/me - Get current user profile
router.get('/auth/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('username email role profilePic');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/users/profile - Update profile
router.put('/users/profile', auth, upload.single('profilePic'), async (req, res) => {
  try {
    const { username, email } = req.body;
    const updateData = { username, email };

    if (req.file) {
      updateData.profilePic = `/uploads/profiles/${req.file.filename}`;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { new: true }
    ).select('username email role profilePic');

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
});

module.exports = router;