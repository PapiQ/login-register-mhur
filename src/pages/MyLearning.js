import React from "react";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import InProgressCourseCard from "../components/InProgressCourseCard";
import CompletedCourseCard from "../components/CompletedCourseCard";
import "../styles/MyLearning.css";

const MyLearning = ({ isFaded }) => {
  /* const [isFaded, setIsFaded] = useState(false); */
  const [activeTab, setActiveTab] = useState("in-progress");

  return (
    <>
      {" "}
      {/* <NavBar setIsFaded={setIsFaded} /> */}
      <div className={`page-content ${isFaded ? "faded" : ""}`}>
        <div className="my-learning-container">
          <h2 className="my-learning-title">My Learning</h2>
          <div className="learning-tabs">
            <button
              className={`tab-button ${
                activeTab === "in-progress" ? "active" : ""
              }`}
              onClick={() => setActiveTab("in-progress")}
            >
              In Progress
            </button>
            <button
              className={`tab-button ${
                activeTab === "completed" ? "active" : ""
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
          </div>
          <br />
          {activeTab === "in-progress" && <InProgressCourseCard />}
          {activeTab === "completed" && <CompletedCourseCard />}
        </div>
      </div>
    </>
  );
};

export default MyLearning;
