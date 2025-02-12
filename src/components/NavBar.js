import React from "react";
import LogoSmall from "../assets/images/logo_small.png";
import Avatar from "../assets/images/female_avatar.png";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../styles/Navbar.css";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const isMobile = useMediaQuery("(max-width: 768px)");

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
        </a>{" "}
        {isMobile && (
          <div className="auth-buttons">
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
          </div>
        )}
        {isMobile && isAuthenticated && (
          <div className="profile" ref={dropdownRef}>
            <img className="profile-picture" src={Avatar} />
            <div onClick={() => setToggleDropdown((prev) => !prev)}>
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
        )}
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
          {!isMobile && isAuthenticated && (
            <li style={{ marginRight: "auto" }}>
              <div className="profile" ref={dropdownRef}>
                <img className="profile-picture" src={Avatar} />
                <div onClick={() => setToggleDropdown((prev) => !prev)}>
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

          {!isMobile && !isAuthenticated && (
            <button className="login-btn">
              <Link to="/login">Login </Link>{" "}
            </button>
          )}
          {!isMobile && !isAuthenticated && (
            <button className="register-btn">
              <Link to="/register">Register</Link>
            </button>
          )}
        </ul>

        {/* <div class="right-section">
          <ul class="auth-links">
            <div class="hamburger" onClick={toggleMenu}>
              &#9776;
            </div>
            <li>
              {!isAuthenticated && (
                <button className="login-btn">
                  <Link to="/login">Login </Link>{" "}
                </button>
              )}
            </li>
            <li>
              {!isAuthenticated && (
                <button className="register-btn">
                  <Link to="/register">Register</Link>
                </button>
              )}
            </li>
          </ul>
        </div> */}

        {/* <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button> */}

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
