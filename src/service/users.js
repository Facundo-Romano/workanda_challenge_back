import usersRepository from "../repository/users.js";

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
        if (!id || !isNumber(id)) {
            const error = new Error('Invalid id');
            error.status = 400;
            throw error;
        };

        const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailValidationRegex.test(email)) {
            const error = new Error('Invalid email');
            error.status = 400;
            throw error;
        };

        const user = await usersRepository.getById(id);

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        };

        if (user.email === email) {
            const error = new Error('Email already in use');
            error.status = 400;
            throw error;
        };

        await usersRepository.update(user, email);
    },
    delete: async (id, tokenUser) => {
        if (!id || !isNumber(id)) {
            const error = new Error('Invalid id');
            error.status = 400;
            throw error;
        };
        
        const user = await usersRepository.getById(id);

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        };
        
        await usersRepository.delete(user);

        return id == tokenUser.id;
    }
};

export default usersService;