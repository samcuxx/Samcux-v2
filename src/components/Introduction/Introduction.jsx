import React, { useEffect, useState } from "react";
import { Fade} from "react-awesome-reveal";
import { Link } from "react-router-dom";
import AnimatedLettersFast from "../RuberBand/RubberBand";

import "./Introduction.css";

const Introduction = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const introName = "Samuel Amoah.".split("");
  const introTitle = "I build things for the web.".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });

  return (
    <section className="intro-center-main">
      <div className="center-container">
        <Fade direction="up" duration={300}  cascade>
          <h3 className="intro-intro">Hello, I’m</h3>
          <h1 className="intro-name">
            <AnimatedLettersFast
              letterClass={letterClass}
              strArray={introName}
              idx={15}
            />
          </h1>
          <h1 className="intro-main">
            <AnimatedLettersFast
              letterClass={letterClass}
              strArray={introTitle}
              idx={15}
            />
          </h1>
          <h3 className="intro-sub">
            I’m a software engineer specializing in several programming tools to
            deliver quality results to client. I have expert knowledge in
            <Link>frontend engineering</Link>,<Link> softwares testing</Link>{" "}
            and
            <Link> web3</Link> development.
          </h3>
          <h3 className="intro-button">
            <a
              target="-blank"
              href="https://www.youtube.com/channel/UC9SxlcEpkHFkG0msmzw1MCA"
            >
              Check out my course !
            </a>{" "}
          </h3>
        </Fade>
      </div>
    </section>
  );
};

export default Introduction;
