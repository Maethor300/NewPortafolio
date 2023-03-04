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
                        <img className="milogo" src={IMG} alt="" />
                    </div>
                </div>
                <div className="about__content">
                     <div className="about__cards">
                        <article className="about__card">
                            <RiAwardFill className="about__icon"/>
                           <h5>Experience</h5>
                           <small>1 Year Working</small>
                        </article>
                        {/* <article className="about__card">
                            <FiUsers className="about__icon"/>
                           <h5>Clients</h5>
                           <small>200+ worldwide</small>
                        </article> */}
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                           <h5>Projects</h5>
                           <small>2+ plus completed</small>
                        </article>
                     </div>
                     <p>I'm a Software Management and Development student specializing in Frontend, Internet of Things, and Backend. I developed the Bibi Decora website, as well as the Google Ads campaign, creating sales opportunities in the digital world.

I am a strategic, self-taught, and proactive person, I like to study and learn about new technologies and how they are changing our way of seeing and doing things.</p>
                     <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;