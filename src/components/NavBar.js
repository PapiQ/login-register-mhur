import React from "react";
import LogoSmall from "../logo_small.png";
import avatar from "../avatar.jpg";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="#">Courses</Link>
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
              <img className="profile-picture" src={avatar} />
              <div
                className="name-center"
                onClick={() => setToggleDropdown((prev) => !prev)}
              >
                Lina <div class="arrow-down"></div>
                {toggleDropdown && (
                  <div className="dropdown">
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
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
