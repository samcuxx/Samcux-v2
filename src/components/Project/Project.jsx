import React from "react";
import "./Project.css";
import ProjectContainer from "./ProjectContainer";
import ProjectFlip from "./ProjectFlip";
const Project = () => {
  return (
    <div id="work" className="projects">
      <h2 className="head">
        <div className="span">
          <span>02.</span>
        </div>
        <div className="head-name">Some Things I’ve Built</div>
        <div className="hline"></div>
      </h2>
      <div className="section">
        <div className="project-main-main">
          <ProjectContainer/>
          <ProjectContainer/>
          <ProjectContainer/>
         
          {/* <ProjectFlip/> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
