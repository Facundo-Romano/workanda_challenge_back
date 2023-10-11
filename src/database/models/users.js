const users = (sequelize, DataTypes) => {
	const alias = 'user';

	const cols = {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
	};

	const config = {
		tableName: 'users',
	};

	const Users = sequelize.define(alias, cols, config);

	return Users;
};

export default users;
