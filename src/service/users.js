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
        const user = await usersRepository.getById(id);

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        };

        await usersRepository.update(user, email);
    },
    delete: async (id) => {
        const user = await usersRepository.getById(id);

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        };
        
        await usersRepository.delete(user);
    }
};

export default usersService;