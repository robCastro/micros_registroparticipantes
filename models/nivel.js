/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nivel', {
		idnivel: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idnivel_fk: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'nivel',
				key: 'idnivel'
			}
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
		tableName: 'nivel',
		timestamps: false
	});
};
