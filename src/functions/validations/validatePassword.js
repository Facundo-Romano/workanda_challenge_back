import throwError from "../throwError.js";

const validatePassword = (password) => {
    if (!password) throwError('Invalid password', 400);
};

export default validatePassword;