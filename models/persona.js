/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('persona', {
		idpersona: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombres: {
			type: DataTypes.STRING,
			allowNull: false
		},
		apellidos: {
			type: DataTypes.STRING,
			allowNull: false
		},
		carnetorganiacion: {
			type: DataTypes.STRING,
			allowNull: false
		},
		fechanacimiento: {
			type: DataTypes.DATE,
			allowNull: false
		},
		correo: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'persona',
		timestamps: false
	});
};
