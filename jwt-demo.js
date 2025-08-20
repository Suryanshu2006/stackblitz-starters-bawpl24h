// JWT Demo for Token Expiry
// Run: node jwt-demo.js

const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key'; // Use env variable in production
const payload = { userId: 123, username: 'testuser' };
const expiresIn = '10s'; // Token expires in 10 seconds

// Generate JWT
const token = jwt.sign(payload, SECRET_KEY, { expiresIn });
console.log('Generated Token:', token);

// Validate Token
setTimeout(() => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Token is valid:', decoded);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      console.log('Token has expired.');
    } else {
      console.log('Token is invalid:', err.message);
    }
  }
}, 12000); // Wait 12 seconds to ensure token expires
