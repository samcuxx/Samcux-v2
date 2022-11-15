import React from "react";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";
import "./Work.css";
const Work = () => {
  return (
    <div className="work-layout">
      <Left />
      <Header headerTitle="My Portfolio" des="Comming Soon" />
      <Contact />
      <Right />
    </div>
  );
};

export default Work;
