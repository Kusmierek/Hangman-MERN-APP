import express from 'express';
import {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.post('/new', createCategory);
categoryRouter.get('/:catid', getOneCategory);
categoryRouter.put('/:catid', updateCategory);
categoryRouter.delete('/:catid', deleteCategory);

export default categoryRouter;
