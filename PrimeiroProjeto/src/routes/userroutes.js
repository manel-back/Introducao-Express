import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/usercontroller.js';
import { deleteItem } from '../controllers/itenscontroller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router;