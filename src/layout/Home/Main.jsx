import React from "react";
import Center from "../../components/Center/Center";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <div className="content-main">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Main;
