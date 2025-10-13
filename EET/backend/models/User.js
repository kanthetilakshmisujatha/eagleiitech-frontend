// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String
// });

// module.exports = mongoose.model('User', userSchema);
// Updated: models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  refreshToken: { type: String, default: null }, // Added for token rotation
  profilePic: { type: String, default: 'https://placehold.co/50x50?text=User&font=roboto' }, // New: Profile image URL
  bio: { type: String, default: '' }, // New: Bio field
}, { timestamps: true }); // Add timestamps for created/updated

module.exports = mongoose.model('User', userSchema);