import React from "react";
import "../styles/ProgressCard.css";
import Avatar from "../assets/images/avatar.jpg";
import Itcourse from "../assets/images/it_course.png";

const ProgressCard = ({ course }) => {
  return (
    <div className="progress-card">
      {/* Course Image */}
      <div className="progress-card-image-container">
        <img
          src={Itcourse}
          alt={course.title}
          className="progress-card-image"
        />
      </div>

      {/* Course Details */}
      <div className="progress-card-body">
        <h3 className="progress-card-title">{course.title}</h3>

        {/* Instructor Section */}
        <div className="progress-card-instructor">
          <img
            src={Avatar}
            alt={course.instructor}
            className="instructor-avatar"
          />
          <span className="instructor-name">{course.instructor}</span>
        </div>

        {/* Progress Bar and Text */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  (course.completedLessons / course.totalLessons) * 100
                }%`,
              }}
            ></div>
          </div>
          <span className="progress-text">
            Lesson {course.completedLessons} of {course.totalLessons} completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
