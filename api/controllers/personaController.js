'use strict';
const models = require('../../models/index');
const Persona = models.persona;

exports.get_persona = function(req, res) {
	if(Number.isNaN(parseInt(req.params.id))){
		res.status(400).json({ msg: 'Utilizar parametros numericos'})
	}
	else{
		Persona.findOne({
			where:{id_persona: parseInt(req.params.id)}
		}).then(persona => {
			if(persona !== null){
				res.status(200).json(persona);
			}
			else{
				res.status(404).json({msg: "Persona no encontrada"});
			}
		}).catch(err => {
			res.status(500).json({msg: 'Error en consultar la existencia de persona'});
			console.log('Error en consultar la existencia de persona: '+ err);
		})
	}

}


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
			Persona.findOne({
				where:{carnet_organizacion_persona: req.query.carnet}
			}).then(persona => {
				res.status(200).json(persona);
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

