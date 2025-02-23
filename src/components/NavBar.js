import React from "react";
import LogoSmall from "../assets/images/logo_small.png";
import Avatar from "../assets/images/female_avatar.png";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import HamburgerMenu from "./HamburgerMenu";
import DegreeSubmenu from "./DegreeSubmenu";
import DatascienceSubmenu from "./DatascienceSubmenu";
import useMediaQuery from "../hooks/useMediaQuery";
import "../styles/Navbar.css";
import Logo from "../assets/images/logo_85x48.png";
import CertificateSubmenu from "./CertificateSubmenu";

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
    clearTimeout(dropdownTimeoutRef.current); // Prevent premature hiding
    setActiveCategory(category);
  };

  const handleCategoryMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 300); // Short delay before hiding
  };

  /*   const certificates = {
    "Data Science": [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Deep_Learning_AI_Logo.png",
        title: "DeepLearning.AI Data Engineering",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        title: "IBM Data Analyst",
        details: "No prerequisites • Self-paced",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        title: "Google Data Analytics",
        details: "No prerequisites • Self-paced",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        title: "Google Advanced Data Analytics",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        title: "IBM Data Science",
        details: "No prerequisites • Self-paced",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        title: "Microsoft Power BI Data Analyst",
      },
    ],
    Business: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_CC_Express_logo.svg",
        title: "Adobe Graphic Designer",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        title: "Google Project Management",
        details: "No prerequisites • Self-paced",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_CC_Express_logo.svg",
        title: "Adobe Marketing Specialist",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        title: "Google Digital Marketing & E-commerce",
        details: "No prerequisites • Self-paced",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Meta_Platforms_Inc._logo.svg",
        title: "Meta Social Media Marketing",
        details: "No prerequisites • Self-paced",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        title: "Microsoft Business Analyst",
      },
    ],
    "Computer Science": [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        title: "Microsoft Python Development",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Deep_Learning_AI_Logo.png",
        title: "Generative AI for Software Development",
      },
    ],
  };

  const moreProgramsCertificate = [
    { name: "Launch your career", link: "#" },
    { name: "Prepare for a certification", link: "#" },
    { name: "Advance your career", link: "#" },
  ];

  const degrees = {
    "Data Science": [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Indian_Statistical_Institute_Logo.svg/120px-Indian_Statistical_Institute_Logo.svg.png",
        university: "Indian Statistical Institute",
        program: "Postgraduate Diploma in Applied Statistics",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Leeds_University_Crest.png/120px-Leeds_University_Crest.png",
        university: "University of Leeds",
        program: "MSc Data Science (Statistics)",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Northeastern_University_seal.svg",
        university: "Northeastern University",
        program: "Master of Science in Data Analytics Engineering",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Illinois_Institute_of_Technology_seal.svg",
        university: "Illinois Tech",
        program: "Master of Data Science",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/University_of_Pittsburgh_seal.svg/120px-University_of_Pittsburgh_seal.svg.png",
        university: "University of Pittsburgh",
        program: "Master of Data Science",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/8/88/IIT_Guwahati_Logo.svg",
        university: "Indian Institute of Technology Guwahati",
        program: "Bachelor of Science in Data Science & AI",
      },
    ],
    Business: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/O.P._Jindal_Global_University_seal.svg/120px-O.P._Jindal_Global_University_seal.svg.png",
        university: "O.P. Jindal Global University",
        program: "MBA in Business Analytics",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/SPJIMR_logo.svg/120px-SPJIMR_logo.svg.png",
        university: "S.P. Jain Institute of Management and Research",
        program: "PG Diploma in Management (PGDM) Online",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/IIT_Roorkee_Logo.svg",
        university: "IIT Roorkee",
        program: "Executive MBA",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/3/38/University_of_Huddersfield_logo.svg",
        university: "University of Huddersfield",
        program: "MSc Management",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/HEC_Paris_logo.svg",
        university: "HEC Paris",
        program: "Executive MSc & MSc in Innovation and Entrepreneurship",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/UIUC_logo.svg",
        university: "University of Illinois Urbana-Champaign",
        program: "Master of Science in Management (iMSM)",
      },
    ],
    "Computer Science": [
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/1/15/University_of_London_logo.svg",
        university: "University of London",
        program: "Master of Science in Cyber Security",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Heriot-Watt_University_logo.svg/120px-Heriot-Watt_University_logo.svg.png",
        university: "Heriot-Watt University",
        program: "MSc Computer Science",
      },
    ],
  };
  
  const moreDegrees = [
    { name: "Public Health", link: "#" },
    { name: "Engineering", link: "#" },
    { name: "Bachelor's Degrees", link: "#" },
    { name: "Master's Degrees", link: "#" },
  ]; */

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
              {/*  <div className="scrollable-content"> */}
              {/* Dropdown content goes here */}
              <ul>
                <li className="submenu-item-highlight">Goals</li>
                <li>Take a free course</li>
                <li
                  onMouseEnter={() => handleCategoryMouseEnter("earn-a-degree")}
                  onMouseLeave={handleCategoryMouseLeave}
                >
                  <span>
                    <span>Earn a degree</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="8 4 16 12 8 20"></polyline>
                      </svg>
                    </span>
                  </span>
                  {activeCategory === "earn-a-degree" && (
                    <div className="nested-dropdown">
                      <DegreeSubmenu
                        setToggleExploreDropdown={setToggleExploreDropdown}
                      />
                    </div>
                  )}
                </li>

                <li
                  onMouseEnter={() =>
                    handleCategoryMouseEnter("earn-a-certificate")
                  }
                  onMouseLeave={handleCategoryMouseLeave}
                >
                  {" "}
                  <span>
                    <span>Earn a certificate</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="8 4 16 12 8 20"></polyline>
                      </svg>
                    </span>
                  </span>
                  {activeCategory === "earn-a-certificate" && (
                    <div className="nested-dropdown">
                      <CertificateSubmenu
                        setToggleExploreDropdown={setToggleExploreDropdown}
                      />
                    </div>
                  )}
                </li>
                <li>Find your new career</li>
                <li className="submenu-item-highlight">Subjects</li>
                <li
                  onMouseEnter={() => handleCategoryMouseEnter("data-science")}
                  onMouseLeave={handleCategoryMouseLeave}
                >
                  <span>
                    <span>Data Science</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="8 4 16 12 8 20"></polyline>
                      </svg>
                    </span>
                  </span>
                  {activeCategory === "data-science" && (
                    <div className="nested-dropdown">
                      <DatascienceSubmenu
                        setToggleExploreDropdown={setToggleExploreDropdown}
                      />
                    </div>
                  )}
                </li>
                {/* Add more categories as needed */}
              </ul>
              {/*  </div> */}
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
