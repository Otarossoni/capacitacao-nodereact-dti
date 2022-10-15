import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
import { JwtMiddleware } from "../middlewares/jwt";
import { transactionsRoutes } from "./transactions.routes";
import userRoutes from "./users.routes";

const routes = Router();

// Roda de check
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota de login
routes.post("/login", loginController);

// Rota de usuários
routes.use("/users", userRoutes);

// Filtro de autenticação
routes.use(JwtMiddleware);

// Rota de transações
routes.use("/transactions", transactionsRoutes);

export default routes;
