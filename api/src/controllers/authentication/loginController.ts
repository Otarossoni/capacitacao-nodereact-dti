import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (req: Request, res: Response) => {
  const loginData = req.body;

  // Validação de dados do login
  required(loginData.email, "email");
  required(loginData.password, "password");

  // Verificando se o usuário existe
  const user = await prismaClient.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  // Verificando se a senha está correta
  const passwordMatch = await bcrypt.compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new Error("Senha incorreta!");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not defined");
  }

  // Gerando o token de autenticação
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  // Guardando o token banco de dados
  await prismaClient.token.create({
    data: {
      token,
      idUser: user.id,
    },
  });

  // Retornando o token
  return res.json({
    token,
  });
};

export { loginController };
