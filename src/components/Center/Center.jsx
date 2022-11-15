import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
import OtherProject from "../OtherProjects/OtherProject";
import Project from "../Project/Project";
import "./Center.css";

const Center = () => {
  return (
    <div className="center-items">
      <Introduction />
      <About />
      <Project />
      <OtherProject/>
      <Contact/>
    </div>
  );
};

export default Center;
