require('dotenv').config();
const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/users');
//const Middlewares = require('../middlewares/auth')


//User register route 
router.get('/allUsers', Controllers.allUsers)


module.exports = router;