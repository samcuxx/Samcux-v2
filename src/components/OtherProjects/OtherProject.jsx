import React, { useState } from "react";
import "./OtherProject.css";
import OtherProjectEach from "./OtherProjectEach";
import List from "./List";
import { Link } from "react-router-dom";
import { Bounce, Zoom } from "react-awesome-reveal";
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
            {List.slice(0, numberOfItems).map((item) => {
              return (
                <OtherProjectEach
                  title={item.title}
                  description={item.description}
                  skill={item.skill}
                />
              );
            })}
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
