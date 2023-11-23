import { Router } from 'express';
import * as UsersController from '../controllers/Users';

const routes = Router();

routes.post('/create', UsersController.createUser);

export default routes;
