require('dotenv').config();
const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/auth');
const Middlewares = require('../middlewares/auth')


//User register route 
router.post('/auth/register', Middlewares.validateUser, Middlewares.charactersEmail,  Controllers.register)

//User Login route
router.post('/auth/login' ,Middlewares.validateLogin, Controllers.login);

module.exports = router;