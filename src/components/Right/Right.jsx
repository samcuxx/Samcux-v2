import React, { useEffect, useState } from "react";
import AnimatedLettersFast from "../RuberBand/RubberBand";
import './Right.css'
const Right = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const emailText = "samuellove228@gmail.com".split("");
 


  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });

  return (
    <div className="right">
      <div className="right-container">
        <div className="email-text">
        <AnimatedLettersFast
            letterClass={letterClass}
            strArray={emailText}
            idx={15}
          />
          </div>
        <div className="vline"></div>
      </div>
    </div>
  );
};

export default Right;
