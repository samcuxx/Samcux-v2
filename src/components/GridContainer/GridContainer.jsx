import React from "react";
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
        <h3 className="intro-button archive-btn">Archive</h3>
    </div>
  );
};

export default GridContainer;
