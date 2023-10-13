import usersRepository from "../repository/users.js";
import validateEmail from '../functions/validations/validateEmail.js';
import validateId from '../functions/validations/validateId.js';
import throwError from "../functions/throwError.js";

const usersService = {
    getAll: async () => {
		const users = await usersRepository.getAll();

        const filteredUsers = users.map((user) => {
            return {
                id: user.id,
                email: user.email
            }
        });

        return filteredUsers;
    },
    update: async (id, email) => {
        validateId(id);
        validateEmail(email);

        const user = await usersRepository.getById(id);

        if (!user) throwError('User not found', 404);

        if (user.email === email) throwError('Email already in use', 400);

        await usersRepository.update(user, email);
    },
    delete: async (id, tokenUser) => {
        validateId(id);

        const user = await usersRepository.getById(id);

        if (!user) throwError('User not found', 404);
        
        await usersRepository.delete(user);

        return id == tokenUser.id;
    }
};

export default usersService;