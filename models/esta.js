/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('esta', {
		id_esta: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_persona: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'persona',
				key: 'id_persona'
			}
		},
		id_nivel: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'nivel',
				key: 'id_nivel'
			}
		},
		activo_esta: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'esta',
		timestamps: false
	});
};
