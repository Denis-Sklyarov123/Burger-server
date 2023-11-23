import { Router } from 'express';
import ProductsRoutes from './Products';
import UsersRoutes from './Users';

const routes = Router();

routes.use('/products', ProductsRoutes);
routes.use('/user', UsersRoutes);

export default routes;
