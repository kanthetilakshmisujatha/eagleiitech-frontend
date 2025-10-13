const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Try Bearer token first (from localStorage)
  let token = req.headers.authorization?.split(' ')[1];
  
  // Fallback to cookie if no Bearer (for refresh, but me uses accessToken)
  if (!token) {
    token = req.cookies.accessToken; // If you set accessToken as cookie too
  }

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Access token secret
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;