import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
import { transactionsRoutes } from "./transactions.routes";
import userRoutes from "./users.routes";

const routes = Router();

// Roda de check
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.use("/users", userRoutes);

// Rota de login
routes.post("/login", loginController);

//Rota de transações
routes.use("/transactions", transactionsRoutes);

export default routes;
