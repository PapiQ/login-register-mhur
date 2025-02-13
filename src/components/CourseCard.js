import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/images/avatar.jpg";
import Itcourse from "../assets/images/it_course.png";
import "../styles/CourseCard.css";
import { FaClock } from "react-icons/fa";

const CourseCard = (props) => {
  const navigate = useNavigate();

  const gotToCourse = () => {
    navigate("/course/1");
  };

  return (
    <div
      className="course-card"
      style={{ gridRow: props.lesson === true ? "1/5" : "1/7" }}
    >
      {props.trending && <div className="trending-sticker">Trending</div>}
      <div className="card-image">
        <img src={Itcourse} alt="AWS Certified solutions Architect" />
      </div>
      {/* <div className="card-content"> */}
      <div className="card-header">
        <span className="card-category">
          <div className="square-container">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          Design
        </span>
        <span className="card-duration">
          <FaClock style={{ marginRight: "5px" }} />3 Month
        </span>
      </div>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      {!props.lesson && (
        <div className="card-footer">
          <div className="card-user">
            <img src={Avatar} alt="User" className="user-avatar" />
            <span className="user-name">Bob</span>
          </div>
          <div className="card-price">
            <span className="price-old">$100</span>
            <span className="price-new">$80</span>
          </div>
        </div>
      )}
      {!props.lesson && (
        <button onClick={gotToCourse} className="course-btn">
          Get Started
        </button>
      )}
    </div>
    /*  </div> */
  );
};

export default CourseCard;
