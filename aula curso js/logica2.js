//entrada por idade e ter ingresso
const idade = Math.floor(Math.random() * 100);              //gera numero aleatorio entre 0 e 99
const ingresso = Math.floor(Math.random() * 2);             //gera numero aleatorio entre 0 e 1

const resultadoIngresso = idade >= 18 && ingresso === 1     
    ? "Pode entrar"
    : "Não pode entrar";

console.log(`Idade: ${idade}, Ingresso: ${ingresso}`);
console.log(resultadoIngresso);



//ter desconto estudante ou 60+
const idadeDesconto = Math.floor(Math.random() * 100);
if (idadeDesconto <= 18 || idadeDesconto >= 60) {
    console.log(`Idade: ${idadeDesconto}, Desconto: Sim`);
    console.log(`Se vc tem ${idadeDesconto} anos, vc tem desconto`);
} else {
    console.log(`Idade: ${idadeDesconto}, Desconto: Não tienes, otario`);
}



//autorizacao de acordo com seu saldo
const saldo = Math.floor(Math.random() * 1000); //gera numero aleatorio entre 0 e 999
if (saldo >= 700) {
    console.log(`Saldo : ${saldo} reais, Vc é bem rico, ta autorizado meu fih`);
}
else if (saldo < 699) {
    console.log(`Saldo : ${saldo} reais, VC É POBRE, LISO E DURO, SAIA IMEDIATAMENTE... INDIGENTE`);
}



//classificacao
const rank = Math.floor(Math.random() * 4);
let resultadoRank;
switch (rank) {     //switch vai olhar o valor do rank
    case 0:
        resultadoRank = "Ruim";
        break;
    case 1:
        resultadoRank = "Decente";
        break;
    case 2:
        resultadoRank = "Normal";
        break;
    default:
        resultadoRank = "Melhor do mundo";
}
console.log(`Classificação: ${resultadoRank}`);