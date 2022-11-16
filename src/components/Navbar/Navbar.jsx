import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import Resume from "../../assets/pdf/cv.pdf";
import { useScroll } from "./UseScroll";
import { Bounce, Fade } from "react-awesome-reveal";
const Navbar = () => {
  const [btnState, setbtnState] = useState(false);
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

  function handleMenuIconClick(event) {
    setbtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "change" : "";

  return (
    <nav style={homieScroll()}>
      <div className="container">
        <div className="logo">
          <Bounce>
            <Link to="/">
              <img className="logo-logo" width="50px" src={logo} alt="" />
            </Link>
          </Bounce>
        </div>
        <div className={btnState ? "nav-links-mobile" : "links"}>
          <ul>
            <Fade direction="down" duration={200}  cascade damping={0.8}>
              <li>
                <Link to="/about">
                  <span>01.</span>About
                </Link>
              </li>
              <li>
                <Link to="/work">
                  <span>02.</span>Portfolio
                </Link>
              </li>
              <li>
                <Link to="/archive">
                  <span>03.</span>Archive
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>04.</span>Contact
                </Link>
              </li>
              <li>
                <Link
                  id="button"
                  className="button"
                  target="_blank"
                  download
                  to={Resume}
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
            </Fade>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
