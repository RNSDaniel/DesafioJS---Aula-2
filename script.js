document.getElementById("resolucaoDiv2").style.display = "none";

let numero1 = 0;
let numero2 = 0;
let btnResolucao = document.getElementById("resolucao");

btnResolucao.addEventListener("click", () => {
  paragrafoResolucao.innerText = "";
  document.getElementById("resolucaoDiv2").style.display = "flex";
  let nome = prompt("Qual seu primeiro nome?");
  let sobrenome = prompt("Qual seu sobrenome?");
  let nomeCompleto = nome + " " + sobrenome;
  let idade = parseInt(prompt("Olá " + nome + ", qual sua idade?"));
  alert("Vamos fazer algumas operações matemáticas");
  numero1 = parseFloat(prompt("Digite o primeiro número:"));
  numero2 = parseFloat(prompt("Digite o segundo número:"));
  let resolucaoH3 = document.getElementById("resolucaoH3");
  resolucaoH3.innerText = "Resolução do Desafio";
  let resolucaoDiv = document.getElementById("resolucaoDiv");
  resolucaoDiv.innerHTML = `<p>Nome: ${nomeCompleto} </br>
                                Idade: ${idade} anos</br>
                                Número 1: ${numero1}</br>
                                Número 2: ${numero2}</p>
                                <h3>Escolha a operação matemática</h3>
                               `;
});

let btnAdicao = document.getElementById("adicao");
let btnSubtracao = document.getElementById("subtracao");
let btnProduto = document.getElementById("produto");
let btnDivisao = document.getElementById("divisao");

let paragrafoResolucao = document.getElementById("paragrafoResolucao");

btnAdicao.addEventListener("click", () => {
  let adicao = numero1 + numero2;
  alert("A soma de " + numero1 + " + " + numero2 + " = " + adicao);
  console.log("A soma de ", numero1, " + ", numero2, " = ", adicao);
  paragrafoResolucao.innerText = `A soma de ${numero1} + ${numero2} = ${adicao}`;
});

btnSubtracao.addEventListener("click", () => {
  let subtracao = numero1 - numero2;
  alert("A subtração de " + numero1 + " - " + numero2 + " = " + subtracao);
  console.log("A subtraçao de ", numero1, " - ", numero2, " = ", subtracao);
  paragrafoResolucao.innerText = `A subtração de ${numero1} - ${numero2} = ${subtracao}`;
});

btnProduto.addEventListener("click", () => {
  let produto = numero1 * numero2;
  alert("O produto de " + numero1 + " * " + numero2 + " = " + produto);
  console.log("O produto de ", numero1, " * ", numero2, " = ", produto);
  paragrafoResolucao.innerText = `O produto de ${numero1} * ${numero2} = ${produto}`;
});

btnDivisao.addEventListener("click", () => {
  let divisao = numero1 / numero2;
  alert("A divisão de " + numero1 + " / " + numero2 + " = " + divisao);
  console.log("A divisão de ", numero1, " / ", numero2, " = ", divisao);
  paragrafoResolucao.innerText = `A divisão de ${numero1} / ${numero2} = ${divisao}`;
});
