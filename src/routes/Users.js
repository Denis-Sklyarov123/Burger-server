import { Router } from "express";
import * as UsersController from "../controllers/Users.js";

const routes = Router();

routes.get("/create", UsersController.createUser);

export default routes;
