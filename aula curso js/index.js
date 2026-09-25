// ver de maior ou de menor idade
let idade = 19;
let nome = "rodrigo";
console.log(`Ola, meu nome eh ${nome} e minha idade eh ${idade}`);
const msg = idade >= 18
?"vc eh d maior"
:"vc eh d menor"
console.log(msg);

// numero aleatorio de -100 a 100 e ver se é positivo, negativo ou zero
const numero = Math.floor(Math.random() * 201) - 100;   //math.floor arredonda para baixo(tira decimais), math.random gera numero aleatorio entre 0 e 1, multiplicando por 201 gera numero entre 0 e 200, subtraindo 100 gera numero entre -100 e 100

const resultado = numero > 0
    ? "Positivo"
    : numero < 0  //se nao for positivo, verifica se é negativo, se não for, então é zero
        ? "Negativo"
        : "Zero";

console.log(numero);
console.log(`O número é ${resultado}`);

// nota media e ver se passou ou não
const nota = Math.floor(Math.random() * 11); //gera numero aleatorio entre 0 e 10
const resultadoNota = nota >= 7
    ? "Aprovado"
    : "Reprovado";
    console.log(`A nota do ${nome} é ${nota} e vc foi ${resultadoNota}`);