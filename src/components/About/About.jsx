import React from "react";
import "./About.css";
import AboutMain from "./AboutMain";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="head">
        <div className="span">
          <span>01.</span>
        </div>
        <div className="head-name">About Me</div>
        <div className="hline"></div>
      </h2>
     <AboutMain/>
    </section>
  );
};

export default About;
