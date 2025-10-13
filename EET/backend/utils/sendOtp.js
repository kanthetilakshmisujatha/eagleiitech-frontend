const nodemailer = require('nodemailer');
require('dotenv').config();

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    html: `<h2>Your OTP is: <strong>${otp}</strong></h2>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOTP;
