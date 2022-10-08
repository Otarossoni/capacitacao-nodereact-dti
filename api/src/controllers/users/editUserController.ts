import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";

const editUserController = async (req: Request, res: Response) => {
  //Recebendo os dados da requisição
  const user = req.body;

  // Valida se todos os campos obrigatórios estão preenchidos
  required(user.id, "id");

  // Criptografando a senha do usuário
  const cryptPassword = await bcrypt.hash(user.password || "", 10);

  // Realiza a edição no banco de dados
  const editUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password ? cryptPassword : undefined,
    },
  });

  // Retorna um json do usuário editado
  res.json(editUser);
};

export { editUserController };
