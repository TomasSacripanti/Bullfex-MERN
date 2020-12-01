import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <div className="w-100 bg-light py-4">
            <div className="contain my-5">
                <div className="row  m-auto justify-content-between">
                    <div className="left-contact col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="my-3">Hagamos que las cosas sucedan!</h2>
                        <h4 className="my-3">Deja tu información de contacto en el formulario y así podremos contarte más sobre nuestra propuesta de valor.</h4>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label htmlFor="formGroupExampleInput">Nombre</label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="formGroupExampleInput">Email</label>
                                    <input className="form-control" type="email"></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label htmlFor="formGroupExampleInput" type="number">Número de teléfono</label>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="formGroupExampleInput">Web actual (opcional)</label>
                                    <input className="form-control"></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <label>Describí tu proyecto (opcional)</label>
                                <textarea className="form-control" row="5" placeholder="Podés agregar sitios web de referencia, tus redes sociales y cualquier característica que desees..."></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
