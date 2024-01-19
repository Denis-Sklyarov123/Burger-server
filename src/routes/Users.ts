import { Router } from 'express';
import * as UsersController from '../controllers/Users';
import inputValidator from '../middlewares/input-validation';
import { param } from 'express-validator';

const loginValidation = param('login').isLength({ min: 3, max: 10 }).withMessage('Title length should be from 3 to 10');

const routes = Router();

// validations
routes.post('/create', loginValidation, inputValidator, UsersController.createUser);
routes.post('/login', UsersController.login);

export default routes;
