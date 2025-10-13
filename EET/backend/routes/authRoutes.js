// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.post('/forgot-password', authController.forgotPassword);
// router.post('/verify-otp', authController.verifyOtp);
// router.post('/reset-password', authController.resetPassword);

// module.exports = router;
// Updated: routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth'); // Import middleware

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/refresh', authController.refreshToken);
router.post('/logout', authController.logout);
router.get('/profile', auth, authController.getProfile);
router.put('/profile', auth, authController.updateProfile); // New: Protected update
router.post('/forgot-password', authController.forgotPassword);
router.post('/verify-otp', authController.verifyOtp);
router.post('/reset-password', authController.resetPassword);
router.get('/profile', (req, res) => res.json({ id: '1', name: 'Admin', email: 'admin@example.com', role: 'admin' }));
module.exports = router;