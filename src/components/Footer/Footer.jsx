import React from "react"
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'; 
import MiLogo1 from '../../assets/MiLogo.jpg'
const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">MAETHOR</a>
            {/* <img className="mi__logo" src={MiLogo1} alt="" /> */}
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#Services">Services</a></li> */}
                <li><a href="#portafolio">Portafolio</a></li>
                {/* <li><a href="#Testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/daviderazo" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Maethor300" target="_blank"><AiFillGithub/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; MAETHOR TECHONOLGY. All rights reserved.</small>
            </div>
        </footer>
    )
}
export default Footer;