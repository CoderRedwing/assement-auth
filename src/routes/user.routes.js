const express = require('express');
const router = express.Router();
const { searchUser, getUserProfile } = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth.middleware');
router.get('/search', verifyToken, searchUser);
router.get('/profile', verifyToken, getUserProfile); 

module.exports = router;
