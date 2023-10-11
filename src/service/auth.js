import bcrypt from 'bcrypt';
import usersRepository from '../repository/users.js';

const authService = {
    register: async (email, password) => {
        const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailValidationRegex.test(email)) {
            const error = new Error('Invalid email');
            error.status = 400;
            throw error;
        };

        const user = await usersRepository.getByEmail(email);

        if (user) {
            const error = new Error('Email already in use');
            error.status = 400;
            throw error;
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await usersRepository.create(email, hashedPassword);

        return newUser.id;
    },
    login: async (email, password) => {
        const user = await usersRepository.getByEmail(email);

        if (!user) {
            const error = new Error('User nor found');
            error.status = 404;
            throw error;
        };

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            const error = new Error('Incorrect password');
            error.status = 401;
            throw error;
        };

        return user.id;
    }
};

export default authService;