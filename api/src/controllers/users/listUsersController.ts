import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listUserController = async (req: Request, res: Response) => {
  //Recebendo os dados da requisição
  const userList = await prismaClient.user.findMany();

  // Retorna a lista de usuários
  res.json(userList);
};

export { listUserController };
