import React from 'react'
import profile from "../../assets/images/profileImage.jpg";

const AboutMain = () => {
  return (
    <div>
       <div className="about-main">
        <div className="about-main-left">
          <div className="about-main-left-top">
            <p>
              My name is Samuel Amoah. I am a full stack developer with over 4
              years of rock-solid experience in building scalable products.
            </p>
            <p>
              Besides participating in many tech programs where I have been
              trained to have both technical and soft skills, I have acquired
              high level programming knowledge from taking online courses on{" "}
              <a className="hover-underline-animation" href="#">
                {" "}
                Udemy
              </a>
              <a className="hover-underline-animation" href="#">
                {" "}
                Pluralsight
              </a>{" "}
              and{" "}
              <a className="hover-underline-animation" href="#">
                Udacity
              </a>
              , bagging a Node.js certificate, Expert in JavaScript IQ test and
              JavaScript Certificate respectively.
            </p>
            <p>
              When I am not coding, I am either playing chess, soccer, video
              game, or watching a movie. Other times I am reading or learning a
              new language or framework.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <div className="about-main-left-buttom">
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Motoko</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Wordpress</li>
              <li>TypeScript</li>
              <li>Html</li>
              <li>CSS</li>
              <li>EJS</li>
           
            </ul>
          </div>
        </div>
        <div className="about-main-right">
          <div className="about-image-cover">
            <img className="about-main-right-image" src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMain
