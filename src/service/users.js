import { users as UserModel } from '../database/config.js';

const usersService = {
    getAll: async () => {
		const users = await UserModel.findAll();

        const filteredUsers = users.map((user) => {
            return {
                id: user.id,
                email: user.email
            }
        });

        return filteredUsers;
    },
    update: async (id, email) => {
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
    },
    delete: async (id) => {
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
    }
};

export default usersService;