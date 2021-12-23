import express from "express";
import {
  CustomerController,
  ItemController,
  TransactionController,
  TransactionDetailController,
  ReportController,
} from "./controllers.js";

const routes = express.Router();

routes.get("/customers/", CustomerController.readAll);
routes.get("/customers/:id", CustomerController.readById);
routes.post("/customers/", CustomerController.save);
routes.delete("/customers/:id", CustomerController.delete);
routes.patch("/customers/:id", CustomerController.update);

routes.get("/items/", ItemController.readAll);
routes.get("/items/:id", ItemController.readById);
routes.post("/items/", ItemController.save);
routes.delete("/items/:id", ItemController.delete);
routes.patch("/items/:id", ItemController.update);

routes.get("/transaction/", TransactionController.readAll);
routes.get("/transaction/:id", TransactionController.readById);
routes.post("/transaction/", TransactionController.save);
routes.delete("/transaction/:id", TransactionController.delete);
routes.patch("/transaction/:id", TransactionController.update);

routes.get("/transactiondetails/", TransactionDetailController.readAll);
routes.get("/transactiondetails/:id", TransactionDetailController.readById);
routes.post("/transactiondetails/", TransactionDetailController.save);
routes.delete("/transactiondetails/:id", TransactionDetailController.delete);
routes.patch("/transactiondetails/:id", TransactionDetailController.update);

routes.get("/report/daily/", ReportController.daily);
routes.get("/report/weekly/", ReportController.weekly);
routes.get("/report/monthly/", ReportController.monthly);
routes.get("/report/yearly/", ReportController.yearly);

export default routes;
