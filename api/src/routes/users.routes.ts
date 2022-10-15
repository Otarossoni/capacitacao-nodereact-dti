import { Router } from "express";
import { listUserController } from "../controllers/users/listUsersController";
import { createUserController } from "../controllers/users/createUserController";
import { editUserController } from "../controllers/users/editUserController";
import { deleteUserController } from "../controllers/users/deleteUserController";
import { findByIdUserController } from "../controllers/users/findByIdUserController";

const userRoutes = Router();

/**
 * @openapi
 * /users:
 *  get:
 *    tags: [Usuários]
 *    summary: Busca todos os usuários
 *    description: Busca todos os usuários cadastrados no banco de dados
 *    responses:
 *      200:
 *        description: Listagem de usuários
 */
// Endpoint de listagem de usuários
userRoutes.get("/", listUserController);

// Endpoint para criação de usuário
userRoutes.post("/create", createUserController);

// Endpoint para edição de usuário
userRoutes.put("/update", editUserController);

// Endpoint para deletar de usuário
userRoutes.delete("/delete", deleteUserController);

// Endpoint para buscar um usuário específico
userRoutes.get("/findById/:id", findByIdUserController);

export default userRoutes;
