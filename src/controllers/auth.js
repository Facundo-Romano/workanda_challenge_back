import bcrypt from 'bcrypt';
import { users } from '../database/config.js';

const authController = {
	register: async function (req, res) {
		try {
			const { email, password } = req.body;
			const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if (!emailValidationRegex.test(email)) throw new Error('Invalid email');

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
	}
};

export default authController;
