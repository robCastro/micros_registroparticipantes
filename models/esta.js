/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('esta', {
		idesta: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		activo: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		idnivel_fk: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'nivel',
				key: 'idnivel'
			}
		},
		idpersona_fk: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'persona',
				key: 'idpersona'
			}
		}
	}, {
		tableName: 'esta',
		timestamps: false
	});
};
