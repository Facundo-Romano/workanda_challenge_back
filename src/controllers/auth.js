import bcrypt from 'bcrypt';
import { users } from '../database/config.js';

const authController = {
	register: async function (req, res) {
		try {
			const { email, password } = req.body;
			const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if (!emailValidationRegex.test(email)) {
				const error = new Error('Invalid email');
				error.status = 400;
				throw error;
			};

			const existingUser = await users.findOne({
				where: {
				  email
				},
			});

			if (existingUser) {
				const error = new Error('Email already in use');
				error.status = 400;
				throw error;
			};

			const hashedPassword = await bcrypt.hash(password, 10);

			const user = await users.create({
				email,
				password: hashedPassword,
				created_at: new Date(),
				updated_at: new Date()
			});

			return res.status(200).json({
				success: true,
				userId: user.id
			});
		} catch (err) {
			const { status, message } = err;

			return res.status(status || 500).json({
				success: false,
				message,
			});
		}
	},
	login: async function (req, res) {
		try {
			const { email, password } = req.body;

			const user = await users.findOne({
				where: {
				  email
				},
			});

			if (!user) {
				const error = new Error('User nor found');
				error.status = 404;
				throw error;
			};

			const passwordIsValid = await bcrypt.compare(password, user.password);

			if (!passwordIsValid) {
				const error = new Error('Incorrect password');
				error.status = 401;
				throw error;
			};

			return res.status(200).json({
				success: true,
				userId: user.id
			});
		} catch (err) {
			const { status, message } = err;

			return res.status(status || 500).json({
				success: false,
				message,
			});
		}
	}
};

export default authController;
