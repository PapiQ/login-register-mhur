import React, { useState, useRef, useEffect } from "react";
import "../styles/InProgressCourseCard.css";
import courseImage from "../assets/images/it_course.png";

const InProgressCourseCard = () => {
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
    <div className="in-progress-course-item">
      {/* Course Image */}
      <div className="in-progress-course-item-image">
        <img src={courseImage} alt="Course Thumbnail" />
      </div>

      {/* Course Content */}
      <div className="in-progress-course-item-content">
        <div className="in-progress-course-item-meta">
          <span>
            <span className="in-progress-course-item-category">Course</span>
            <span className="in-progress-course-item-divider">|</span>
          </span>

          <span className="in-progress-course-item-university">
            University of Maryland, College Park
          </span>
        </div>

        <h2 className="in-progress-course-item-title">
          Cybersecurity for Everyone
        </h2>

        {/* <div className="course-item-warning">
          <span className="course-item-warning-icon">⚠</span>
          <span>
            Need more time to complete this course? Push your estimated end date
            to <strong>3/15/2025 PDT</strong> and achieve your goal.
          </span>
        </div> */}
        <div className="in-progress-course-progress-bar-container">
          <div className="in-progress-course-progress-line">
            <div className="in-progress-course-progress-bar">
              <div
                className="in-progress-course-progress-fill"
                style={{
                  width: `${(2 / 7) * 100}%`,
                }}
              ></div>
            </div>
            &nbsp;
            <span>30%</span>
          </div>
          <span className="in-progress-course-progress-text">
            Overall Progress
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="in-progress-course-item-divider-line"></div>

      {/* Course Actions */}
      {/* <div className="in-progress-course-item-actions">
        <button className="in-progress-course-item-button">
          <span className="in-progress-course-item-button-text">
            Go To Course{" "}
          </span>
          <span className="in-progress-course-item-arrow">→</span>
        </button>
        <a href="#" className="in-progress-course-item-link">
          Push end date
        </a>
      </div> */}

      {/* Right Section - Next Up */}
      <div className="next-up">
        <p className="next-up-title">Next Up</p>
        <div>
          <span className="icon">📄</span>
          <div className="next-up-item">
            <a
              href="/learn/ui-ux-design/supplement/note/9"
              className="next-up-link"
              target="_blank"
            >
              Week 1 Quiz
            </a>
            <div className="next-up-meta-container">
              <p className="next-up-meta">Module 1 | Graded</p>
              <p className="next-up-meta">Assignment • 10 min</p>
            </div>
          </div>
        </div>
      </div>

      {/* Options Button (3 Dots) */}
      <div className="in-progress-course-item-options" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="in-progress-course-item-options-btn"
        >
          ⋮
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="in-progress-course-item-dropdown">
            <li onClick={() => alert("Upgrade Clicked")}>Upgrade</li>
            <li onClick={() => alert("Rate Clicked")}>Rate</li>
            <li onClick={() => alert("Share Clicked")}>Share</li>
            <li onClick={() => alert("Unenroll Clicked")}>Unenroll</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default InProgressCourseCard;
