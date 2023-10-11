const users = (sequelize, DataTypes) => {
	const alias = 'user';

	const cols = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
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
		timestamps: true, 
		createdAt: 'created_at', 
		updatedAt: 'updated_at'
	};

	const Users = sequelize.define(alias, cols, config);

	return Users;
};

export default users;
