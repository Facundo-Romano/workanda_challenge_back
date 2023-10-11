import authService from "../service/auth.js";

const authController = {
	register: async function (req, res) {
		try {
			const { email, password } = req.body;
			
			const userId = await authService.register(email, password);

			return res.status(200).json({
				success: true,
				userId
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

			const userId = await authService.login(email, password);

			return res.status(200).json({
				success: true,
				userId
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
