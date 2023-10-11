import bcrypt from 'bcrypt';
import { users } from '../database/config.js';

const authController = {
	register: async function (req, res) {
		try {
			const { email, password } = req.body;

			const user = usersRepository.createEntity({
				email,
				password,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			});

			const id = await usersRepository.save(user);

			return res.status(200).json({
				success: true,
				id,
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
