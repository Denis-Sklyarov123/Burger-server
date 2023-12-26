import { Router } from 'express';
import * as CategoriesController from '../controllers/Categories';

const routes = Router();

routes.get('/', CategoriesController.getCategories);

export default routes;
