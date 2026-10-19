// sistema de escola: boletim, média de 3 notas, recuperação e reprovação
const portugues = Math.floor(Math.random() * 11);
const ingles = Math.floor(Math.random() * 11);
const matematica = Math.floor(Math.random() * 11);
const media = (portugues + ingles + matematica) /3;

console.log(`Boletim :`);
console.log(`Portugues: ${portugues}`);
console.log(`ingreis : ${ingles}`);
console.log(`mat : ${matematica}`);
console.log(`media : ${media}`);

if (media >= 6) {
    console.log(`aprovado`)
}
else{
    console.log(`Reprovado, tente recuperacao`)

    const portugues2 = Math.floor(Math.random() * 11);
    const ingles2 = Math.floor(Math.random() * 11);
    const matematica2 = Math.floor(Math.random() * 11);
    const media2 = (portugues2 + ingles2 + matematica2) / 3;

    console.log(`Notas da recuperação:`);
    console.log(`Português: ${portugues2}`);
    console.log(`Inglês: ${ingles2}`);
    console.log(`Matemática: ${matematica2}`);
    console.log(`Média da recuperação: ${media2}`);

    if (media2 >= 6) {
        console.log(`aprovado na recuperation, segue frente molekote`);
    }
    else{
        console.log(`Reprovou denovo baitola`);
    }
}

