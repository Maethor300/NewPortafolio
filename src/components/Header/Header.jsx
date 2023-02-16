import React from "react";
import './Header.css';
import CTA from './CTA.jsx';
import IMG from '../../assets/DSC_3856 (2).JPG';
import HeaderSocials from "./HeaderSocials.jsx";
const Header = () => {
    return (
         <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>David Mendoza</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA/>  
                <HeaderSocials/>
                <div className="me">
                    
                    <img src={IMG} alt="myself" />
                </div>
                <a href="#contact" className="scroll__down"> Scroll Down</a>
               
            </div>
         </header>
    )
}
export default Header;