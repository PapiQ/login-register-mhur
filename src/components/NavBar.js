import React from "react";
import LogoSmall from "../assets/images/logo_small.png";
import Avatar from "../assets/images/female_avatar.png";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import HamburgerMenu from "./HamburgerMenu";
import useMediaQuery from "../hooks/useMediaQuery";
import "../styles/Navbar.css";
import Logo from "../assets/images/logo_85x48.png";

const Navbar = ({ navbarRef, showStickyNavbar, setIsFaded }) => {
  const { isAuthenticated } = useAuth();

  const isMobile = useMediaQuery("(max-width: 768px)");

  /* const [isMenuOpen, setIsMenuOpen] = useState(false); */
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleLanguageDropdown, setToggleLanguageDropdown] = useState(false);
  const [toggleExploreDropdown, setToggleExploreDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  /* const toggleMenu = () => setIsMenuOpen(!isMenuOpen); */

  const dropdownRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    console.log("logged out");
    logout();
    navigate("/");
  };

  const handleDashboardNavigation = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef?.current || !navbarRef?.current) {
        return; // ✅ Exit early if refs are undefined
      }

      // Close the dropdown only if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false);
      }

      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setToggleExploreDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, navbarRef]); // ✅ Dependencies to avoid stale state

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setToggleExploreDropdown(true);
    /* setIsFaded(true); */
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setToggleExploreDropdown(false);
      /* setIsFaded(false); */
    }, 200); // Small delay to prevent flickering
  };

  const handleCategoryMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <nav
      ref={navbarRef}
      /* className="navbar" */ className={`navbar ${
        showStickyNavbar ? "hidden" : ""
      }`}
    >
      <HamburgerMenu />
      <div className="navbar-left">
        <Link href="/">
          <img className="logo-small" src={Logo} />
        </Link>{" "}
        <div
          className="navbar-explore-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button>
            <span>
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#005357"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 8l8 8 8-8"></path>
              </svg>
            </span>
          </button>
          {toggleExploreDropdown && (
            <div
              className="explore-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="scrollable-content">
                {/* Dropdown content goes here */}
                <ul>
                  <li
                    onMouseEnter={() => handleCategoryMouseEnter("category1")}
                    onMouseLeave={handleCategoryMouseLeave}
                  >
                    <a href="/category1">Category 1</a>
                    {activeCategory === "category1" && (
                      <div className="nested-dropdown">
                        <ul>
                          <li>
                            <a href="/category1/sub1">Subcategory 1</a>
                          </li>
                          <li>
                            <a href="/category1/sub2">Subcategory 2</a>
                          </li>
                          <li>
                            <a href="/category1/sub3">Subcategory 3</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleCategoryMouseEnter("category2")}
                    onMouseLeave={handleCategoryMouseLeave}
                  >
                    <a href="/category2">Category 2</a>
                    {activeCategory === "category2" && (
                      <div className="nested-dropdown">
                        <ul>
                          <li>
                            <a href="/category2/sub1">Subcategory 1</a>
                          </li>
                          <li>
                            <a href="/category2/sub2">Subcategory 2</a>
                          </li>
                          <li>
                            <a href="/category2/sub3">Subcategory 3</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleCategoryMouseEnter("category3")}
                    onMouseLeave={handleCategoryMouseLeave}
                  >
                    <a href="/category3">Category 3</a>
                    {activeCategory === "category3" && (
                      <div className="nested-dropdown">
                        <ul>
                          <li>
                            <a href="/category3/sub1">Subcategory 1</a>
                          </li>
                          <li>
                            <a href="/category3/sub2">Subcategory 2</a>
                          </li>
                          <li>
                            <a href="/category3/sub3">Subcategory 3</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-search-container">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Find your next course, topics, or instructors . . ."
          />
          <button className="navbar-search-button">
            <svg
              className="navbar-search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="#005357"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="16" y1="16" x2="22" y2="22"></line>
            </svg>
          </button>
        </div>
      </div>
      {!isMobile && (
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <Link to="#">Online Degrees</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <button>
                <span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M2 12h20"></path>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"></path>
                    </svg>
                  </span>
                  <span>English</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#005357"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 8l8 8 8-8"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </li>
            <li>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
            </li>
            {isAuthenticated && (
              <li className="profile-container">
                <div className="profile" ref={dropdownRef}>
                  <img className="profile-picture" src={Avatar} />
                  <div onClick={() => setToggleDropdown((prev) => !prev)}>
                    Lina{" "}
                    <div
                      className={`${
                        toggleDropdown ? "arrow-up" : "arrow-down"
                      }`}
                    ></div>
                    {toggleDropdown && (
                      <div className="profile-dropdown-menu">
                        <div
                          className="profile-dropdown-item"
                          onClick={handleDashboardNavigation}
                        >
                          Dashboard
                        </div>
                        <div className="profile-dropdown-item">Settings</div>
                        <button
                          className="profile-dropdown-signout"
                          onClick={() => {
                            setToggleDropdown(false);
                            signOut();
                          }}
                        >
                          Log Out
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            )}

            {!isAuthenticated && (
              <>
                <button
                  className="login-btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>

                <button
                  className="register-btn"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
