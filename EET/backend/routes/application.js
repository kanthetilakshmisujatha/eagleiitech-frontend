const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const router = express.Router();

// Multer config for file upload (uploads folder create chey project root lo)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder create chey if not exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Nodemailer transporter (Gmail use chestunna example; nuvvu email service change chey)
const transporter = nodemailer.createTransporter({
  service: 'gmail', // Or 'outlook', etc.
  auth: {
    user: 'your-email@gmail.com', // Admin email (env vars use chey production lo)
    pass: 'your-app-password', // Gmail app password (not regular password)
  },
});

// POST /api/applications
router.post('/applications', upload.single('cvResume'), async (req, res) => {
  try {
    const { fullName, email, phone, coverLetter, jobTitle } = req.body;
    const cvPath = req.file ? req.file.path : null; // File path

    // Email content
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender
      to: 'hr@eagleittech.com', // Admin email
      subject: `New Job Application: ${jobTitle}`,
      text: `
        New application received!

        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Job Title: ${jobTitle}
        Cover Letter: ${coverLetter}

        Resume attached.
      `,
      attachments: cvPath ? [{ path: cvPath }] : [], // Resume attach!
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Save to DB (MongoDB lo)
    // await Application.create({ fullName, email, phone, coverLetter, jobTitle, cvPath });

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

module.exports = router;