const express = require('express');
const signupRoute = express.Router();
const { saveUser } = require('../controllers/SignupController');

// Ensure that the saveUser function is correctly passed
signupRoute.post('/', saveUser);

module.exports = signupRoute;
