import handleErrorResponse from "../functions/handleErrorResponse.js";
import authService from "../service/auth.js";

const authController = {
	register: async function (req, res) {
		try {
			const { email, password } = req.body;
			
			const token = await authService.register(email, password);

			return res.status(200).json({
				success: true,
				token
			});
		} catch (err) {
			handleErrorResponse(err, res);
		}
	},
	login: async function (req, res) {
		try {
			const { email, password } = req.body;

			const token = await authService.login(email, password);

			return res.status(200).json({
				success: true,
				token
			});
		} catch (err) {
			handleErrorResponse(err, res);
		}
	}
};

export default authController;
