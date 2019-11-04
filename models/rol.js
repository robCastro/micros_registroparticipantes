/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rol', {
		idrol: {
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
		},
		idpermiso_fk: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'permiso',
				key: 'idpermiso'
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
		tableName: 'rol',
		timestamps: false
	});
};
