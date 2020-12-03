import {Component} from "react";
import {Link} from 'react-router-dom';
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
            <Link to="/" className="img-container">
                <img src={logotipo} alt="Logotipo Bullfex" />
            </Link>
            <nav className="navegation">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active-link">
                        Inicio
                        </Link>
                    </li>
                    <li className="nav-item item-container">
                        <a href="#services" className="nav-link">
                        Servicios
                        <i className="fas fa-caret-down"></i>
                        </a>
                        <ul className="sub-list">
                            <li className="sub-item">
                                <a href="">Desarrollo web</a>
                            </li>
                            <li className="sub-item">
                                <a href="">Tienda E-commerce</a>
                            </li>
                            <li className="sub-item">
                                <a href="">Posicionamiento SEO</a>
                            </li>
                            <li className="sub-item">
                                <a href="">SEO local</a>
                            </li>
                            <li className="sub-item">
                                <a href="">Hosting y dominio</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                        Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
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

