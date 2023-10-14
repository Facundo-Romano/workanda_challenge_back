import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const secretKey = process.env.SECRET_KEY;

function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded;

    next();
  });
}

export default validateToken;