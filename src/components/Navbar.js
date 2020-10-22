import React, { useState } from "react";
import "./Navbar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navRide = () => {
    const rideDepth = 130 + document.getElementsByClassName("about-container")[0].clientHeight;
    window.scrollTo(0, rideDepth);
    closeMobileMenu();
  };
  const navAbout = () => {
    window.scrollTo(0, 80);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Cory Flynn
          </button>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <button className="nav-links" onClick={navAbout}>
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button to="/skilift" className="nav-links" onClick={navRide}>
                Ride To Snow
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
