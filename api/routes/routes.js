'use strict';

const express = require('express');
const RegistroController = require('../controllers/registroController');
const personaController = require('../controllers/personaController');
const router = express.Router();

router.get('/personas/', personaController.get_personas);
router.get('/personas/:id', personaController.get_persona);



module.exports = router;
