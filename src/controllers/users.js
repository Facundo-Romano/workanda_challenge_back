import handleErrorResponse from "../functions/handleErrorResponse.js";
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
			handleErrorResponse(err, res);
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
			handleErrorResponse(err, res);
		}
	},
	delete: async function (req, res) {
		try {
			const { id } = req.params;

			await usersService.delete(id);

			return res.status(200).json({
				success: true,
				id,
			});
		} catch (err) {
			handleErrorResponse(err, res);
		}
	}
};

export default usersController;
