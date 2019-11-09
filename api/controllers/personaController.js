'use strict';
const models = require('../../models/index');
const Persona = models.persona;


exports.get_personas = function(req, res) {
	if(Object.keys(req.query).length > 0){
		if (req.query.nombre){
			models.sequelize.query(
				`
				select * from persona
				where nombres_persona ilike '%${req.query.nombre}%'
				or apellidos_persona ilike '%${req.query.nombre}%';
				`,
				{ type: models.sequelize.QueryTypes.SELECT }
			).then(resultado_query => {
				res.status(200).json(resultado_query);
			}).catch(err => {
				console.log("Error consultando registro de personas: " + err);
				res.status(500).json({ msg: "Error consultando registro de personas" });
			});
		}
		else if(req.query.carnet){
			models.sequelize.query(
				`
				select * from persona
				where carnet_organizacion_persona = '${req.query.carnet}';
				`,
				{ type: models.sequelize.QueryTypes.SELECT }
			).then(resultado_query => {
				res.status(200).json(resultado_query);
			}).catch(err => {
				console.log("Error consultando registro de personas: " + err);
				res.status(500).json({ msg: "Error consultando registro de personas" });
			});
		}
		else{
			Persona.findAll()
			.then(personas => {
				res.status(200).json(personas);
			})
			.catch(err => {
				console.log('Error: ' + err);
				res.status(500).json({ msg: "Error al mostrar personas" });
			});
			}
	}
	else{
		Persona.findAll()
		.then(personas => {
			res.status(200).json(personas);
		})
		.catch(err => {
			console.log('Error: ' + err);
			res.status(500).json({ msg: "Error al mostrar personas" });
		});
	}
};

