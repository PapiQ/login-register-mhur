import React from "react";
import Avatar from "../assets/images/avatar.jpg";
import Itcourse from "../assets/images/it_course.png";
import "../styles/CardCourse.css";

const Card = (props) => {
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
        <div className="card-footer">
          <div className="card-user">
            <img src={Avatar} alt="User" className="user-avatar" />
            <span className="user-name">Lina</span>
          </div>
          <div className="card-price">
            <span className="price-old">$100</span>
            <span className="price-new">$80</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
