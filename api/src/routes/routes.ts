import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
import userRoutes from "./users.routes";

const routes = Router();

// Roda de check
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.use("/users", userRoutes);

// Rota de login
routes.post("/login", loginController);

export default routes;
