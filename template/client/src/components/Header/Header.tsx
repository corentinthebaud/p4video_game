import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img src="./logo-video-p4.png" alt="logo" />
      </Link>
      <nav>
        <Link to="/space-client">Mon espace personnel</Link>
        <Link to="/registration-game">Ajouter un jeu</Link>
      </nav>
    </header>
  );
}

export default Header;
