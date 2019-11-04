/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permiso', {
		idpermiso: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false
		},
		descripcion: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'permiso',
		timestamps: false
	});
};
