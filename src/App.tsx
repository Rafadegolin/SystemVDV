import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home/Home";
import ProdutoSimples from "./pages/ProdutoSimples/ProdutoSimples";
import ProdutoVariacao from "./pages/ProdutoVariacao/ProdutoVariacao";
import Header from "./components/Header/Header";
import ConfiguracaoSeparacao from "./components/ConfiguracaoSeparacao";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtosimples" element={<ProdutoSimples />} />
        <Route path="/produtovariacao" element={<ProdutoVariacao />} />
        <Route path="/configuracao" element={<ConfiguracaoSeparacao />} />
      </Routes>
    </Router>
  );
}

export default App;
