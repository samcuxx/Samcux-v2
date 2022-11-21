import React, { useEffect } from "react";
import Contact from "../../components/Contact/Contact";
import GridContainer from "../../components/GridContainer/GridContainer";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";
import "./Work.css";
const Work = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="content-main work-layout">
      <Left />
      <Header headerTitle="My Portfolio" des="Some of my Works" />
      <GridContainer/>
      <Contact />
      <Right />
    </div>
  );
};

export default Work;
