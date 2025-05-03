let nome = prompt("Digite seu nome: ");
let altura = Number(prompt("Digite sua altura: "));
let massa = Number(prompt("Digite seu peso: "));
let imc = massa / altura ** 2;
let classificacao = "";
if (imc < 16) {
  classificacao = "Baixo peso muito grave";
} else if (imc < 17) {
  classificacao = "Baixo peso grave";
} else if (imc < 18.5) {
  classificacao = "Baixo peso";
} else if (imc < 25) {
  classificacao = "Peso normal";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else if (imc < 35) {
  classificacao = "Obesidade grau I";
} else if (imc < 40) {
  classificacao = "Obesidade grau II";
} else {
  classificacao = "Obesidade grau III";
}

console.log("O(a) ", nome, ", tem o IMC: ", imc, ",", classificacao);
