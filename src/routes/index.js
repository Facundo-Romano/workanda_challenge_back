import express from 'express';
const router = express.Router();

//Routes
import auth from './auth.js';
import users from './users.js';

//Prefixes
router.use('/auth', auth);
router.use('/users', users);

export default router;
