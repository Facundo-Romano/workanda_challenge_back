import { users as UserModel } from '../database/config.js';

const usersController = {
	getAll: async function (req, res) {
		try {
			const users = await UserModel.findAll();

			const filteredUsers = users.map((user) => {
				return {
					id: user.id,
					email: user.email
				}
			})

			return res.status(200).json({
				success: true,
				users: filteredUsers,
			});
		} catch (err) {
			const { status, message } = err;

			return res.status(status || 500).json({
				success: false,
				message,
			});
		}
	},
	update: async function (req, res) {
		try {
			const { id, email } = req.body;

			const user = await UserModel.findOne({
				where: {
				  id
				}
			});

			if (!user) {
				const error = new Error('User not found');
				error.status = 404;
				throw error;
			};

			user.set({ email });

			await user.save();

			return res.status(200).json({
				success: true,
				id
			});
		} catch (err) {
			const { status, message } = err;

			return res.status(status || 500).json({
				success: false,
				message,
			});
		}
	},
	delete: async function (req, res) {
		try {
			const { id } = req.body;

			const user = await UserModel.findOne({
				where: {
				  id
				}
			});

			if (!user) {
				const error = new Error('User not found');
				error.status = 404;
				throw error;
			};
			
			await user.destroy();

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
	}
};

export default usersController;
