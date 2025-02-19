import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CourseSupplementPage.css";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaBookOpen } from "react-icons/fa";

// Hero Section
const HeroSection = ({ heroRef, courseHeader }) => {
  return (
    <section
      ref={heroRef}
      /* className={`course-notes-page-hero ${isSticky ? "sticky" : ""}`} */
      className="course-notes-page-hero"
    >
      <div className="course-notes-page-hero-content">
        {courseHeader ? (
          <>
            <h1>
              <span className="highlight">{courseHeader.title}</span>
            </h1>
            <p>{courseHeader.instructor}</p>
            <div className="hero-content-buttons">
              <button className="cta-btn">Get Started</button>
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
const Course = ({ lessons, quizzes, content, loadContent }) => {
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(null);

  return (
    <div className="course-page-container">
      <aside className="course-sidebar">
        <div className="course-back-card">
          <button className="course-back-button">&larr;</button>
        </div>
        <div className="course-sidebar-content">
          <div className="course-section">
            <div className="course-section-header">
              <h3>{lessons.length} Lessons</h3>
              {/* <p>
              {lessons.reduce((sum, lesson) => sum + lesson.duration, 0)} min
            </p> */}
              <p>2h 54min</p>
            </div>

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
                  <div className="lesson-info-left">
                    <FaBookOpen className="lesson-icon" />
                    &nbsp; {lesson.title}
                  </div>
                  <span>{lesson.duration}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="course-section">
            <div className="course-section-header">
              <h3>{quizzes.length} PRACTICE QUIZZES</h3>
              {/*  <p>{quizzes.reduce((sum, quiz) => sum + quiz.duration, 0)} min</p> */}
              <p>1h 54min</p>
            </div>
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
                  <div className="lesson-info-left">
                    <FaBookOpen className="lesson-icon" /> &nbsp;
                    {quiz.title}
                  </div>
                  <span>{quiz.duration}</span>
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

// New Sticky Navbar for Course Title
const StickyCourseNavbar = ({ courseTitle, isVisible }) => {
  return (
    <div className={`sticky-course-navbar ${isVisible ? "visible" : ""}`}>
      <h3>{courseTitle}</h3>
    </div>
  );
};

const CourseSupplementPage = () => {
  const [lessons, setLessons] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [content, setContent] = useState(null);
  const [courseHeader, setCourseHeader] = useState(null);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    fetch("https://api.example.com/courses/uiux")
      .then((response) => response.json())
      .then((data) => {
        setLessons(data.lessons);
        setQuizzes(data.quizzes);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  /**
   * Loads the content for the specified lesson or quiz.
   *
   * @param {string} type - The type of content to load ('lesson' or 'quiz').
   * @param {number} index - The index of the lesson or quiz to load.
   *
   * This function updates the state to load the content for the specified lesson or quiz.
   * It can be used to fetch and display the content dynamically based on the user's selection.
   */
  const loadContent = (type, index) => {
    const id = type === "lesson" ? lessons[index].id : quizzes[index].id;
    fetch(`https://api.example.com/content/${id}`)
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error fetching content:", error));
  };

  useEffect(() => {
    fetch("https://api.example.com/course-header")
      .then((response) => response.json())
      .then((data) => setCourseHeader(data))
      .catch((error) => console.error("Error fetching course header:", error));
  }, []);

  useEffect(() => {
    const fakeLessons = [
      { title: "Lesson 01: Introduction about XD", duration: "1h" },
      { title: "Lesson 02: Introduction about XD", duration: "1h 54min" },
      { title: "Lesson 03: Introduction about XD", duration: "30 mins" },
      { title: "Lesson 04: Introduction about XD", duration: "30 mins" },
    ];
    const fakeQuizzes = [
      { title: "Quiz 01: Introduction about XD", duration: "1h" },
      { title: "Quiz 02: Introduction about XD", duration: "1h 54min" },
      { title: "Quiz 03: Introduction about XD", duration: "30 mins" },
      { title: "Quiz 04: Introduction about XD", duration: "30 mins" },
      { title: "Quiz 05: Introduction about XD", duration: "1h" },
      { title: "Quiz 06: Introduction about XD", duration: "1h 54min" },
      { title: "Quiz 07: Introduction about XD", duration: "30 mins" },
      { title: "Quiz 08: Introduction about XD", duration: "30 mins" },
    ];
    const fakeContent = {
      title: "Lesson 01: Introduction about XD",
      body: `In this lesson, you will learn the basics of Adobe XD, a powerful design tool that allows you to create interactive prototypes and wireframes. We'll cover the interface, tools, and features of XD, as well as best practices for designing user-friendly interfaces. By the end of this lesson, you'll be able to create your first XD project and start designing your own digital experiences.`,
    };
    setLessons(fakeLessons);
    setQuizzes(fakeQuizzes);
    setContent(fakeContent);
  }, []);

  useEffect(() => {
    const fakeCourseHeader = {
      title: "UI/UX Design",
      instructor: "Daniel Balcha",
    };
    setCourseHeader(fakeCourseHeader);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyNavbar(heroBottom <= 0); // Show when Hero section is out of view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* {!isHeroSticky ? <Navbar /> : null} */}
      {/* Only hide navbar if it's not mobile and the sticky navbar is visible */}
      <Navbar showStickyNavbar={!isMobile ? showStickyNavbar : false} />
      <HeroSection heroRef={heroRef} courseHeader={courseHeader} />
      {/* New Sticky Navbar Appears When Scrolled Past Hero Section */}
      {showStickyNavbar && !isMobile && (
        <StickyCourseNavbar
          courseTitle="UI/UX Design"
          isVisible={showStickyNavbar}
        />
      )}
      <Course
        lessons={lessons}
        quizzes={quizzes}
        content={content}
        loadContent={loadContent}
      />
      <Footer />
    </>
  );
};

export default CourseSupplementPage;
