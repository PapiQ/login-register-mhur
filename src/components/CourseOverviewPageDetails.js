import React, { useState, useEffect, useRef } from "react";
import "../styles/CourseOverviewPageDetails.css";

const CourseDetails = ({
  setNavbarSticky,
  isMobile,
  showStickyBottomBuyNowButton,
}) => {
  const [activeTab, setActiveTab] = useState("about");
  const tabsRef = useRef(null);
  const sectionsRef = useRef({});
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(true);
  const [originalTabsPosition, setOriginalTabsPosition] = useState(null);

  useEffect(() => {
    if (tabsRef.current && originalTabsPosition === null) {
      setOriginalTabsPosition(tabsRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!tabsRef.current || originalTabsPosition === null) return;

      const currentScrollY = window.scrollY;
      const navbar = document.querySelector(".navbar"); // ✅ Get navbar dynamically
      const navbarHeight = navbar ? navbar.offsetHeight : 100; // ✅ Fallback to 100px if not found

      if (currentScrollY >= originalTabsPosition - navbarHeight) {
        setIsTabsSticky(true);
        setNavbarSticky(false);
      } else {
        setIsTabsSticky(false);
        setNavbarSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [originalTabsPosition, setNavbarSticky]);

  // ✅ Adjust scroll position dynamically based on navbar height
  const handleTabClick = (event, tab, isSticky) => {
    event.preventDefault();
    setActiveTab(tab);

    const section = sectionsRef.current[tab];
    if (section) {
      const navbar = document.querySelector(".navbar"); // ✅ Get navbar dynamically
      /* const navbarHeight = navbar ? navbar.offsetHeight : 30; */ // ✅ Default to 100px if missing
      const navbarHeight = 10; // ✅ Default to 100px if missing

      const stickyTabsHeight = 50;
      // ✅ Different offsets for sticky vs. original tabs
      const yOffset = isSticky
        ? 50 - stickyTabsHeight
        : -80 - stickyTabsHeight - 80;
      /* const yOffset = -navbarHeight - 60;  */ // ✅ Adds extra spacing
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="course-details-container">
      {/* ✅ Sticky Tabs Container */}
      <div
        ref={tabsRef}
        className={`tabs-container ${
          isTabsSticky && !isMobile ? "sticky-tabs" : ""
        }`}
      >
        <div className="tabs-header">
          {isTabsSticky && !isMobile && (
            <h2 className="tabs-title">Introduction to Web Development</h2>
          )}
          {isTabsSticky && !isMobile && (
            <button className="buy-now-btn">Buy Now</button>
          )}
        </div>
        {isTabsSticky && <div className="tabs-header-divider"></div>}
        {!isMobile && (
          <ul className="tabs">
            {[
              "about",
              "outcomes",
              "modules",
              "recommendations",
              "testimonials",
              "reviews",
            ].map((tab) => (
              <li
                key={tab}
                className={activeTab === tab ? "tab active-tab" : "tab"}
                onClick={(event) => handleTabClick(event, tab, false)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            ))}
          </ul>
        )}
        {!isTabsSticky && !isMobile && (
          <div className="tabs-footer-divider"></div>
        )}
      </div>

      {/* ✅ Tab Content: Each section has its own div */}
      <div
        ref={(el) => (sectionsRef.current["about"] = el)}
        className="tab-section"
      >
        <h2>What you'll learn</h2>
        <p>✔️ Describe the Web Application Development Ecosystem...</p>
      </div>

      <div
        ref={(el) => (sectionsRef.current["outcomes"] = el)}
        className="tab-section"
      >
        <h2>Learning Outcomes</h2>
        <ul>
          <li>Understand front-end and back-end development.</li>
          <li>Use HTML, CSS, and JavaScript to build interactive web pages.</li>
        </ul>
      </div>

      <div
        ref={(el) => (sectionsRef.current["modules"] = el)}
        className="tab-section"
      >
        <h2>Course Modules</h2>
        <ul>
          <li>
            <strong>Module 1:</strong> Introduction to Web Development
          </li>
          <li>
            <strong>Module 2:</strong> HTML & CSS Basics
          </li>
        </ul>
      </div>

      <div
        ref={(el) => (sectionsRef.current["recommendations"] = el)}
        className="tab-section"
      >
        <h2>Recommended Courses</h2>
        <p>Other courses you might enjoy:</p>
        <ul>
          <li>Advanced JavaScript for Web Development</li>
          <li>React and Modern Frontend Frameworks</li>
        </ul>
      </div>

      <div
        ref={(el) => (sectionsRef.current["testimonials"] = el)}
        className="tab-section"
      >
        <h2>Student Testimonials</h2>
        <blockquote>"This course helped me land my first job!"</blockquote>
      </div>

      <div
        ref={(el) => (sectionsRef.current["reviews"] = el)}
        className="tab-section"
      >
        <h2>Course Reviews</h2>
        <p>⭐⭐⭐⭐⭐ - 4.8/5 (2,500+ Reviews)</p>
      </div>
      {showStickyBottomBuyNowButton && isMobile && (
        <div className="sticky-buy-now-button-bottom-navbar">
          <button className="enroll-btn">
            Buy Now {/* <span>Starts Feb 19</span> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
