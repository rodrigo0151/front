import logo from '../assets/logo_loja.jpg';

function Header({
    categorias,
    categoriaSelecionada,
    onSelecionarCategoria,
}) {
    return (
        <header className="site-header">
            <div className="cabecalho-marca">
                <img className="site-logo" src={logo} alt="" />
                <p className="nome-loja">Loja de Armas Brancas</p>
            </div>
            <nav className="filtro-categorias" aria-label="Filtrar produtos por categoria">
                <button
                    className={categoriaSelecionada === 'Todas' ? 'categoria-botao ativo' : 'categoria-botao'}
                    type="button"
                    aria-pressed={categoriaSelecionada === 'Todas'}
                    onClick={() => onSelecionarCategoria('Todas')}
                >
                    Todas
                </button>
                {categorias.map((categoria) => (
                    <button
                        className={categoriaSelecionada === categoria ? 'categoria-botao ativo' : 'categoria-botao'}
                        key={categoria}
                        type="button"
                        aria-pressed={categoriaSelecionada === categoria}
                        onClick={() => onSelecionarCategoria(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </nav>
        </header>
    );
}

export default Header;
