import { Router } from 'express';
import ProductsRoutes from './Products';
import UsersRoutes from './Users';
import FillingsRoutes from './Fillings';
import CategoriesRoutes from './Categories';

const routes = Router();

routes.use('/products', ProductsRoutes);
routes.use('/fillings', FillingsRoutes);
routes.use('/categories', CategoriesRoutes);
routes.use('/user', UsersRoutes);

export default routes;
