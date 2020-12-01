import React from 'react';
import './ServicesSection.css';
import card1 from '../assets/images/card1.jpg';
import card2 from '../assets/images/card2.jpg';
import card3 from '../assets/images/card3.jpg';
import card4 from '../assets/images/card4.jpg';
import card5 from '../assets/images/card5.jpg';


const ServicesSection = () => {
    return (
        <div id="services" className="container-fluid services">
            <div className="services-title">
                <h3>¿Cómo podés beneficiarte de nuestros servicios?</h3>
            </div>
            <div className="services-cards">
                <div className="row">
                    <div className=" col-sm-4">
                        <div className="card">
                            <div className="image-container">
                                <img src={card1} className="card-img-top" ></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo web</h5>
                                <p className="card-text">Desarrollaremos un sitio web altamente personalizado acorde a los lineamientos de tu marca transmitiendo a tus clientes una imagen profesional y de confianza.</p>
                                <a href="#" className="btn">Consultar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="image-container">
                                <img className="card-img-top" src={card2} ></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Tienda E-commerce</h5>
                                <p className="card-text">Crearemos tu tienda online auto-administrable a la cuál podrás cargar los productos de tu marca y empezar a vender al mundo a través de internet.
                                </p>
                                <a href="#" className="btn">Consultar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="image-container">
                                <img className="card-img-top" src={card3} ></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Posicionamiento SEO</h5>
                                <p className="card-text">Aumentaremos el tráfico que llega a tu sitio web mediante la implementación de técnicas de posicionamiento SEO en Google, el buscador más popular.</p>
                                <a href="#" className="btn">Consultar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-sm-4 mx-4">
                        <div className="card">
                            <div className="image-container">
                                <img className="card-img-top" src={card4} ></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">SEO local</h5>
                                <p className="card-text">Si tienes un negocio local te será de mucha ayuda posicionar tu marca en Google cuando las personas de tu localidad realizen una búsqueda.</p>
                                <a href="#" className="btn">Consultar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mx-4">
                        <div className="card">
                            <div className="image-container">
                                <img className="card-img-top" src={card5} ></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Hosting y Dominio</h5>
                                <p className="card-text">En caso de que sea necesario también nos encargaremos de gestionar el alquiler de un servidor y un nombre de Dominio correcto para alojar tu sitio.</p>
                                <a href="#" className="btn">Consultar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;