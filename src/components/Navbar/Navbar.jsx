import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { useScroll } from "./UseScroll";
const Navbar = () => {
  const [btnState, setbtnState] = useState(false)
  const { scrollDirection } = useScroll();


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
          <Link to="/">
          <img className="logo-logo" width="50px" src={logo} alt="" />
          </Link>
        </div>
        <div className={btnState ? "nav-links-mobile" : "links"}>
          <ul>
            <li>
              <Link to="#about">
                <span>01.</span>About
              </Link>
            </li>
            <li>
              <Link to="/archive">
                <span>02.</span>Archive
              </Link>
            </li>
            <li>
              <Link to="#work">
                <span>03.</span>Work
              </Link>
            </li>
            <li>
              <Link to="#contact">
                <span>04.</span>Contact
              </Link>
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
