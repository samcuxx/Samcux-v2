import React from "react";
import { Link } from "react-router-dom";
import {Fade} from "react-awesome-reveal"
import List from "../../config/List";
// import { Zoom } from "react-reveal";
import "./GridContainer.css";
import GridContainerEach from "./GridContainerEach";
const GridContainer = () => {
  return (
    <div className="GridContainer-main">
      <ul className="grid-container">
      {/* <Fade direction="up" damping={0.1} duration="500" cascade> */}
              {List.map((item) => {
                return (
                  <GridContainerEach
                    siteLink={item.siteLink}
                    projectLinkGithub={item.projectLinkGithub}
                    title={item.title}
                    description={item.description}
                    skill={item.skill}
                    projectImage={item.projectImage}
                  />
                );
              })}
            {/* </Fade> */}

        {/* <GridContainerEach /> */}
        
      </ul>

      <h3 className="intro-button archive-btn">
        <Link to="/archive">Archive</Link>
      </h3>
    </div>
  );
};

export default GridContainer;
