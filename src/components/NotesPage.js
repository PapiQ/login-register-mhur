import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "../styles/NotesPage.css";
import { FaBookOpen } from "react-icons/fa";

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">UI/UX</span> Design
        </h1>
        <p>By Daniel Balcha</p>
        <div className="hero-content-buttons">
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

// Course
const Course = () => {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    { title: "Lesson 01: Introduction about XD", duration: "1h" },
    { title: "Lesson 02: Introduction about XD", duration: "1h 54min" },
    { title: "Lesson 03: Introduction about XD", duration: "30 mins" },
    { title: "Lesson 04: Introduction about XD", duration: "30 mins" },
  ];

  return (
    <div className="course-page-container">
      <aside className="course-sidebar">
        {/* <button className="course-back-button">&#8592;</button> */}
        <div className="course-back-card">
          <button className="course-back-button">&larr;</button>
        </div>
        <div className="course-sidebar-content">
          <div className="course-section">
            <h3>6 Lessons</h3>
            <p>2h 54min</p>
            <ul className="course-lesson-list">
              {lessons.map((lesson, index) => (
                <li
                  key={index}
                  className={
                    index === activeLesson ? "course-active-lesson" : ""
                  }
                  onClick={() => setActiveLesson(index)}
                >
                  <FaBookOpen className="lesson-icon" />
                  {lesson.title} <span>{lesson.duration}</span>
                </li>
              ))}
            </ul>
            {/* <ul className="course-lesson-list">
              <li className="course-active-lesson">
                <FaBookOpen className="lesson-icon" />
                Lesson 01: Introduction about XD <span>1h</span>
              </li>
              <li>
                <FaBookOpen className="lesson-icon" />
                Lesson 02: Introduction about XD <span>1h 54min</span>
              </li>
              <li>
                <FaBookOpen className="lesson-icon" />
                Lesson 03: Introduction about XD <span>30 mins</span>
              </li>
              <li>
                <FaBookOpen className="lesson-icon" />
                Lesson 04: Introduction about XD <span>30 mins</span>
              </li>
            </ul> */}
          </div>
          <div className="course-section">
            <h3>12 PRACTICE QUIZZES</h3>
            <p>6h 54min</p>
            <ul className="course-quiz-list">
              {Array(12)
                .fill()
                .map((_, i) => (
                  <li key={i}>
                    <FaBookOpen className="lesson-icon" />
                    Lesson 01: Introduction about XD <span>30 mins</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </aside>
      <main className="course-content">
        <h2>About the Course: UI/UX Design</h2>
        <p>
          Master the art of designing user-friendly and visually engaging
          digital experiences. This course covers the fundamentals of UI (User
          Interface) and UX (User Experience) design, including wireframing,
          prototyping, usability testing, and design principles.
        </p>
        <p>
          Learn how to create intuitive websites and apps that provide seamless
          user experiences. Whether you're a beginner or looking to refine your
          skills, this course will equip you with industry-relevant tools like
          Figma, Adobe XD, and more.
        </p>
        <h3>You'll learn how to:</h3>
        <ul className="course-learning-list">
          <li>&#9989; Conduct user research and understand audience needs</li>
          <li>
            &#9989; Create wireframes and prototypes to visualize your ideas
          </li>
          <li>
            &#9989; Apply UI principles like typography, color theory, and
            layout
          </li>
          <li>
            &#9989; Improve UX with usability testing and feedback analysis
          </li>
          <li>
            &#9989; Use industry-standard tools like Figma, Adobe XD, and Sketch
          </li>
        </ul>
      </main>
    </div>
  );
};

const NotesPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Course />
      <Footer />
    </>
  );
};

export default NotesPage;
