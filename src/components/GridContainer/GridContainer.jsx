import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import { Zoom } from "react-reveal";
import "./GridContainer.css";
import GridContainerEach from "./GridContainerEach";
const GridContainer = () => {
  return (
    <div className="GridContainer-main">
      <ul className="grid-container">
        <GridContainerEach />
        <GridContainerEach />
        <GridContainerEach />
        <GridContainerEach />
        <GridContainerEach />
        <GridContainerEach />
      </ul>

      <h3 className="intro-button archive-btn">
        <Link to="/archive">Archive</Link>
      </h3>
    </div>
  );
};

export default GridContainer;
