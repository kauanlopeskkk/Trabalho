export class Gasto {
  constructor(valor, categoria) {
    this.valor = valor;
    this.categoria = categoria;
  }
}

export class ControleFinanceiro {
  constructor() {
    this.gastos = [];
  }

  adicionarGasto(gasto) {
    this.gastos.push(gasto);
  }

  obterTotal() {
    return this.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }

  obterPorCategoria(categoria) {
    return this.gastos.filter(g => g.categoria === categoria);
  }
}