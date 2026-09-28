// ver de maior ou de menor idade
let idade = 19;
let nome = "rodrigo";
console.log(`Ola, meu nome eh ${nome} e minha idade eh ${idade}`);
const msg = idade >= 18
?"logo... vc eh d maior"
:"logo...vc eh d menor"
console.log(msg);



// numero aleatorio de -100 a 100 e ver se é positivo, negativo ou zero
const numero = Math.floor(Math.random() * 201) - 100;   //math.floor arredonda para baixo(tira decimais), math.random gera numero aleatorio entre 0 e 1, multiplicando por 201 gera numero entre 0 e 200, subtraindo 100 gera numero entre -100 e 100

const resultado = numero > 0
    ? "Positivo"
    : numero < 0  //se nao for positivo, verifica se é negativo, se não for, então é zero
        ? "Negativo"
        : "Zero";

console.log(numero);
console.log(`O número ${(numero)} é ${resultado}`);



// nota media e ver se passou ou não
const nota = Math.floor(Math.random() * 11); //gera numero aleatorio entre 0 e 10
const resultadoNota = nota >= 7
    ? "Aprovado"
    : "Reprovado";
    console.log(`Sua nota ${nome} é ${nota} e vc foi ${resultadoNota}`);



//verificar se o numero é par ou impar
const parimpar = numero % 2===0         //se o resto da divisão do numero por 2 for igual a 0, então é par, se não for, então é impar
    ? "Par"
    : "Ímpar";
console.log(`O número ${numero} é ${parimpar}`);