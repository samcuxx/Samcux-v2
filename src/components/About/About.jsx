import React from "react";
import { JackInTheBox, Slide } from "react-awesome-reveal";
import "./About.css";
import AboutMain from "./AboutMain";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="head">
        <Slide direction="left" cascade>
          <div className="span">
            <span>01.</span>
          </div>
          <div className="head-name">About Me</div>
        </Slide>
        <Slide direction="right" cascade>
          <div className="hline"></div>
        </Slide>
      </h2>
      <AboutMain />
    </section>
  );
};

export default About;
