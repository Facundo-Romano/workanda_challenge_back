import throwError from "../throwError.js";

const validateEmail = (email) => {
    const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!emailValidationRegex.test(email)) throwError('Invalid email', 400);
};

export default validateEmail;
