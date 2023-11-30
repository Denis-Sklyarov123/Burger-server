import { Router } from 'express';
import * as MenuController from '../controllers/Menu';

const routes = Router();

routes.get('/', MenuController.getMenu);

export default routes;
