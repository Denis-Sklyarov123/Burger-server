import { Router } from 'express';
import ProductsRoutes from './Products';
import UsersRoutes from './Users';
import FillingsRoutes from './Fillings';
import CategoriesRoutes from './Categories';

import authMiddleware from '../middlewares/auth';

const routes = Router();

// authMiddleware
routes.use('/products', ProductsRoutes);
routes.use('/fillings', authMiddleware, FillingsRoutes);
routes.use('/categories', CategoriesRoutes);
routes.use('/user', UsersRoutes);

export default routes;
