import "./Header.css";
import logoVDV from "../../assets/images/logoVDV.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="nav">
        <nav className="nav-links">
          <Link to="/" className="nav-item">
            <img src={logoVDV} alt="logo VDVGroup" className="logoVDV" />
          </Link>
          <Link to="/produtosimples" className="nav-item">
            Produtos simples
          </Link>
          <Link to="/produtovariacao" className="nav-item">
            Produtos com variação
          </Link>
          <Link to="/configuracao" className="nav-item">
            Configurações
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
