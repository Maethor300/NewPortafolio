import React from "react";
import './Portafolio.css';
// import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import DOGS from '../../assets/dogs.png';
import VideoGames from '../../assets/videogames.png';
import MyOwn from '../../assets/myown.png';
import CloneGoogle from '../../assets/googleimg.png';
const Portafolio = () => {
    return (
        <section id='portafolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portafolio__container">
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img className="dogs"src={DOGS} alt="DOGS" />
                    </div>
                    <h3>Dog API Website</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com/Maethor300/Dogs-Project" className="btn">Github</a>
                    {/* <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a> */}
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img className="games" src={VideoGames} alt="" />
                    </div>
                    <h3>VideoGames API Website</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com/Maethor300/Proyecto-Juegos" className="btn">Github</a>
                    {/* <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a> */}
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img className="Own" src={MyOwn} alt="" />
                    </div>
                    <h3>My Own Website</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com/Maethor300/NewPortafolio" className="btn">Github</a>
                    {/* <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a> */}
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img className = "google"src={CloneGoogle} alt="" />
                    </div>
                    <h3>Clone Google</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com/Maethor300/ClonGoogle" className="btn">Github</a>
                    {/* <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a> */}
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img className="img5" src={IMG5} alt="" />
                    </div>
                    <h3>Very Soon   </h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com" className="btn">Github</a>
                    {/* <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Now</a> */}
                    </div>
                </article>
                <article className="portafolio__item">
                    <div className="portafolio__item-image">
                        <img className="img6" src={IMG6} alt="" />
                    </div>
                    <h3>Very Soon</h3>
                    <div className="portafolio__item-cta">
                    <a href="https://github.com/Maethor300" className="btn">Github</a>
                    {/* <a href="https://github.com/Maethor300" className="btn btn-primary" target='_blank'>Live Now</a> */}
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Portafolio;