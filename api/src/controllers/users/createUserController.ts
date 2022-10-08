import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";

const createUserController = async (req: Request, res: Response) => {
  //Recebendo os dados da requisição
  const user = req.body;

  // Valida se todos os campos obrigatórios estão preenchidos
  required(user.name, "name");
  required(user.email, "email");
  required(user.password, "password");

  // Criptografando a senha do usuário
  const cryptPassword = await bcrypt.hash(user.password, 10);

  // Realiza a inserção no banco de dados
  const createdUser = await prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: cryptPassword,
    },
  });

  // Retorna um json do usuário adicionado
  res.json(createdUser);
};

export { createUserController };
