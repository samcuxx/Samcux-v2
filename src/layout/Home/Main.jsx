import React, { useEffect } from "react";
import Center from "../../components/Center/Center";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
