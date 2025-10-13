// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
// const sendOTP = require('../utils/sendOtp');

// let otpMemoryStore = {}; // Don't restart server after sending OTP

// exports.signup = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ error: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();
//     res.json({ message: 'Signup successful' });
//   } catch (err) {
//     res.status(500).json({ error: 'Signup failed' });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(404).json({ error: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ error: 'Invalid credentials' });

//     res.json({ message: 'Login successful' });
//   } catch (err) {
//     res.status(500).json({ error: 'Login error' });
//   }
// };

// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

//   otpMemoryStore[email] = { otp, expiresAt, isVerified: false };

//   try {
//     await sendOTP(email, otp);
//     console.log(`OTP for ${email}:`, otp);
//     res.json({ message: 'OTP sent to your email.' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to send OTP' });
//   }
// };

// exports.verifyOtp = (req, res) => {
//   const { email, otp } = req.body;
//   const record = otpMemoryStore[email];

//   if (!record) {
//     return res.status(400).json({ error: 'OTP not found. Please try again.' });
//   }

//   if (Date.now() > record.expiresAt) {
//     delete otpMemoryStore[email];
//     return res.status(400).json({ error: 'OTP expired' });
//   }

//   if (record.otp.toString() === otp) {
//     otpMemoryStore[email].isVerified = true;
//     return res.json({ status: 'verified', message: 'OTP verified successfully' });
//   }

//   res.status(400).json({ error: 'Invalid OTP' });
// };

// exports.resetPassword = async (req, res) => {
//   const { email, newPassword, confirmPassword } = req.body;
//   const record = otpMemoryStore[email];

//   if (!record || !record.isVerified) {
//     return res.status(400).json({ error: 'OTP not verified or expired' });
//   }

//   if (newPassword !== confirmPassword) {
//     return res.status(400).json({ error: 'Passwords do not match' });
//   }

//   try {
//     const hashed = await bcrypt.hash(newPassword, 10);
//     await User.findOneAndUpdate({ email }, { password: hashed });
//     delete otpMemoryStore[email];
//     res.json({ message: 'Password reset successful' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to reset password' });
//   }
// };
// Updated: controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const cloudinary = require('cloudinary').v2; // For profile image upload
const sendOTP = require('../utils/sendOtp');
const Joi = require('joi');

let otpMemoryStore = {}; // Don't restart server after sending OTP

// Validation Schemas with Joi
const signupValidation = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 characters',
    'string.max': 'Name must not exceed 50 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Valid email is required',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).max(100).required().messages({
    'string.min': 'Password must be at least 6 characters',
    'string.max': 'Password must not exceed 100 characters',
    'any.required': 'Password is required',
  }),
}).unknown(true);

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Valid email is required',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
});

const forgotPasswordValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Valid email is required',
    'any.required': 'Email is required',
  }),
});

const verifyOtpValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Valid email is required',
    'any.required': 'Email is required',
  }),
  otp: Joi.string().length(6).required().messages({
    'string.length': 'OTP must be 6 digits',
    'any.required': 'OTP is required',
  }),
});

const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Valid email is required',
    'any.required': 'Email is required',
  }),
  newPassword: Joi.string().min(6).max(100).required().messages({
    'string.min': 'New password must be at least 6 characters',
    'string.max': 'New password must not exceed 100 characters',
    'any.required': 'New password is required',
  }),
  confirmPassword: Joi.string().min(6).max(100).required().messages({
    'string.min': 'Confirm password must be at least 6 characters',
    'string.max': 'Confirm password must not exceed 100 characters',
    'any.required': 'Confirm password is required',
  }),
});

exports.signup = async (req, res) => {
  // Validate input
  const { error } = signupValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate tokens after signup (same as login)
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ 
      message: 'Signup successful', 
      accessToken,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Signup failed' });
  }
};

exports.login = async (req, res) => {
  // Validate input
  const { error } = loginValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Invalid credentials' });

    // Generate short-lived access token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' } // Production: Short expiry for access token
    );

    // Generate long-lived refresh token for rotation
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' } // Longer for refresh
    );

    // Store refresh token in DB for validation/revocation
    user.refreshToken = refreshToken;
    await user.save();

    // Send access token in response body (store in localStorage/memory on frontend)
    // Set refresh token as httpOnly cookie for security (can't be accessed via JS)
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true, // Prevents XSS access
      secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
      sameSite: 'strict', // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({ 
      message: 'Login successful', 
      accessToken,
      user: { id: user._id, name: user.name, email: user.email } // Optional: Send user info
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login error' });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken; // From httpOnly cookie
    if (!refreshToken) {
      return res.status(401).json({ error: 'No refresh token provided' });
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ error: 'Invalid refresh token' });
    }

    // Rotate: Generate new access and new refresh tokens
    const newAccessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const newRefreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    // Update DB with new refresh token (invalidate old)
    user.refreshToken = newRefreshToken;
    await user.save();

    // Set new refresh token cookie
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    // Send new access token in body
    res.json({ 
      message: 'Token refreshed successfully', 
      accessToken: newAccessToken,
      user: { id: user._id, name: user.name, email: user.email } // Add user info
    });
  } catch (err) {
    // Invalidate on error (e.g., expired refresh)
    res.clearCookie('refreshToken');
    res.status(403).json({ error: 'Refresh token invalid or expired' });
  }
};

exports.logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const user = await User.findById(decoded.userId);
      if (user && user.refreshToken === refreshToken) {
        user.refreshToken = null;
        await user.save();
      }
    }
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({ error: 'Logout failed' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password -refreshToken');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: { 
      id: user._id, 
      name: user.name, 
      email: user.email, 
      profilePic: user.profilePic || 'https://placehold.co/50x50?text=User&font=roboto',
      bio: user.bio || ''
    } });
  } catch (err) {
    console.error('Get profile error:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    console.log('updateProfile called with payload:', req.body); // Debug log
    const { name, bio, profilePicBase64 } = req.body;
    const userId = req.userId; // From auth middleware

    // Validate input
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters long' });
    }
    if (bio && bio.length > 500) {
      return res.status(400).json({ error: 'Bio must be under 500 characters' });
    }

    const updateData = {
      name: name.trim(),
      bio: bio || '',
    };

    // Handle profilePic upload if provided
    if (profilePicBase64 && profilePicBase64.startsWith('data:image')) {
      try {
        console.log('Starting Cloudinary upload...'); // Debug
        const base64Data = profilePicBase64.replace(/^data:image\/[a-zA-Z0-9]+;base64,/, '');
        const mimeMatch = profilePicBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
        const mimeType = mimeMatch ? `image/${mimeMatch[1]}` : 'image/jpeg';

        const uploadResult = await cloudinary.uploader.upload(
          `data:${mimeType};base64,${base64Data}`,
          {
            folder: 'eagleiitech_profiles',
            transformation: [
              { width: 200, height: 200, crop: 'fill', gravity: 'face' },
              { quality: 'auto' }
            ],
            overwrite: true
          }
        );

        console.log('Cloudinary upload success:', uploadResult.secure_url); // Debug
        updateData.profilePic = uploadResult.secure_url;
      } catch (uploadErr) {
        console.error('Cloudinary upload error:', uploadErr); // Log specific error
        return res.status(500).json({ error: 'Failed to upload profile image. Please try again.' });
      }
    }

    console.log('Updating user with data:', updateData); // Debug
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password -refreshToken');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User updated successfully:', updatedUser.name); // Debug
    res.json({ 
      message: 'Profile updated successfully', 
      user: { 
        id: updatedUser._id, 
        name: updatedUser.name, 
        email: updatedUser.email, 
        profilePic: updatedUser.profilePic, 
        bio: updatedUser.bio 
      } 
    });
  } catch (err) {
    console.error('Update profile error (outer catch):', err); // Detailed logging
    res.status(500).json({ error: 'Failed to update profile. Please check server logs.' });
  }
};

exports.forgotPassword = async (req, res) => {
  // Validate input
  const { error } = forgotPasswordValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

  otpMemoryStore[email] = { otp, expiresAt, isVerified: false };

  try {
    await sendOTP(email, otp);
    console.log(`OTP for ${email}:`, otp);
    res.json({ message: 'OTP sent to your email.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
};

exports.verifyOtp = (req, res) => {
  // Validate input
  const { error } = verifyOtpValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, otp } = req.body;
  const record = otpMemoryStore[email];

  if (!record) {
    return res.status(400).json({ error: 'OTP not found. Please try again.' });
  }

  if (Date.now() > record.expiresAt) {
    delete otpMemoryStore[email];
    return res.status(400).json({ error: 'OTP expired' });
  }

  if (record.otp.toString() === otp) {
    otpMemoryStore[email].isVerified = true;
    return res.json({ status: 'verified', message: 'OTP verified successfully' });
  }

  res.status(400).json({ error: 'Invalid OTP' });
};

exports.resetPassword = async (req, res) => {
  // Validate input
  const { error } = resetPasswordValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, newPassword, confirmPassword } = req.body;
  const record = otpMemoryStore[email];

  if (!record || !record.isVerified) {
    return res.status(400).json({ error: 'OTP not verified or expired' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ email }, { password: hashed });
    delete otpMemoryStore[email];
    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ error: 'Failed to reset password' });
  }
};