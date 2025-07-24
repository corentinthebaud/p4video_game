import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="link-footer">
        <li className="link-logo">
          <a
            href="https://github.com/wildcodeschool-2025-03/JS-WestDevs-P3-GardMalin"
            target="blank"
          >
            <img src="github-logo.png" alt="logo GitHub" />
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <img src="/linkedin-logo.png" alt="logo linkedin" />
          </a>
        </li>

        <li className="link-pages">
          <p>
            <Link to="">CGU</Link>
          </p>
          <p>
            <Link to="">Nous rejoindre</Link>
          </p>
          <p>
            <Link to="">A propos</Link>
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
