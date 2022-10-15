import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listTransactionsController = async (req: Request, res: Response) => {
  // Busca no banco todas as transações
  const transactions = await prismaClient.transaction.findMany();

  // Retorna a lista de transações
  res.json(transactions);
};

export { listTransactionsController };
