import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/NotesPage.css";
import { FaBookOpen } from "react-icons/fa";

// Hero Section
const HeroSection = () => {
  const [courseHeader, setCourseHeader] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/course-header")
      .then((response) => response.json())
      .then((data) => setCourseHeader(data))
      .catch((error) => console.error("Error fetching course header:", error));
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        {courseHeader ? (
          <>
            <h1>
              <span className="highlight">{courseHeader.title}</span>
            </h1>
            <p>{courseHeader.instructor}</p>
            <div className="hero-content-buttons">
              <button className="cta-btn">{courseHeader.buttonText}</button>
            </div>
          </>
        ) : (
          <p>Loading course header...</p>
        )}
      </div>
    </section>
  );
};

// Course
const Course = () => {
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/courses/uiux")
      .then((response) => response.json())
      .then((data) => {
        setLessons(data.lessons);
        setQuizzes(data.quizzes);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  const loadContent = (type, index) => {
    const id = type === "lesson" ? lessons[index].id : quizzes[index].id;
    fetch(`https://api.example.com/content/${id}`)
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error fetching content:", error));
  };

  /* const lessons = [
    { title: "Lesson 01: Introduction about XD", duration: "1h" },
    { title: "Lesson 02: Introduction about XD", duration: "1h 54min" },
    { title: "Lesson 03: Introduction about XD", duration: "30 mins" },
    { title: "Lesson 04: Introduction about XD", duration: "30 mins" },
  ]; */

  return (
    <div className="course-page-container">
      <aside className="course-sidebar">
        <div className="course-back-card">
          <button className="course-back-button">&larr;</button>
        </div>
        <div className="course-sidebar-content">
          <div className="course-section">
            {/* <h3>6 Lessons</h3>
            <p>2h 54min</p> */}
            <h3>{lessons.length} Lessons</h3>
            <p>
              {lessons.reduce((sum, lesson) => sum + lesson.duration, 0)} min
            </p>
            {/* <ul className="course-lesson-list">
              {lessons.map((lesson, index) => (
                <li
                  key={index}
                  className={
                    index === activeLesson ? "course-active-lesson" : ""
                  }
                  onClick={() => {
                    setActiveLesson(index);
                    setActiveQuiz(null);
                  }}
                >
                  <FaBookOpen className="lesson-icon" />
                  {lesson.title} <span>{lesson.duration}</span>
                </li>
              ))}
            </ul> */}
            <ul className="course-lesson-list">
              {lessons.map((lesson, index) => (
                <li
                  key={index}
                  className={
                    index === activeLesson ? "course-active-lesson" : ""
                  }
                  onClick={() => {
                    setActiveLesson(index);
                    setActiveQuiz(null);
                    loadContent("lesson", index);
                  }}
                >
                  <FaBookOpen className="lesson-icon" />
                  {lesson.title} <span>{lesson.duration} mins</span>
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
            {/* <h3>12 PRACTICE QUIZZES</h3>
            <p>6h 54min</p>
            <ul className="course-quiz-list">
              {Array(12)
                .fill()
                .map((_, i) => (
                  <li
                    key={i}
                    className={i === activeQuiz ? "course-active-lesson" : ""}
                    onClick={() => {
                      setActiveQuiz(i);
                      setActiveLesson(null);
                    }}
                  >
                    <FaBookOpen className="lesson-icon" />
                    Lesson 01: Introduction about XD <span>30 mins</span>
                  </li>
                ))}
            </ul> */}
            <h3>{quizzes.length} PRACTICE QUIZZES</h3>
            <p>{quizzes.reduce((sum, quiz) => sum + quiz.duration, 0)} min</p>
            <ul className="course-quiz-list">
              {quizzes.map((quiz, i) => (
                <li
                  key={i}
                  className={i === activeQuiz ? "course-active-lesson" : ""}
                  onClick={() => {
                    setActiveQuiz(i);
                    setActiveLesson(null);
                    loadContent("quiz", i);
                  }}
                >
                  <FaBookOpen className="lesson-icon" />
                  {quiz.title} <span>{quiz.duration} mins</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <main className="course-content">
        {/* <h2>About the Course: UI/UX Design</h2>
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
        </ul> */}
        {content ? (
          <div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </div>
        ) : (
          <p>Select a lesson or quiz to view the content.</p>
        )}
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
