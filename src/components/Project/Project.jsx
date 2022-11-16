import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./Project.css";
import ProjectContainer from "./ProjectContainer";
import ProjectContainerLast from "./ProjectContainerLast";
import ProjectFlip from "./ProjectFlip";
const Project = () => {
  return (
    <div id="work" className="projects">
        <h2 className="head">
      <Slide direction="left" duration="300" cascade>
          <div className="span">
            <span>02.</span>
          </div>
          <div className="head-name">Some Things I’ve Built</div>
      </Slide>
      <Slide direction="right" duration="300">

          <div className="hline"></div>
      </Slide>
        </h2>
      <div className="section">
        <div className="project-main-main">
          <Fade  damping={0.2}>
            <ProjectContainer />
            <ProjectFlip />
            <ProjectContainerLast />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Project;
