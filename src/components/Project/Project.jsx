import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Project.css";
import ProjectContainer from "./ProjectContainer";
import ProjectContainerLast from "./ProjectContainerLast";
import ProjectFlip from "./ProjectFlip";
const Project = () => {
  return (
    <div id="work" className="projects">
        <h2 className="head">
        <Fade direction="left" duration="300" cascade>
          <div className="span">
            <span>02.</span>
          </div>
          <div className="head-name">Some Things I’ve Built</div>
      </Fade>
      <Fade direction="right">

          <div className="hline"></div>
      </Fade>
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
