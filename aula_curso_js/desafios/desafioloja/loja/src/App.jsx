
import { useState } from 'react';
import './App.css';
import Footer from './footer.jsx';
import produtos from './data/produtos.json';
import Produtos from './components/Produtoss.jsx';
import Header from './components/header.jsx';

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const categorias = [...new Set(produtos.map((produto) => produto.categoria))];

  return (
    <div className="App">
      <Header
        categorias={categorias}
        categoriaSelecionada={categoriaSelecionada}
        onSelecionarCategoria={setCategoriaSelecionada}
      />
      <main className="conteudo-principal">
        <section className="catalogo" aria-labelledby="titulo-catalogo">
          <h1 id="titulo-catalogo">Nossos produtos</h1>
          <Produtos categoriaSelecionada={categoriaSelecionada} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
