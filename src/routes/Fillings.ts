import { Router } from 'express';
import * as FillingsController from '../controllers/Fillings';

const routes = Router();

routes.get('/byCategory', FillingsController.getFillings);

export default routes;
