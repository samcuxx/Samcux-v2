import React, { useState } from "react";
import "./OtherProject.css";
import OtherProjectEach from "./OtherProjectEach";
import List from '../../config/List'
import { Link } from "react-router-dom";
import { Bounce, Fade } from "react-awesome-reveal";
const OtherProject = () => {
  const [showMore, setshowMore] = useState(false);
  // const [btnText, setbtnText] = useState('View More')

  const numberOfItems = showMore ? List.length : 6;

  return (
    <section>
      <div className="otherprojectMain">
        <div className="otherproject-heading">
          <Bounce>
            <h2>Other Noteworthy Projects</h2>
            <Link to="/archive" className="hover-underline-animation">
              view the archive
            </Link>
          </Bounce>
        </div>
        <div className="otherproject-container">
          <ul className="otherproject-container-ul">
            <Fade direction="up" damping={0.1} duration="500" cascade>
              {List.slice(0, numberOfItems).map((item) => {
                return (
                  <OtherProjectEach
                    siteLink={item.siteLink}
                    projectLinkGithub={item.projectLinkGithub}
                    title={item.title}
                    description={item.description}
                    skill={item.skill}
                  />
                );
              })}
            </Fade>
          </ul>
        </div>
        <div className="otherbtn">
          <Bounce>
            <h3 onClick={() => setshowMore(!showMore)} className="intro-button">
              {showMore ? "Show Less" : "Show More"}
            </h3>
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default OtherProject;
