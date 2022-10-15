import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prismaClient } from "../database/prismaClient";
import { decodedToken } from "../utils/jwtUtils";

const JwtMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new Error("Token não informado!");
  }

  const tokenWithoutBearer = token.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    throw new Error("Variável de ambiente JWT não informada!");
  }

  // Verifica se o token é valido
  jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);

  // Faz o decode do token
  decodedToken(tokenWithoutBearer);

  // Valida se há o token em banco de dados
  const _token = await prismaClient.token.findFirst({
    where: {
      token: tokenWithoutBearer,
    },
  });

  if (!_token) {
    throw new Error("Token inválido!");
  }

  next();
};

export { JwtMiddleware };
