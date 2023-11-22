import { Router } from "express";
import ProductsRoutes from "./Products.js";
import UsersRoutes from "./Users.js";

const routes = Router();

routes.use("/products", ProductsRoutes);
routes.use("/user", UsersRoutes);

export default routes;
