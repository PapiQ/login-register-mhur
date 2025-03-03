import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Avatar from "../assets/images/female_avatar.png";
import "../styles/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeMenu, setActiveMenu] = useState("main"); // Controls which menu is shown

  const { isAuthenticated } = useAuth();

  const { logout } = useAuth();
  const navigate = useNavigate();

  // Handle screen resizing dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Hide component on larger screens
  if (!isMobile) return null;

  const signOut = () => {
    console.log("logged out");
    logout();
    navigate("/");
  };

  return (
    <div className="menu-container">
      {/* Hamburger Button */}
      <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>
      {/*   {isOpen && ( */}
      <>
        {/* Sidebar Menu - Initially Hidden */}
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ×
          </button>

          {/* Coursera Logo */}
          <h2 className="logo">Mhur</h2>

          {/* Main Menu */}
          {activeMenu === "main" && (
            <ul className="menu-list">
              {isAuthenticated && (
                <li onClick={() => setActiveMenu("profile")}>
                  <span>
                    <div className="profile">
                      <img className="profile-picture" src={Avatar} />
                      <div>Lina</div>
                    </div>
                  </span>
                  <span className="arrow">›</span>
                </li>
              )}
              <li onClick={() => setActiveMenu("explore")}>
                <span>Explore</span>
                <span className="arrow">›</span>
              </li>
              <li onClick={() => setActiveMenu("learning")}>
                <span>My Learning</span>
                <span className="arrow">›</span>
              </li>
              <li>
                <a href="#">For Businesses</a>
              </li>
              <li>
                <a href="#">For Governments</a>
              </li>
              <li>
                <a href="#">For Universities</a>
              </li>
            </ul>
          )}

          {/* Explore Submenu */}
          {activeMenu === "explore" && (
            <div className="submenu">
              <button
                className="back-btn"
                onClick={() => setActiveMenu("main")}
              >
                ← Main Menu
              </button>
              <h3 className="submenu-title">Goals</h3>
              <ul>
                <li>
                  <a href="#">Take a free course</a>
                </li>
                <li>
                  <a href="#">Earn a Degree</a>
                </li>
                <li>
                  <a href="#">Earn a Certificate</a>
                </li>
                <li>
                  <a href="#">Find your new career</a>
                </li>
              </ul>
              <h3 className="submenu-title">Subjects</h3>
              <ul>
                <li>
                  <a href="#">Data Science</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Computer Science</a>
                </li>
                <li>
                  <a href="#">Information Technology</a>
                </li>
                <li>
                  <a href="#">Language Learning</a>
                </li>
                <li>
                  <a href="#">Health</a>
                </li>
                <li>
                  <a href="#">Personal Development</a>
                </li>
                <li>
                  <a href="#">Physical Science and Engineering</a>
                </li>
                <li>
                  <a href="#">Social Sciences</a>
                </li>
                <li>
                  <a href="#">Arts and Humanities</a>
                </li>
                <li>
                  <a href="#">Math and Logic</a>
                </li>
              </ul>
            </div>
          )}

          {/* My Learning Submenu */}
          {activeMenu === "learning" && (
            <div className="submenu">
              <button
                className="back-btn"
                onClick={() => setActiveMenu("main")}
              >
                ← Main Menu
              </button>
              <h3 className="submenu-title">My Learning</h3>
              <ul>
                <li>
                  <a href="#">In Progress</a>
                </li>
                <li>
                  <a href="#">Completed</a>
                </li>
                <li>
                  <a href="#">Saved Courses</a>
                </li>
              </ul>
            </div>
          )}

          {/* My Learning Submenu */}
          {isAuthenticated && activeMenu === "profile" && (
            <div className="submenu">
              <button
                className="back-btn"
                onClick={() => setActiveMenu("main")}
              >
                ← Main Menu
              </button>
              <h3 className="submenu-title">Your Account</h3>
              <ul>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">My Purchases</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Updates</a>
                </li>
                <li>
                  <a href="#">Accomplishments</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#" onClick={() => signOut()}>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Login and Register Links */}
          {!isAuthenticated && (
            <div className="sidebar-auth-links">
              <Link to="/register" className="sidebar-auth-link-register">
                Register
              </Link>
              <Link to="/login" className="sidebar-auth-link-login">
                Login
              </Link>
            </div>
          )}
        </div>
        {/* Click outside to close */}
        {/*  {isOpen && (
          <div className="overlay" onClick={() => setIsOpen(false)}></div>
        )} */}
      </>
      {/*   )} */}
    </div>
  );
};

export default HamburgerMenu;
