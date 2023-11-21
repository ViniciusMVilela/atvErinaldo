document.getElementById("ordenada").addEventListener("click", function (event) {
  const botaoRemover = event.target.closest(".td-btn");
  const nomeProduto = document.querySelector(".info-nome").textContent;

  if (botaoRemover) {
    const confirmacao = confirm(
      `Tem certeza que deseja remover o produto ${nomeProduto}?`
    );

    if (confirmacao) {
      console.log("Botão de remover clicado! Produto será removido.");
      const linhaProduto = botaoRemover.closest(".produto");
      if (linhaProduto) {
        linhaProduto.remove(); // Remove a linha da tabela
      }
    } else {
      console.log("Remoção cancelada pelo usuário.");
    }
  }
});
