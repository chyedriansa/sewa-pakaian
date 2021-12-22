import express from "express";
import { CustomerController } from "./controllers.js";

const routes = express.Router();

routes.get("/customers/", CustomerController.readAll);
routes.get("/customers/:id", CustomerController.readById);
routes.post("/customers/", CustomerController.save);
routes.delete("/customers/:id", CustomerController.delete);
routes.patch("/customers/:id", CustomerController.update);

export default routes;
