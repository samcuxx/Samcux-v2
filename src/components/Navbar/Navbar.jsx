import gsap from "gsap";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { useScroll } from "./UseScroll";
const Navbar = () => {
  const [btnState, setbtnState] = useState(false);
  const { y, x, scrollDirection } = useScroll();

  let homie = useRef();
  let navlinkseach = useRef();

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };
  const homieScroll = () => {
    if (window.pageYOffset) {
      return scrollDirection === "down" ? styles.active : styles.hidden;
    }
  };

  function handleMenuIconClick(event) {
    setbtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "change" : "";

  useEffect(() => {
    gsap.from(".logo-img", {
      duration: 2,
      y: -10,
      backgroundColor: "blue",
      ease: "bounce",
    });

    gsap.from(".linkani", { duration: 1, opacity: 0, y: -150 ,stagger:0.25 });
  });

  return (
    <nav style={homieScroll()}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img
              useRef={homie}
              className="logo-img"
              width="50px"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className={btnState ? "nav-links-mobile" : "links"}>
          <ul>
            <li>
              <a className="linkani" useRef={navlinkseach} href="#about">
                <span>01.</span>About
              </a>
            </li>
            <li>
              <a className="linkani" useRef={navlinkseach} href="/archive">
                <span>02.</span>Archive
              </a>
            </li>
            <li>
              <a className="linkani" useRef={navlinkseach} href="#work">
                <span>03.</span>Work
              </a>
            </li>
            <li>
              <a className="linkani" useRef={navlinkseach} href="#contact">
                <span>04.</span>Contact
              </a>
            </li>
            <li>
              <Link
                useRef={navlinkseach}
                id="button"
                className="button linkani"
                href="#"
              >
                Resume
              </Link>
            </li>
            <div
              id="menu-btn"
              onClick={() => handleMenuIconClick()}
              className={`menu-icon ${toggleClassCheck}`}
            >
              <div class="menu-icon-container" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
