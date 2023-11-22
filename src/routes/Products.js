import { Router } from "express";
import * as ProductsController from "../controllers/Products.js";

const routes = Router();

routes.get("/all", ProductsController.getAll);
routes.get("/add", ProductsController.save);

export default routes;
