import React from "react";
import {  Fade } from "react-awesome-reveal";
import "./About.css";
import AboutMain from "./AboutMain";

const About = () => {
  return (
    <section id="about"  className="about">
      <h2 className="head">
        <Fade direction="left" duration="300" cascade>
          <div className="span">
            <span>01.</span>
          </div>
          <div className="head-name">About Me</div>
        </Fade>
        <Fade direction="right"  cascade>
          <div className="hline"></div>
        </Fade>
      </h2>
      <AboutMain />
    </section>
  );
};

export default About;
