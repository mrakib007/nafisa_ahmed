const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require('../utils/tokenUtils');

const router = express.Router();

// Initialize admin user (run once)
const initializeAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      const adminUser = new User({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        name: process.env.ADMIN_NAME
      });
      await adminUser.save();
      console.log('Admin user created successfully');
    }
  } catch (error) {
    console.error('Error initializing admin user:', error);
  }
};

// Initialize admin on server start
initializeAdmin();

// Login (Admin only)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if it's the admin email
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Find admin user
    const user = await User.findOne({ email });
    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Save refresh token to user
    user.refreshTokens.push({ token: refreshToken });
    await user.save();

    res.json({
      message: 'Login successful',
      user,
      accessToken,
      refreshToken
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Refresh Token
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token required' });
    }

    // Verify refresh token
    const decoded = verifyRefreshToken(refreshToken);
    
    // Find user and check if refresh token exists
    const user = await User.findById(decoded.userId);
    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    const tokenExists = user.refreshTokens.some(tokenObj => tokenObj.token === refreshToken);
    if (!tokenExists) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    // Generate new access token
    const newAccessToken = generateAccessToken(user._id);

    res.json({
      message: 'Token refreshed successfully',
      accessToken: newAccessToken
    });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Refresh token expired' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
    res.status(500).json({ message: 'Server error during token refresh' });
  }
});

// Logout
router.post('/logout', auth, async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (refreshToken) {
      // Remove specific refresh token
      await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { refreshTokens: { token: refreshToken } } }
      );
    }

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during logout' });
  }
});

// Logout from all devices
router.post('/logout-all', auth, async (req, res) => {
  try {
    // Remove all refresh tokens
    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { refreshTokens: [] } }
    );

    res.json({ message: 'Logged out from all devices successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during logout' });
  }
});

// Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    res.json({
      message: 'User profile retrieved successfully',
      user: req.user
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving profile' });
  }
});

module.exports = router;