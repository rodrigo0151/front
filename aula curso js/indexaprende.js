// JavaScript básico

// Variáveis
let nome = "João";
const idade = 25;

console.log("Nome:", nome);
console.log("Idade:", idade);

// Tipos de dados
let numero = 10;
let decimal = 3.5;
let booleano = true;
let vazio = null;
let indefinido;

console.log(typeof numero);
console.log(typeof decimal);
console.log(typeof booleano);
console.log(typeof vazio);
console.log(typeof indefinido);

// Operações
let soma = 5 + 3;
let subtracao = 10 - 4;
let multiplicacao = 6 * 2;
let divisao = 20 / 5;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

// Template string
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// Condicional
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Laço
for (let i = 1; i <= 3; i++) {
  console.log("Contagem:", i);
}
