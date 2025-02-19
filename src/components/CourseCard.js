import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa"; // Import clock icon
import { BsFillBookmarkFill } from "react-icons/bs"; // Bookmark icon for category
import "../styles/CourseCard.css";
import Itcourse from "../assets/images/it_course.png";
import Avatar from "../assets/images/avatar.jpg";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const gotToCourse = () => {
    navigate(course.courseUrl);
  };

  return (
    <div className="course-card">
      {/* Image Section */}
      <div className="course-card-image-container">
        <img src={Itcourse} alt={course.title} className="course-card-image" />
        {course.bestSeller && (
          <span className="best-seller-badge">Best Seller</span>
        )}
      </div>

      {/* Course Info */}
      <div className="course-card-body">
        <div className="course-card-meta">
          <span className="course-category">
            <BsFillBookmarkFill className="meta-icon" /> {course.category}
          </span>
          <span className="course-duration">
            <FaClock className="meta-icon" /> {course.duration}
          </span>
        </div>

        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>

        {/* Instructor & Price */}
        <div className="course-card-footer">
          <div className="instructor">
            <img
              src={Avatar}
              alt={course.instructor}
              className="instructor-image"
            />
            <span className="instructor-name">{course.instructor}</span>
          </div>
          <div className="course-price">
            <span className="old-price">${course.oldPrice}</span>
            <span className="new-price">${course.newPrice}</span>
          </div>
        </div>

        {/* Call to Action Button */}
        <button className="course-button" onClick={gotToCourse}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
