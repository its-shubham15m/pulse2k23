import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import LogoIcon from "../../img/pulse-logo-png1.2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navLinksRef = useRef(null);

  const handleClick = () => {
    setMenu((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      navLinksRef.current &&
      !navLinksRef.current.contains(e.target) &&
      menu
    ) {
      setMenu(false);
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClick);
  
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClickOutside]); // add handleClickOutside here
  

  return (
    <div className="navbar">
      <div className="navbar-content container">
        <div className="logo">
          <img src={LogoIcon} alt="" className="logo-img" />
        </div>
        <div
          ref={navLinksRef}
          className={menu ? "navlinks navlinks-active" : "navlinks"}
        >
          <div className="navlink" onClick={handleClick}>
            <a href="#about">About</a>
          </div>
          <div className="navlink" onClick={handleClick}>
            <a href="#venue">Date & Venue</a>
          </div>
          <div className="navlink" onClick={handleClick}>
            <a href="#rules">Rules</a>
          </div>
          <div className="navlink" onClick={handleClick}>
            <a href="#prizes">Prizes</a>
          </div>
          <div className="navlink" onClick={handleClick}>
            <a href="#agenda">Schedule</a>
          </div>
          <div className="navlink" onClick={handleClick}>
            <a href="#contact">Contact</a>
          </div>
          <div className="navlink main-btn nav-btn" onClick={handleClick}>
            <a
              href="https://forms.gle/37vn6pdfGodQWmH57"
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
          </div>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={menu ? faXmark : faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
