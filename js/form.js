//* EVENTO BTN
let btn = document.querySelector("#adicionar-produto");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Botão clicado");

  let form = document.querySelector("#form-adiciona");

  let dadosProdutos = obtendoDadosDoFormulario(form);
  console.log(dadosProdutos);

  var erros = validaProduto(dadosProdutos);

  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  adicionaNovoProdutoNaTabela(dadosProdutos);
  form.reset();
  let mensagensErro = document.querySelector("#mensagem-erro");
  mensagensErro.innerHTML = "";
});

//* FUNCÕES
function adicionaNovoProdutoNaTabela(produto) {
  var adicionaNovoProduto = criaNovosElementos(produto);
  var tabela = document.querySelector("#tabela-produtos");
  tabela.appendChild(adicionaNovoProduto);
  ordenarTabela();
}

function obtendoDadosDoFormulario(form) {
  //* acessando os valores input de cada campo

  let objetoProduto = {
    nome: form.nome.value,
    preco: form.preco.value,
    // altura: form.altura.value,
    // gordura: form.gordura.value,
    // imc: calculoDoImc(form.peso.value, form.altura.value),
  };

  //  let nome = form.nome.value;
  //  let peso = form.peso.value;
  //  let gordura = form.gordura.value;
  //  let altura = form.altura.value;

  return objetoProduto;
}

function criaNovosElementos(produto) {
  //* criando novos elementos
  let novoProduto = document.createElement("tr");
  //let btnRemover = document.querySelector(".btnRemover");
  novoProduto.classList.add("produto");

  //! colocamos isso direto no append child
  // let nomeNovoPacinte = montaTd(paciente.nome, "info-nome");
  // let pesoNovoPacinte = montaTd(paciente.peso, "info-peso");
  // let alturaNovoPacinte = montaTd(paciente.altura, "info-altura");
  // let gorduraNovoPacinte = montaTd(paciente.gordura, "info-gordura");
  // let imcNovoPacinte = montaTd(paciente.imc, "info-imc");

  //* adicioanando novos filhos td ao tr
  novoProduto.appendChild(montaTd(produto.nome, "info-nome"));
  novoProduto.appendChild(montaTd(produto.preco, "info-preco"));
  novoProduto.appendChild(montaExcluir());
  //btnRemover.classList.remove("invisivel");
  // novoProduto.appendChild(montaTd(paciente.altura, "info-altura"));
  // novoProduto.appendChild(montaTd(paciente.gordura, "info-gordura"));
  // novoProduto.appendChild(montaTd(paciente.imc, "info-imc"));
  // console.log(novoProduto);

  return novoProduto;
}

function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function montaExcluir() {
  let td = document.createElement("td");
  let btn = document.createElement("button");
  let img = document.createElement("img");
  img.classList.add("img-remover");
  img.src = "img/lixo.png";
  btn.appendChild(img);
  btn.classList.add("btn-remover");
  td.appendChild(btn);

  return td;
}

function validaProduto(produto) {
  let erros = [];

  if (produto.nome.length === 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (produto.preco <= 0) {
    erros.push("O preço é inválido");
  }

  return erros;
}

function exibeMensagemErro(erros) {
  let ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = ""; //*zera mensagem de erro antes de exibir uma nova
  erros.forEach((erro) => {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
