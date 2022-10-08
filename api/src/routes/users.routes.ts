import { Router } from "express";
import { prismaClient } from "../database/prismaClient";

const userRoutes = Router();

//Endpoint de listagem de usuários
userRoutes.get("/", async (req, res) => {
  //Busca os dados de usuários
  const userList = await prismaClient.user.findMany();

  //Retorna a lista de usuários
  res.json(userList);
});

//Endpoint para criação de usuário
userRoutes.post("/create", async (req, res) => {
  const user = req.body;

  const createdUser = await prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });

  res.json(createdUser);
});

//Endpoint para edição de usuário
userRoutes.put("/update", (req, res) => {
  res.send("Edição de usuário");
});

//Endpoint para deletar de usuário
userRoutes.delete("/delete", (req, res) => {
  res.send("Deleção de usuário");
});

//Endpoint para deletar de usuário
userRoutes.get("/findById/:id", (req, res) => {
  res.send("Usuário por ID");
});

export default userRoutes;
