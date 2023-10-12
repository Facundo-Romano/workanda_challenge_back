import express from 'express';
import validateToken from '../middleware/validateToken.js';

const router = express.Router();

//Routes
import auth from './auth.js';
import users from './users.js';

//Prefixes
router.use('/auth', auth);
router.use('/users', validateToken, users);

export default router;
