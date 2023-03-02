import React from "react";
import './Portafolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portafolio = () => {
    return (
        <section id='portafolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portafolio__container">
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com" className="btn">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a>
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com" className="btn">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a>
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com" className="btn">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a>
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com" className="btn">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a>
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com" className="btn">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a>
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com/Maethor300" className="btn">Github</a>
                    <a href="https://github.com/Maethor300" className="btn btn-primary" target='_blank'>Live Now</a>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Portafolio;