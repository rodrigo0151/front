// JavaScript básico

// Variáveis
let nome = "João";
const idade = 25;

console.log("Nome:", nome);
console.log("Idade:", idade);

// TIPO DE DADOS
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

//variaveis2
// var: antigo; pode ser alterado e redeclarado.
// let: pode ser alterado, mas não redeclarado no mesmo bloco.
// const: não pode receber outro valor depois de criado.


// comparacoes
5 = 5 //igual
idade => 18 && temcarta //maior igual e AND
pix || cartao //OR
!estalogado //NOT

// exemplos de tipos de dados
console.log(typeof 2);  
console.log(typeof 5.14);   //number
console.log(typeof "Hello");    //string

console.log(2+2);    //soma
console.log(2-2);   //subtração
console.log(2*2);   //multiplicação
console.log(2/2);   //divisão
console.log(2**3); //elevado a potencia


