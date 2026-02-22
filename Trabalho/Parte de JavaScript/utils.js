export const formatarMoeda = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

export const validarValor = (valor) =>
  !isNaN(valor) && valor > 0;