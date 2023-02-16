import React from "react"
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {SiRedux} from 'react-icons/si';
import {RiEnglishInput} from 'react-icons/ri';
import {DiNodejsSmall} from 'react-icons/di';
import {SiSequelize} from 'react-icons/si';
import {AiOutlineApi} from 'react-icons/ai';
import {SiExpress} from 'react-icons/si';
import {DiPostgresql} from 'react-icons/di';
import {AiOutlineConsoleSql} from 'react-icons/ai';
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                     <h3>Frontend Development</h3>
                     <div className="experience__content">
                        <article className="experience__details">
                        <AiFillHtml5 className="experience__details-icon"/>
                        <div> <h4>HTML5</h4>
                        <small className="text-light">Experienced</small></div>
                       
                        </article>
                        <article className="experience__details">
                        <DiCss3Full className="experience__details-icon"/>
                        <div><h4>CSS3</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <DiJavascript1 className="experience__details-icon"/>
                        <div><h4>JavaScript</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <DiReact className="experience__details-icon"/>
                        <div><h4>React</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <SiRedux className="experience__details-icon"/>
                        <div> <h4>Redux</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <RiEnglishInput className="experience__details-icon"/>
                        <div><h4>English B1</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                     </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="experience__backend">
                     <h3>Backend Development</h3>
                     <div className="experience__content">
                     <article className="experience__details">
                        <DiNodejsSmall className="experience__details-icon"/>
                        <div> <h4>Node.Js</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <SiSequelize className="experience__details-icon"/>
                        <div><h4>Sequelize</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <AiOutlineApi className="experience__details-icon"/>
                        <div><h4>REST API</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <SiExpress className="experience__details-icon"/>
                        <div> <h4>EXPRESS</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <DiPostgresql className="experience__details-icon"/>
                        <div><h4>PostgresQl</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                        <article className="experience__details">
                        <AiOutlineConsoleSql className="experience__details-icon"/>
                        <div><h4>SQL</h4>
                        <small className="text-light">Experienced</small></div>
                        </article>
                     </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;