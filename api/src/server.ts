import express, { Request, Response } from "express";
import "express-async-errors";
import routes from "./routes/routes";
import { ErrorMiddleware } from "./middlewares/error";
import { Swagger } from "./middlewares/swagger";

const app = express();

// Configura o Express para transitar dados com json
app.use(express.json());

// Faz as configurações do Swagger
Swagger(app);

// Rotas
app.use(routes);

// Tratar erros
app.use(ErrorMiddleware);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export { app };
