import React from "react";
import './Navbar.css'

class Navbar extends React.Component {
    render() { 
        return(
            <nav className="Navbar59i navbar bg-dark navbar-expand-lg bg-body-tertiary" >
                <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Imagenes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Favoritos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sobre Nosotros</a>
        </li>
        </ul>
    </div>
    </div>
            </nav>
        );
    }
}

export default Navbar