'use strict';

const express = require('express');
const RegistroController = require('../controllers/registroController');
const router = express.Router();

router.get('/personas', RegistroController.listar_personas);


module.exports = router;
