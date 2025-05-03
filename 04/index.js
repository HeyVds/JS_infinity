let numero = Number(prompt("Digite um número inteiro positivo: "));

if (numero >= 0) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`Fatorial de ${numero} é ${fatorial}`);

  let anterior = 0;
  let atual = 1;

  console.log("Sequência de Fibonacci até o número informado:");
  for (let i = 0; atual <= numero; i++) {
    console.log(anterior);

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
} else {
  console.log("Por favor, digite um número inteiro positivo.");
}
