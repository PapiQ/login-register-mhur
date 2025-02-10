import React from "react";
import LogoSmall from "../assets/images/logo_small.png";
import Avatar from "../assets/images/avatar.jpg";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img className="logo-small" src={LogoSmall} />
        </a>
      </div>
      <div className="navbar-right">
        <ul
          /* className="nav-links"  */ className={`nav-links ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <div className="profile" ref={dropdownRef}>
              <img className="profile-picture" src={Avatar} />
              <div
                className="name-center"
                onClick={() => setToggleDropdown((prev) => !prev)}
              >
                Lina <div class="arrow-down"></div>
                {/* <div className="dropdown">
                    <Link to="#">My Profile</Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                    >
                      Sign Out
                    </button>
                  </div> */}
                {toggleDropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item">My Profile</div>
                    <div className="dropdown-item">Settings</div>
                    <button
                      className="dropdown-signout"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="hamburger-menu">
            <a href="#home">Home</a>
            <a href="#about">Courses</a>
            <a href="#services">Careers</a>
            <a href="#contact">Blog</a>
            <a href="#contact">About</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
