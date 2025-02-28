import React from "react";
import "../styles/CourseItem.css"; // Import CSS file
import courseImage from "../assets/images/it_course.png";

const CourseItem = () => {
  return (
    <div className="course-card">
      {/* Course Image */}
      <div className="course-card-image">
        <img src={courseImage} alt="Course Thumbnail" />
      </div>

      {/* Course Details */}
      <div className="course-card-details">
        <div className="course-card-meta">
          <span className="course-card-category">Course</span>
          <span className="course-card-divider">|</span>
          <span className="course-card-university">
            University of Maryland, College Park
          </span>
        </div>

        <h2 className="course-card-title">Cybersecurity for Everyone</h2>

        <div className="course-card-warning">
          <span className="course-card-warning-icon">⚠</span>
          <span>
            Need more time to complete this course? Push your estimated end date
            to <strong>3/15/2025 PDT</strong> and achieve your goal.
          </span>
        </div>
      </div>

      {/* Course Actions */}
      <div className="course-card-actions">
        <button className="course-card-button">
          Go To Course <span className="course-card-arrow">→</span>
        </button>
        <a href="#" className="course-card-link">
          Push end date
        </a>
      </div>

      {/* Options Menu */}
      <div className="course-card-options">⋮</div>
    </div>
  );
};

export default CourseItem;
