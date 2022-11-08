import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { useScroll } from "./UseScroll";
const Navbar = () => {
  const [btnState, setbtnState] = useState(false)
  const { y, x, scrollDirection } = useScroll();


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



  function handleMenuIconClick(event){
  
    setbtnState(btnState => !btnState);
  }


  let toggleClassCheck = btnState ? "change" : ""

  return (
    <nav style={homieScroll()}>
      <div className="container">
        <div className="logo">
          <a href="/">
          <img width="50px" src={logo} alt="" />
          </a>
        </div>
        <div className={btnState ? "nav-links-mobile" : "links"}>
          <ul>
            <li>
              <a href="#about">
                <span>01.</span>About
              </a>
            </li>
            <li style={{display:"none"}}>
              <a href="#">
                <span>02.</span>Experience
              </a>
            </li>
            <li>
              <a href="#work">
                <span>03.</span>Work
              </a>
            </li>
            <li>
              <a to="#contact">
                <span>04.</span>Contact
              </a>
            </li>
            <li>
              <Link id="button" className="button" href="#">
                Resume
              </Link>
            </li>
            <div id="menu-btn" onClick={()=>handleMenuIconClick()}  className={`menu-icon ${toggleClassCheck}`}>
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
