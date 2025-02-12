import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/images/avatar.jpg";
import Itcourse from "../assets/images/it_course.png";
import "../styles/CourseCard.css";

const LessonCard = (props) => {
  return (
    <div className="course-card">
      <div className="card-image">
        <img src={Itcourse} alt="AWS Certified solutions Architect" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <span className="card-category">Design</span>
          <span className="card-duration">3 Month</span>
        </div>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
