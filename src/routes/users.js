import express from 'express';
const router = express.Router();
import controller from '../controllers/users.js';

//GET
router.get('/getAll', controller.getAll);

//POST
router.post('/create', controller.create);

//PUT
router.post('/update', controller.update);

//DELETE
router.post('/delete', controller.delete);

export default router;
