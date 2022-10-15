import { Request, Response } from "express";

const listTransactionsController = async (req: Request, res: Response) => {
  res.send("Tudo certo!");
};

export { listTransactionsController };
