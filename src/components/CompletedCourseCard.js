import React, { useState, useRef, useEffect } from "react";
import "../styles/CompletedCourseCard.css";
import Itcourse from "../assets/images/it_course.png";

const CompletedCourseCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="completed-course-card">
      <div className="completed-course-info">
        <img
          src={Itcourse}
          alt="Course Thumbnail"
          className="completed-course-image"
        />
        <div className="completed-course-details">
          <p className="completed-course-type">Course | Google</p>
          <h2 className="completed-course-title">
            Foundations of User Experience (UX) Design
          </h2>
          <p className="completed-course-status">
            <span className="completed-status-icon">✅</span> Great Work! You
            have passed all requirements.
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="completed-course-divider-vertical"></div>
      <hr className="completed-course-divider-horizontal" />
      <div className="completed-course-actions">
        <button className="completed-verify-btn">Verify My ID</button>
        <a href="#" className="completed-rate-link">
          Rate
        </a>
      </div>

      {/* Options Button (3 Dots) */}
      <div className="completed-course-item-options" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="completed-course-item-options-btn"
        >
          ⋮
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="completed-course-item-dropdown">
            <li onClick={() => alert("Rate Clicked")}>Rate</li>
            <li onClick={() => alert("Share Clicked")}>Share</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CompletedCourseCard;
