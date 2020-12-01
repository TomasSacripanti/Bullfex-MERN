import React, { Component } from 'react';
import './BlogSection.css';
import remoteWorking from '../assets/images/remote-working.png';

export class BlogSection extends Component {
    render() {
        return (
            <div className="container container-blog">
                <div className="row row-blog">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img className="w-100" src={remoteWorking} alt=""/>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <h1 className="text-center">Sección en proceso de creación</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSection;
