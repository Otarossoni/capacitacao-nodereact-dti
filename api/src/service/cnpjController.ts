import { Request, Response } from "express";
import axios from "axios";

const cnpjController = async (req: Request, res: Response) => {
  const { cnpj } = req.params;

  if (cnpj.length != 14) {
    throw new Error("CNPJ inválido");
  }

  const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
  const response = await axios.get(url);

  if (response.status != 200) {
    throw new Error("Erro ao buscar os dados do CNPJ");
  }

  res.json(response.data);
};

export { cnpjController };
