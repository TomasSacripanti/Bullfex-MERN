import {Component} from "react";
import logotipo from "../assets/images/logotipo-bullfex.svg";
import "./Header.css";

class Header extends Component {
    toggleNav = (e) => {
        const list = document.querySelector('.nav-list');
        const items = document.querySelectorAll('.nav-item');
        list.classList.toggle('open');
        items.forEach(item => {
            item.classList.toggle('fade-tomi');
        })
    };
    render() {
        return (
                    <header className="header">
        <figure className="img-container">
            <img src={logotipo} alt="Logotipo Bullfex" />
        </figure>
        <nav className="navegation">
            <ul className="nav-list">
            <li className="nav-item">
                <a href="" className="nav-link active-link">
                Inicio
                </a>
            </li>
            <li className="nav-item item-container">
                <a href="" className="nav-link">
                Servicios
                <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-list">
                <li className="sub-item">
                    <a href="">Desarrollo web</a>
                </li>
                <li className="sub-item">
                    <a href="">Posicionamiento SEO</a>
                </li>
                <li className="sub-item">
                    <a href="">Hosting y dominio</a>
                </li>
                </ul>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">
                Blog
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">
                Contacto
                </a>
            </li>
            </ul>
            <div className="hamburger" onClick={this.toggleNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </div>
        </nav>
        </header>
        )
    }
}

export default Header;

