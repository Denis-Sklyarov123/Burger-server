import { Router } from 'express';
import * as ProductsController from '../controllers/Products';

const routes = Router();

routes.get('/byCategory', ProductsController.getByCategory);

export default routes;
