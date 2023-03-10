import React from "react";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Experience from './components/Experience/Experience.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Portafolio from './components/Portafolio/Portafolio.jsx';
import Services from './components/Services/Services.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Loading from'./components/Loading/Loading.jsx';
import { Route } from "react-router-dom";
const App = () => {
    return (
        <>
        {/* <Route exact path="/" component={Loading}/> */}
        <Header />
        <Nav/>
        <About/>
        <Experience/>
        {/* <Services/> */}
        <Portafolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
        </>
    )
} 
export default App;