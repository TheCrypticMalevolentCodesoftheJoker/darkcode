import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.webp";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <section className="container__navbar">
      <section className="branding">
        <img src={logo} alt="Logo" />
        <h1>DarkCode</h1>
      </section>
      <nav>
        <ul>
          <li>
            <Link className="access__link" to="/">
              <p className="access__icon">☠</p>Home
            </Link>
          </li>
          <li>
            <Link className="access__link" to="/login">
              <p className="access__icon">☠</p>Iniciar sesión
            </Link>
          </li>
          <li>
            <Link className="access__link" to="/registrar">
              <p className="access__icon">☠</p>Registrar
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
