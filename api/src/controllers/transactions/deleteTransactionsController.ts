import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { decodedToken } from "../../utils/jwtUtils";
import { required } from "../../utils/validations/required";

const deleteTransactionsController = async (req: Request, res: Response) => {
  // Recebendo os dados da requisição
  const transaction = req.body;

  // Valida se os campos obrigatórios foram preenchidos
  required(transaction.id, "id");

  // Verificar se a transação existe
  const transactionExists = await prismaClient.transaction.findFirst({
    where: {
      id: transaction.id,
    },
  });

  if (!transactionExists) {
    throw new Error("Transação não encontrada!");
  }

  // Deletando a transação
  await prismaClient.transaction.delete({
    where: { id: transaction.id },
  });

  res.json({ message: "Transação deletada com sucesso!" });
};

export { deleteTransactionsController };
