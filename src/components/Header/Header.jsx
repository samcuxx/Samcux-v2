import React, { useEffect, useState } from 'react'
import AnimatedLettersFast from '../RuberBand/RubberBand';
import './Header.css'
const Header = () => {

  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const introName = "Archive".split("");
 

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });


  return (
    <div id="header">
    <h1 className="header-title">
    <AnimatedLettersFast
            letterClass={letterClass}
            strArray={introName}
            idx={15}
          />

      </h1>
    <p className="header-description">
      A big list of things I’ve worked on
    </p>
  </div>
  )
}

export default Header