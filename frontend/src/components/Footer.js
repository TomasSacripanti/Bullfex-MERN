import React from 'react';
import './Footer.css';
import logotipo from '../assets/images/logotipo-bullfex.svg';

const Footer = () => {
    return (
        <footer className="d-flex align-items-center">
            <div className="row w-100 h-100 pt-5">
                <div className="col-6 col-sm-3  d-flex flex-column justify-content-start align-items-center">
                    <figure>
                        <img src={logotipo}></img>
                    </figure>
                </div>
                <div className="col-6 col-sm-3  d-flex flex-column justify-content-start align-items-center">
                    <h5 className="pb-2">Secciones</h5>
                    <ul className="lista-des">
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                        <li>
                            <a href="#">Propósito</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-sm-3  d-flex flex-column justify-content-start align-items-center">
                    <h5 className="pb-2">Legales</h5>
                    <ul className="lista-des">
                        <li>
                            <a href="#">Política de privacidad</a>
                        </li>
                        <li>
                            <a href="#">Política de cookies</a>
                        </li>
                        <li>
                            <a href="#">Aviso legal</a>
                        </li>
                        <li>
                            <a href="#">Términos de compra</a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-sm-3  d-flex flex-column justify-content-start align-items-center">
                    <h5 className="pb-2">Seguínos!</h5>
                    <div>
                        <a className="mx-1" href="#">
                            <i className="icon-facebook"></i>
                        </a>
                        <a className="mx-1" href="#">
                            <i className="icon-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;