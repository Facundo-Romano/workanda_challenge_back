import express from 'express';
const router = express.Router();
import controller from '../controllers/users.js';

//GET
router.get('/getAll', controller.getAll);

//PATCH
router.patch('/update', controller.update);

//DELETE
router.delete('/delete/:id', controller.delete);

export default router;
