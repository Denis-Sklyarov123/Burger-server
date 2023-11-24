import { Router } from 'express';
import * as ProductsController from '../controllers/Products';

const routes = Router();

routes.get('/all', ProductsController.getAll);
routes.get('/byCategory', ProductsController.getByCategory);
routes.get('/byCategoryModal', ProductsController.getByCategoryModal);

export default routes;