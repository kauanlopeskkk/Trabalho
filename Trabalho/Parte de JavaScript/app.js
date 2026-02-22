import { Gasto, ControleFinanceiro } from "./classes.js";
import { formatarMoeda, validarValor } from "./utils.js";

const controle = new ControleFinanceiro();

const inputValor = document.getElementById("valor");
const selectCategoria = document.getElementById("categoria");
const btnAdicionar = document.getElementById("btnAdicionar");
const resumoDiv = document.getElementById("resumo");
const totalP = document.getElementById("total");

const atualizarInterface = () => {
  resumoDiv.innerHTML = "";

  const categorias = [...new Set(controle.gastos.map(g => g.categoria))];

  categorias.forEach(categoria => {
    const totalCategoria = controle
      .obterPorCategoria(categoria)
      .reduce((acc, g) => acc + g.valor, 0);

    const p = document.createElement("p");
    p.textContent = `${categoria}: ${formatarMoeda(totalCategoria)}`;
    resumoDiv.appendChild(p);
  });

  totalP.textContent = formatarMoeda(controle.obterTotal());
};

btnAdicionar.addEventListener("click", () => {
  const valor = parseFloat(inputValor.value);
  const categoria = selectCategoria.value;

  if (!validarValor(valor)) {
    alert("Digite um valor válido!");
    return;
  }

  const novoGasto = new Gasto(valor, categoria);
  controle.adicionarGasto(novoGasto);

  atualizarInterface();
  inputValor.value = "";
});