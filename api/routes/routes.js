'use strict';

const express = require('express');
const RegistroController = require('../controllers/registroController');
const personaController = require('../controllers/personaController');
const router = express.Router();

router.get('/personas/', personaController.get_personas);




module.exports = router;
