// pega a tabela (o tbody) e o parágrafo de aviso
const tabela = document.querySelector("#tabela");
const aviso = document.querySelector("#aviso");

// querySelector achou? Então tabela não é null.
// Vamos conferir escrevendo no aviso:
aviso.textContent = "Achei a tabela! Ela tem " + tabela.children.length + " linhas.";
