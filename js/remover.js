let pacientesDaTabela = document.querySelectorAll(".produto");
let tabelaPacientes = document.querySelector("table");

tabelaPacientes.addEventListener("dblclick", function (event) {
  const confirmacao = confirm("Tem certeza que deseja remover este produto?");
  if (confirmacao) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
      event.target.parentNode.remove();
    }, 200);
  }
});
