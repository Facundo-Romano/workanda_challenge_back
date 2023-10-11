import { usersRepository } from '../database/models/index.js';

const usersController = {
	getAll: async function (req, res) {
		try {

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
	create: async function (req, res) {
		try {
			const { email, password } = req.body;

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
	update: async function (req, res) {
		try {
			const { email, password } = req.body;

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
	delete: async function (req, res) {
		try {
			const { email, password } = req.body;

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
