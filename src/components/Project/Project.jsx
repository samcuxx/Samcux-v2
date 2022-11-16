import React from "react";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import "./Project.css";
import ProjectContainer from "./ProjectContainer";
import ProjectContainerLast from "./ProjectContainerLast";
import ProjectFlip from "./ProjectFlip";
const Project = () => {
  return (
    <div id="work" className="projects">
      <JackInTheBox direction="up" duration="800" cascade>
        <h2 className="head">
          <div className="span">
            <span>02.</span>
          </div>
          <div className="head-name">Some Things I’ve Built</div>
          <div className="hline"></div>
        </h2>
      </JackInTheBox>
      <div className="section">
        <div className="project-main-main">
          <Fade direction="up" duration="500" damping={0.2}>
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
