import { NextFunction, Request, Response } from "express";

const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Valida se realmente é um erro e retorna o erro como um 400
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  // Caso não seja nada acima, ele retorna o erro como um 500
  return res.status(500).json({
    status: "error",
    message: "Ocorreu um erro interno no servidor",
  });
};

export { ErrorMiddleware };
