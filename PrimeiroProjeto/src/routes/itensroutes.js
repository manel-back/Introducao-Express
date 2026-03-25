import express from 'express';
import { getAllItens, createItem, updateItem, deleteItem } from '../controllers/itenscontroller.js';

const router = express.Router();

router.get('/', getAllItens);
router.post('/', createItem);
router.put('/', updateItem);
router.delete('/', deleteItem);

export default router;