function ordenarTabela() {
  var tabela, linhas, trocado, i, x, y;
  tabela = document.getElementById("ordenada");
  trocado = true;

  while (trocado) {
    trocado = false;
    linhas = tabela.rows;

    for (i = 1; i < linhas.length - 1; i++) {
      x = linhas[i].getElementsByTagName("td")[0];
      y = linhas[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
        trocado = true;
        break;
      }
    }
  }
}
