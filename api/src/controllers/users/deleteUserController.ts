import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const deleteUserController = async (req: Request, res: Response) => {
  //Recebendo os dados da requisição
  const user = req.body;

  // Valida se todos os campos obrigatórios estão preenchidos
  required(user.id, "id");

  // Deletando o usuário no banco de dados
  const deletedUser = await prismaClient.user.delete({
    where: {
      id: user.id,
    },
  });

  // Retornando uma mensagem de sucesso para deleção
  res.send("Usuário deletado com sucesso!");
};

export { deleteUserController };
