/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nivel', {
		id_nivel: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_padre: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'nivel',
				key: 'id_nivel'
			}
		},
		nombre_nivel: {
			type: DataTypes.STRING,
			allowNull: false
		},
		descripcion_nivel: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'nivel',
		timestamps: false
	});
};
