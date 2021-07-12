const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//POST /signin => Sign in a user.
router.post('/signin', authController.signIn);

//POST /login => Login a user.
router.post('/login',authController.logIn);

module.exports = router;