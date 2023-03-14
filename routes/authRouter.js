const express = require('express');
const AuthController = require('../controllers/AuthController');
const forgetPassword = require('../controllers/forgetPassword');

const router = express.Router();

// AUTHENTICATION
router.post('/signup', AuthController.signup);
// router.post('/login', AuthController.login);
// router.get('/logout', AuthController.logout);

router.post('/forgetPassword', forgetPassword);
// router.post('/resetPassword/:token', AuthController.resetPassword);
// router.patch('/updatePassword', AuthController.updatePassword);

module.exports = router;
