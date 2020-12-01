import React, { Component } from 'react';

import Header from '../components/Header';
import Caroussel from '../components/Caroussel';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export class Home extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Caroussel></Caroussel>
                <ServicesSection></ServicesSection>
                <ContactSection></ContactSection>
                <Footer></Footer>
            </>
        )
    }
}

export default Home;
