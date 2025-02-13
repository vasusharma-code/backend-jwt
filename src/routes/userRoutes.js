const express = require('express');
const UserController = require('../controllers/userController');
const { validateRegistration, validateLogin } = require('../utils/validation');
const { verifyToken } = require('../middlewares/auth');

const router = express.Router();
const userController = new UserController();

// User registration endpoint
router.post('/register', validateRegistration, userController.registerUser);

// User login endpoint
router.post('/login', validateLogin, userController.loginUser);

// Search user endpoint
router.get('/search', verifyToken, userController.searchUser);

module.exports = router;