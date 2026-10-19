// SISTEMA DE PADARIA
// array produtos.


const produtos = [
    {
        id: 1,
        nome: "Pão francês",
        categoria: "Pães",
        preco: 1.00
    },
    {
        id: 2,
        nome: "Pão de queijo",
        categoria: "Pães",
        preco: 3.50
    },
    {
        id: 3,
        nome: "Bolo de chocolate",
        categoria: "Bolos",
        preco: 15.00
    },
    {
        id: 4,
        nome: "Bolo de cenoura",
        categoria: "Bolos",
        preco: 12.00
    },
    {
        id: 5,
        nome: "Café",
        categoria: "Bebidas",
        preco: 4.00
    },
    {
        id: 6,
        nome: "Suco de laranja",
        categoria: "Bebidas",
        preco: 6.00
    },
    {
        id: 7,
        nome: "Coxinha",
        categoria: "Salgados",
        preco: 7.00
    },
    {
        id: 8,
        nome: "Pastel",
        categoria: "Salgados",
        preco: 6.50
    }
];


// 1. FOREACH
// O forEach percorre todos os produtos do array.
// Para cada produto, mostramos suas informações no console.

produtos.forEach(produto => {
    console.log(
        `${produto.id} - ${produto.nome} - ${produto.categoria} - R$ ${produto.preco}`
    );
});


// 2. MAP
// O map percorre os produtos e cria um NOVO array.
// Aqui queremos pegar somente o nome de cada produto.

const nomes = produtos.map(produto => produto.nome);

console.log(nomes);


// 3. FILTER
// O filter serve para FILTRAR vários produtos.
// Aqui vamos mostrar somente os produtos da categoria "Pães".

const categoriaEscolhida = "Pães";

const produtosCategoria = produtos.filter(
    produto => produto.categoria === categoriaEscolhida
);

console.log(produtosCategoria);


// 4. FILTER
// Podemos usar filter também para encontrar produtos
// que atendam a uma determinada condição.
// Aqui mostramos produtos com preço menor que R$ 7.

const valorEscolhido = 7;

const produtosBaratos = produtos.filter(
    produto => produto.preco < valorEscolhido
);

console.log(produtosBaratos);


// 5. FIND
// O find procura UM produto que atenda à condição.
// Aqui estamos procurando o produto que possui ID 4.

const idEscolhido = 4;

const produtoEncontrado = produtos.find(
    produto => produto.id === idEscolhido
);

console.log(produtoEncontrado);


// 6. PUSH
// O push adiciona um novo elemento no FINAL do array.
// Aqui estamos adicionando um novo produto.

produtos.push({
    id: 9,
    nome: "Rosquinha",
    categoria: "Doces",
    preco: 5.00
});


// 7. POP
// O pop remove o ÚLTIMO elemento do array.
// Nesse caso, remove a Rosquinha que acabamos de adicionar.

produtos.pop();


// 8. LENGTH
// O length mostra QUANTOS elementos existem no array.
// Como começamos com 8 produtos e adicionamos/removemos 1,
// continuamos com 8 produtos.

console.log(`Total de produtos: ${produtos.length}`);