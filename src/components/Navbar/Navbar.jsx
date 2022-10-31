import React, { useEffect } from "react";
import logo from "../../logo.svg";
import "./Navbar.css";
import { useScroll } from "./UseScroll";
const Navbar = () => {
  const {y , x, scrollDirection } = useScroll();
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };
const homieScroll =() =>{
  if (window.pageYOffset) {
  return  scrollDirection === "down" ? styles.active : styles.hidden
  }

}


  return (
    <nav style={homieScroll()}>
      <div className="container">
        <div className="logo">
          <img width="70px" src={logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#" >
                <span>01.</span>About
              </a>
            </li>
            <li>
              <a href="#">
                <span>02.</span>Experience
              </a>
            </li>
            <li>
              <a href="#">
                <span>03.</span>Work
              </a>
            </li>
            <li>
              <a href="#">
                <span>04.</span>Contact
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
