import React from 'react';
import "./home.css";
import Me from "../../assets/pic-modified.png";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name"> Ritesh kumar </h1>
        <span className="home__education"> I'm a Front-End Developer</span>

        <HeaderSocial />

        <a href="#contact" className="btn">Hire Me</a>
        
        <ScrollDown />

      </div>
      <Shapes />
    </section>
  )
}

export default Home;
