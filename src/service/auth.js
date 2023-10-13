import bcrypt from 'bcrypt';
import usersRepository from '../repository/users.js';
import generateJwt from '../functions/generateJwt.js';
import validateEmail from '../functions/validations/validateEmail.js';
import validatePassword from '../functions/validations/validatePassword.js';
import throwError from '../functions/throwError.js';

const authService = {
    register: async (email, password) => {
        validateEmail(email);
        validatePassword(password);

        const user = await usersRepository.getByEmail(email);

        if (user) throwError('Email already in use', 400);

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await usersRepository.create(email, hashedPassword);

        const jwt = generateJwt({ id: newUser.id, email });

        return jwt;
    },
    login: async (email, password) => {
        const user = await usersRepository.getByEmail(email);

        if (!user) throwError('User not found', 404);

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) throwError('Incorrect password', 401);

        const jwt = generateJwt({ id: user.id, email });

        return jwt;
    }
};

export default authService;