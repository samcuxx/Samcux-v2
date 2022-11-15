import React, { useEffect, useState } from 'react'
import AnimatedLettersFast from '../RuberBand/RubberBand';
import './Header.css'
const Header = ({headerTitle , des}) => {

  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const introName = headerTitle.split("");
 

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
{des}    </p>
  </div>
  )
}

export default Header