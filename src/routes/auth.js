import express from 'express';
const router = express.Router();
import controller from '../controllers/auth.js';

//POST
router.post('/register', controller.register);
router.post('/login', controller.login);

export default router;
