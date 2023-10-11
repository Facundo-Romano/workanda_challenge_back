import usersService from "../service/users.js";

const usersController = {
	getAll: async function (req, res) {
		try {
			const users = await usersService.getAll();

			return res.status(200).json({
				success: true,
				users
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

			await usersService.update(id, email);

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

			await usersService.delete(id);

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
