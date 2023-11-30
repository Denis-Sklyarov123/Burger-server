import { Router } from 'express';
import ProductsRoutes from './Products';
import UsersRoutes from './Users';
import FillingsRoutes from './Fillings';
import MenuRoutes from './Menu';

const routes = Router();

routes.use('/products', ProductsRoutes);
routes.use('/fillings', FillingsRoutes);
routes.use('/menu', MenuRoutes);
routes.use('/user', UsersRoutes);

export default routes;
