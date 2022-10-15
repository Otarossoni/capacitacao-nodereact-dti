import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { decodedToken } from "../../utils/jwtUtils";

const logoutController = async (req: Request, res: Response) => {
  // Obtém o token do usuário
  const token = req.headers.authorization;
  const tokenWithoutBearer = token?.split(" ")[1];

  // Valida se há um token
  if (!tokenWithoutBearer) {
    throw new Error("Token não informado!");
  }

  const decoded = decodedToken(tokenWithoutBearer);

  await prismaClient.token.deleteMany({
    where: {
      idUser: decoded.id,
    },
  });

  res.json({ message: "Logout realizado com sucesso!" });
};

export { logoutController };
