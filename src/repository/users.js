import { users as UserModel } from '../database/config.js';

const usersRepository = {
    getById: async (id) => {
        return await UserModel.findOne({
            where: {
              id
            }
        });
    },
    getByEmail: async (email) => {
        return await UserModel.findOne({
            where: {
              email
            }
        });
    },
    getAll: async () => {
		return await UserModel.findAll();
    },
    create: async (email, password) => {
        return await UserModel.create({
            email,
            password,
            created_at: new Date(),
            updated_at: new Date()
        });
    },
    update: async (user, email, password) => {
        user.set({ 
            email: email ? email : user.email,
            password: password ? password : user.password
        });

        await user.save();
    },
    delete: async (user) => {
        await user.destroy();
    }
};

export default usersRepository