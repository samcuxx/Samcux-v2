import React from "react";
import {  JackInTheBox } from "react-awesome-reveal";
import "./About.css";
import AboutMain from "./AboutMain";

const About = () => {
  return (
    <section id="about" className="about">
      <JackInTheBox direction="up" duration="800"  cascade>
      <h2 className="head">
        <div className="span">
          <span>01.</span>
        </div>
        <div className="head-name">About Me</div>
        <div className="hline"></div>
      </h2>
      </JackInTheBox>
     <AboutMain/>
    </section>
  );
};

export default About;
