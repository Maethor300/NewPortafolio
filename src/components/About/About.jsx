import React from "react";
import './About.css';
import IMG from '../../assets/DSC_3856 (3).JPG';
import {RiAwardFill} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={IMG} alt="" />
                    </div>
                </div>
                <div className="about__content">
                     <div className="about__cards">
                        <article className="about__card">
                            <RiAwardFill className="about__icon"/>
                           <h5>Experience</h5>
                           <small>1 Year Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                           <h5>Clients</h5>
                           <small>200+ worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                           <h5>Projects</h5>
                           <small>80+ plus completed</small>
                        </article>
                     </div>
                     <p>Soy estudiante de Gestión y Desarrollo de Software experto en Frontend, Internet of Things, y Backend. Desarrollé la página web de Bibi Decora, así como la campaña de Google Ads, creando oportunidades de ventas en el mundo digital.
                     Soy una persona estratégica, autodidacta y proactiva, me gusta estudiar y aprender sobre nuevas tecnologías y como estas van cambiando nuestra manera de ver y hacer las cosas.</p>
                     <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;