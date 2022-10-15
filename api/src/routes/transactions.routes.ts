import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions/createTransactionsController";
import { deleteTransactionsController } from "../controllers/transactions/deleteTransactionsController";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

// Endpoint de listagem de transações
transactionsRoutes.get("/", listTransactionsController);

// Endpoint para criação de transações
transactionsRoutes.post("/create", createTransactionsController);

// Endpoint para deleção de transações
transactionsRoutes.delete("/delete", deleteTransactionsController);

export { transactionsRoutes };
