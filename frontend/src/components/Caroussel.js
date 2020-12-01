import React from 'react';
import {Link} from 'react-router-dom';
import './Caroussel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Caroussel = () => {
    return (
        <div className="main">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" id="img-one">
                        <div className="carousel-container" id="carousel-container-one">
                            <div className="carousel-card" id="purpose-card">
                                <h1>Propulsamos el sueño emprendedor.</h1>
                                <p>Nuestro propósito es ayudar a los emprendedores del siglo 21 a crecer y monetizar sus proyectos mediante la creación y optimización de plataformas digitales.</p>
                                <a href="#contact" >Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" id="img-two">
                        <div className="carousel-container" id="carousel-container-two">
                            <div className="carousel-card" id="services-card">
                                <h1>Impulsá tu marca al siguiente nivel.</h1>
                                <p>Goza de los múltiples beneficios de llevar tu marca al mundo digital con un sitio web adaptable a todos los dispositivos o una tienda e-commerce auto-administrable.</p>
                                <a href="#services" >Servicios</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" id="img-three">
                        <div className="carousel-container" id="carousel-container-three">
                            <div className="carousel-card" id="blog-card">
                                <h1>Aprendé a digitalizar tu marca con nuestro blog.</h1>
                                <p>Cada semana compartimos tips y contenido de alto valor informativo para que aprendas a
                                llevar a cabo tus ideas al terreno del mundo digital.</p>
                                <Link to="/blog">Visitar Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Caroussel;