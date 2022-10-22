import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
import { logoutController } from "../controllers/authentication/logoutController";
import { JwtMiddleware } from "../middlewares/jwt";
import { cnpjController } from "../service/cnpjController";
import { transactionsRoutes } from "./transactions.routes";
import userRoutes from "./users.routes";
import cors from "cors";

const routes = Router();

// Liberar origens das requisições
routes.use(cors({ origin: "*" }));

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

// Endpoint para buscar dados do CNPJ especificado
routes.get("/cnpj/:cnpj", cnpjController);

// Rota de Logout
routes.post("/logout", logoutController);

// Rota de transações
routes.use("/transactions", transactionsRoutes);

export default routes;
