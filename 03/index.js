let i = 1;
let totalAlunos = prompt("Digite o total de alunos: ");
let soma = 0;
let maiorNota = 0;
let menorNota = 100;

while (i <= totalAlunos) {
  let nota = Number(prompt(`Digite a nota do aluno ${i}: `));
  soma += nota;
  if (nota > maiorNota) {
    maiorNota = nota;
  }
  if (nota < menorNota) {
    menorNota = nota;
  }
  i++;
}
let media = soma / totalAlunos;

console.log(
  `A média da turma é: ${media}, a maior nota é: ${maiorNota} e a menor nota é: ${menorNota}.`
);
