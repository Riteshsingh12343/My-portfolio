import React from "react";
import "./about.css";
import Image from "../../assets/pic-modified.png"
import AboutBox from "./AboutBox";

const About =()=> {
    return(
       <section className="about container section" id="about">
        <h2 className="section__title"> About Me</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">Passionate About Web Development Goal is To Achieve A Good Position
By Doing Satisfying Work in The It Field, Strongly Focused To Complete The
Task In Fast-faced Environment</p>
                    <a href="" className="btn">Download CV</a>
                </div>
                
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number  ">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Java</h3>
                                <span className="skills__number">50%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> JavaScript</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage javaScript"></span>
                            </div>
                        </div>
                    </div>


            </div>
        </div>

        <AboutBox />
       </section>
    )
}
export default About ;




