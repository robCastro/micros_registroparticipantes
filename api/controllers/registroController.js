'use strict';
const models = require('../../models/index');
const Persona = models.persona;


exports.listar_personas = function(req, res) {

  Persona.findAll()
    .then(personas => {
	res.status(200).json(personas);
    })
    .catch(err => {
	console.log('Error: ' + err);
	res.status(500).json({ msg: "Error al mostrar personas" });
    });
};
