import jwt from "jsonwebtoken";

// Especifica as tipagens do retorno do decode
interface iToken {
  id: number;
  nome: String;
  iat: number;
  exp: number;
}

export const decodedToken = (token?: string) => {
  // Verifica se o token existe
  if (!token) {
    throw new Error("Token não informado!");
  }

  // Faz o decode do token
  const decoded = jwt.decode(token);
  if (!decoded) {
    throw new Error("Token inválido!");
  }

  return decoded as iToken;
};
