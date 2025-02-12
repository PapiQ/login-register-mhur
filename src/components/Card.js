import React from "react";
import Itcourse from "../assets/images/it_course.png";
import Avatar from "../assets/images/avatar.jpg";
import "../styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={Itcourse} alt="My Image" />
      <h3>{props.title}</h3>
      <div className="card-profile">
        <a href="/">
          <img className="profile-picture-card" src={Avatar} />
        </a>
        <div style={{ alignSelf: "center", paddingLeft: "12px" }}>Bob</div>
      </div>
      <div class="bar-grey">
        <div class="progress-bar-blue"></div>
      </div>
      <p>Lesson 5 of 7</p>
    </div>
  );
}

export default Card;
