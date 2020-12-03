import React, { Component } from "react";
import "./ContactSection.css";
import Axios from 'axios';

export class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        phone: '',
        website: '',
        comment: '',
    };
  }
  onInputChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value, 
      })
  };
  onSubmit = async () => {
    const newProspect = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        website: this.state.website,
        comment: this.state.comment,
    }
    await Axios.post('http://localhost:4000', newProspect);
  };
  render() {
    return (
      <div id="contact" className="w-100 bg-light py-4">
        <div className="container my-5">
          <div className="row  m-auto justify-content-between">
            <div className="left-contact col-md-6 d-flex flex-column justify-content-center px-3">
              <h2 className="my-3 text-center">
                Hagamos que las cosas sucedan!
              </h2>
              <h4 className="my-3 text-center">
                Deja tu información de contacto en el formulario y así podremos
                contarte más sobre nuestra propuesta de valor.
              </h4>
            </div>
            <div className="col-md-6 px-3">
              <form onSubmit={this.addProspect}>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label htmlFor="name">Nombre</label>
                    <input
                      onChange={this.onInputChange}
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                    ></input>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={this.onInputChange}
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                    ></input>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label htmlFor="phone" type="number">
                      Número de teléfono
                    </label>
                    <input
                      onChange={this.onInputChange}
                      className="form-control"
                      name="phone"
                      id="phone"
                    ></input>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="website">Web actual (opcional)</label>
                    <input
                      onChange={this.onInputChange}
                      className="form-control"
                      name="website"
                      id="website"
                    ></input>
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="comment">
                    Describí tu proyecto (opcional)
                  </label>
                  <textarea
                    onChange={this.onInputChange}
                    className="form-control"
                    name="comment"
                    id="comment"
                    row="5"
                    placeholder="Podés agregar sitios web de referencia, tus redes sociales y cualquier característica que desees..."
                  ></textarea>
                </div>
                <button className="btn btn-primary mt-4" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
