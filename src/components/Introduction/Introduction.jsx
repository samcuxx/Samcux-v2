import React from 'react'
import { Spring } from 'react-spring'
import './Introduction.css'

const Introduction = () => {


  return (

    <section className="intro-center-main">
    <div className="center-container">
      <h3 className="intro-intro">Hi, my name is</h3>
      <h1 className="intro-name">Brittany Chiang.</h1>
      <h1 className="intro-main">I build things for the web.</h1>
      <h3 className="intro-sub">
        I’m a software engineer specializing in building (and occasionally{" "}
    designing) exceptional digital experiences. Currently, I’m
        focused on  building accessible, human-centered products at{" "}
        <a className='hover-underline-animation' href="">Upstatement</a> .
      </h3>
      <h3 className="intro-button">Check out my course !</h3> 
    </div>
  </section>
  )
}

export default Introduction