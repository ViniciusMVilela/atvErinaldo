let campoInput = document.querySelector("#filtrar-tabela");
campoInput.addEventListener("input", function () {
  this.value;
  let trProdutos = document.querySelectorAll(".produto");
  if (this.value.length > 0) {
    for (let i = 0; i < trProdutos.length; i++) {
      let produtos = trProdutos[i];
      let tdNome = produtos.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressaoRegular = new RegExp(this.value, "i");

      if (!expressaoRegular.test(nome)) {
        produtos.classList.add("invisivel");
      } else {
        produtos.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; i < trProdutos.length; i++) {
      let produtos = trProdutos[i];
      produtos.classList.remove("invisivel");
    }
  }
});
