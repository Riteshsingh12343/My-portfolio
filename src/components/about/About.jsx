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
                    <p className="about__description">To secure a challenging position in the field of data analysis and technology, where I can leverage my technical 
skills in Python, SQL, Power BI, and Excel to analyze complex datasets, derive actionable insights, and contribute 
to data-driven decision-making. I aim to grow as a professional by continuously learning and applying new 
technologies to solve real-world problems.</p>
                    <a href="" className="btn">Download CV</a>
                </div>
                
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">MySql</h3>
                                <span className="skills__number  ">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Power BI </h3>
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




