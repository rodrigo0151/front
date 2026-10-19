function CardProdutos({ produto }) {
    return (
        <div className="card-produto">
            <img
                src={produto.imagem}
                alt={produto.nome}
            />

            <h2>{produto.nome}</h2>
<p className="categoria-produto">{produto.categoria}</p>
            <p>{produto.descricao}</p>
            <span>R$ {produto.preco}</span>
        </div>
    );
}

export default CardProdutos;
