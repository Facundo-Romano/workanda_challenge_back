import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;
const expiration = process.env.TOKEN_EXPIRATION;

const generateJwt = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: `${expiration}` });
};

export default generateJwt;