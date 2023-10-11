import 'dotenv/config';
import { Sequelize } from 'sequelize';
import usersModel from './models/users.js';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: 'mysql',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		}
	}
});

const users = usersModel(sequelize, Sequelize.DataTypes);

users.sync()
.then(() => {
	console.log('Users model synced')
})
.catch((err) => {
	console.log('Error syncing Users model')
	throw new Error(err);
});

export default sequelize;