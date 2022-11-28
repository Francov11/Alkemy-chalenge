require('dotenv').config();
const express = require('express');
const router = express.Router();
const Controllers = require('../crontollers/characters')
const Middlewares = require('../middlewares/characters')

router.get('/allCharacters', Controllers.allCharacters)

router.post('/createCharacter', Controllers.createCharacter)

//router.put('/updateCharacter', Controllers.)

router.delete('/deleteCharacter', Controllers.deleteCharacter)

module.exports = router;