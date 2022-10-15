import { Router } from "express";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

transactionsRoutes.get("/", listTransactionsController);

export { transactionsRoutes };
