import React from "react";
import "./About.css";
import profile from "../../assets/images/profile.jpg";
import profileGreen from "../../assets/images/profilegreen.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="head">
        <div className="span">
          <span>01.</span>
        </div>
        <div className="head-name">About Me</div>
        <div className="hline"></div>
      </h2>
      <div className="about-main">
        <div className="about-main-left">
          <div className="about-main-left-top">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at
              <a className="hover-underline-animation" href="#">
                {" "}
                an advertising agency
              </a>
              ,
              <a className="hover-underline-animation" href="#">
                {" "}
                a start-up
              </a>
              ,
              <a className="hover-underline-animation" href="#">
                {" "}
                a huge corporation
              </a>
              , and
              <a className="hover-underline-animation" href="">
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at
              <a className="hover-underline-animation" href="#">
                Upstatement
              </a>
              for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <div className="about-main-left-buttom">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Html</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className="about-main-right">
          <div className="about-image-cover">
          <img className="about-main-right-image" src={profile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
