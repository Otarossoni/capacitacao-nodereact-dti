import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { isNumber } from "../../utils/validations/isNumber";
import { required } from "../../utils/validations/required";

const findByIdUserController = async (req: Request, res: Response) => {
  //Recebendo os dados da requisição pelo header
  const params = req.params;

  // Valida se todos os campos obrigatórios estão preenchidos
  required(params.id, "id");
  isNumber(params.id, "id");

  // Buscando o usuário específico no banco de dados
  const user = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // Retornando o usuário buscado
  res.json(user);
};

export { findByIdUserController };
