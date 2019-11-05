/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('persona', {
		id_persona: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombres_persona: {
			type: DataTypes.STRING,
			allowNull: false
		},
		apellidos_persona: {
			type: DataTypes.STRING,
			allowNull: false
		},
		carnet_organizacion_persona: {
			type: DataTypes.STRING,
			allowNull: false
		},
		fecha_nacimiento_persona: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		correo_persona: {
			type: DataTypes.STRING,
			allowNull: false
		},
		contrasenia_persona: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'persona',
		timestamps: false
	});
};
