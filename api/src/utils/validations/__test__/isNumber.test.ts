import { isNumber } from "../isNumber";

describe("Teste da função 'isNumber'", () => {
  // Teste 1
  it("Deve retornar 'undefined' quando o valor informado for um número", () => {
    const valor = 1;
    expect(isNumber(valor)).toBeUndefined();
  });

  it("Deve retornar erro caso o valor informado não seja um número", () => {
    const valor = "teste";
    expect(() => isNumber(valor)).toThrowError();
  });

  it("Deve retornar erro com o nome do campo personalizado", () => {
    const valor = "teste";
    const nomeCampo = "Nome";

    expect(() => isNumber(valor, nomeCampo)).toThrowError(
      `Campo ${nomeCampo} informado não é um número`
    );
  });
});
