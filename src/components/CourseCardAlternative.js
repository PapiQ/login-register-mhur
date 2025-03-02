import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CourseCardAlternative.css";
import Itcourse from "../assets/images/it_course.png";
import UniversityLogo from "../assets/images/University_of_Maryland.png";

const CourseCardAlternative = () => {
  const navigate = useNavigate();

  const gotToCourse = () => {
    navigate("/learn/ui-ux-design");
  };
  return (
    <div className="course-card-alternative" onClick={gotToCourse}>
      <span className="course-card-alternative-badge">Free</span>
      {/* Image Section */}
      <div className="course-card-alternative-image">
        <img src={Itcourse} alt="Cybersecurity Course" />
      </div>

      <div className="course-card-alternative-info">
        <div className="course-card-alternative-university">
          <img
            src={UniversityLogo}
            alt="University Logo"
            className="course-card-alternative-university-logo"
          />
          <span>University of Maryland, College Park</span>
        </div>

        <h3 className="course-card-alternative-title">
          Cybersecurity for Everyone
        </h3>
        <p className="course-card-alternative-category">Course</p>
      </div>
    </div>
  );
};

export default CourseCardAlternative;
