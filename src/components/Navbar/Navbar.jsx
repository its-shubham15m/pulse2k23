import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import LogoIcon from "../../img/pulse-logo-png1.2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (e) => {
    if (navLinksRef.current && !navLinksRef.current.contains(e.target) && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar">
      <div className="navbar-content container">
        <div className="logo">
          <img src={LogoIcon} alt="Logo" className="logo-img" />
        </div>
        <div ref={navLinksRef} className={`navlinks ${menuOpen ? "navlinks-active" : ""}`}>
          <div className="navlink" onClick={toggleMenu}>
            <a href="#about">About</a>
          </div>
          <div className="navlink" onClick={toggleMenu}>
            <a href="#venue">Date & Venue</a>
          </div>
          <div className="navlink" onClick={toggleMenu}>
            <a href="#rules">Rules</a>
          </div>
          <div className="navlink" onClick={toggleMenu}>
            <a href="#prizes">Prizes</a>
          </div>
          <div className="navlink" onClick={toggleMenu}>
            <a href="#agenda">Schedule</a>
          </div>
          <div className="navlink" onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </div>
          <div className="navlink main-btn nav-btn" onClick={toggleMenu}>
            <a
              href="https://forms.gle/37vn6pdfGodQWmH57"
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
