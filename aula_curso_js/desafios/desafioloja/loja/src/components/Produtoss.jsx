import produtos from "../data/produtos.json";
import CardProdutos from "./cardprodutos.jsx";

function Produtos({ categoriaSelecionada }) {
    const produtosFiltrados = categoriaSelecionada === "Todas"
        ? produtos
        : produtos.filter((produto) => produto.categoria === categoriaSelecionada);

    return (
        <div className="lista-produtos">
            {produtosFiltrados.map((produto) => (
                <CardProdutos key={produto.id} produto={produto} />
            ))}
        </div>
    );
}

export default Produtos;