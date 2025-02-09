import React from "react";
import Itcourse from "../it_course.png";
import avatar from "../avatar.jpg";

function Card(props) {
  return (
    <div className="card">
      <img src={Itcourse} alt="My Image" />
      <h2>{props.title}</h2>
      <div className="card-profile">
        <a href="/">
          <img className="profile-picture-card" src={avatar} />
        </a>
        <div className="name-center">Lina</div>
      </div>
      <div class="bar-grey">
        <div class="progress-bar-blue"></div>
      </div>
      <p>Lesson 5 of 7</p>
    </div>
  );
}

export default Card;
