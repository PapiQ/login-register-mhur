import React from "react";
import LogoSmall from "../assets/images/logo_small.png";
import Avatar from "../assets/images/female_avatar.png";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dropdownRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    console.log("logged out");
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false);
        setIsMenuOpen(false);
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
            <Link to="#">Home</Link>
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
          {isAuthenticated && (
            <li>
              <div className="profile" ref={dropdownRef}>
                <img className="profile-picture" src={Avatar} />
                <div
                  className="name-center"
                  onClick={() => setToggleDropdown((prev) => !prev)}
                >
                  Lina <div class="arrow-down"></div>
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
          )}
          {!isAuthenticated && (
            <button className="login-btn">
              <Link to="/login">Login </Link>{" "}
            </button>
          )}
          {!isAuthenticated && (
            <button className="register-btn">
              <Link to="/register">Register</Link>
            </button>
          )}
        </ul>

        {/* <div
          className="profile"
          ref={dropdownRef}
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <img className="profile-picture" src={Avatar} />
        </div> */}

        {/* {toggleDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">My Profile</div>
            <div className="dropdown-item">Settings</div>
            <button
              className="dropdown-signout"
              onClick={() => setToggleDropdown(false)}
            >
              Sign Out
            </button>
          </div>
        )} */}

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {isMenuOpen && (
          <div className="hamburger-menu" ref={dropdownRef}>
            <Link to="#">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Blog</Link>
            <Link to="#">About</Link>

            {/* Profile inside Hamburger Menu */}
            {/*  <div
              className="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              <img className="profile-picture" src={Avatar} />
            </div>

            {toggleDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">My Profile</div>
                <div className="dropdown-item">Settings</div>
                <button
                  className="dropdown-signout"
                  onClick={() => setToggleDropdown(false)}
                >
                  Sign Out
                </button>
              </div>
            )} */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
