import React from 'react';
import './Navbar.css';
import Login from '../Login/Login';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar59i navbar bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Imagenes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favoritos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Login />
      </nav>
    );
  }
}

export default Navbar;
