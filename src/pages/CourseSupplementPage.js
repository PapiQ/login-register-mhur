import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CourseSupplementPage.css";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  FaBookOpen,
  FaVideo,
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaRegStickyNote,
} from "react-icons/fa";

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
const Course = () => {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);
  /* const [expandedLessons, setExpandedLessons] = useState({}); */
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedContent, setSelectedContent] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

  const lessons = [
    {
      title: "Introduction to Cybersecurity",
      duration: "10 min",
      videoTitle: "Cybersecurity Basics",
      videoUrl: "https://example.com/video1",
    },
    {
      title: "Threats and Vulnerabilities",
      duration: "15 min",
      videoTitle: "Understanding Threats",
      videoUrl: "https://example.com/video2",
    },
    {
      title: "Network Security Basics",
      duration: "12 min",
      videoTitle: "Securing Networks",
      videoUrl: "https://example.com/video3",
    },
  ];

  const quizzes = [
    {
      title: "Cybersecurity Quiz 1",
      duration: "5 min",
      videoTitle: "Cybersecurity Quiz 1",
      videoUrl: "https://example.com/video3",
    },
    {
      title: "Cybersecurity Quiz 2",
      duration: "7 min",
      videoTitle: "Cybersecurity Quiz 2",
      videoUrl: "https://example.com/video3",
    },
  ];

  const toggleSection = (type, index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [`${type}-${index}`]: !prev[`${type}-${index}`],
    }));
  };
  /*   const toggleSection = (type, index) => {
    setExpandedSections((prev) => ({
      [type + "-" + index]: !prev[type + "-" + index],
    }));
  }; */

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleContentLoad = (type, index, title, duration, videoUrl = "") => {
    console.log("type", type);
    setActiveContent({ type, index });
    /* setExpandedSections({ [`${type}-${index}`]: true }); */
    if (type === "lesson-note" || type === "lesson-video")
      setExpandedSections({
        [`lesson-${index}`]: true,
      });
    // Collapse all other lessons and quizzes
    else if (type === "quiz-note" || type === "quiz-video")
      setExpandedSections({ [`quiz-${index}`]: true }); // Collapse all other lessons and quizzes
    if (type === "lesson-note") {
      setSelectedContent({
        title: `Reading: ${title}`,
        body: "This is the note content for the lesson.",
        duration,
      });
    } else if (type === "lesson-video") {
      setSelectedContent({
        title: `Video: ${title}`,
        body: "This is the video content for the lesson.",
        duration,
        videoUrl,
      });
    } else if (type === "quiz") {
      setSelectedContent({
        title: `Quiz: ${title}`,
        body: "This is the quiz content.",
        duration,
      });
    }
    /* navigate(`/course/${type}/${index}`); */ // Update the browser URL
  };

  return (
    <div className="course-page-container">
      <aside
        className={` ${
          sidebarVisible ? "course-sidebar" : "course-sidebar-hidden"
        }`}
      >
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          <FaBars /> &nbsp;{sidebarVisible ? "Hide menu" : ""}
        </button>
        {sidebarVisible && (
          <div className="course-sidebar-content">
            <div className="course-section">
              <div className="course-section-header">
                <h3>{lessons.length} Lessons</h3>
                <p>2h 54min</p>
              </div>
              <ul className="course-lesson-list">
                {lessons.map((lesson, index) => (
                  <li key={index}>
                    <div
                      className="lesson-header"
                      /* className={`lesson-header ${
                        index === activeLesson ? "course-active-lesson" : ""
                      }`} */
                      onClick={() => toggleSection("lesson", index)}
                    >
                      <div className="lesson-info-left">
                        {/* <FaBookOpen className="lesson-icon" /> */}
                        <div className="lesson-detail">
                          <strong>{lesson.title}</strong>
                        </div>
                        {/* {expandedLessons[index] ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )} */}
                      </div>
                    </div>
                    {expandedSections[`lesson-${index}`] && (
                      <div className="lesson-expanded-content">
                        <div
                          /* className="lesson-note" */
                          className={`lesson-note ${
                            activeContent?.type === "lesson-note" &&
                            activeContent.index === index
                              ? "active-content"
                              : ""
                          }`}
                          onClick={() =>
                            handleContentLoad(
                              "lesson-note",
                              index,
                              lesson.title,
                              lesson.duration
                            )
                          }
                        >
                          <div>
                            <FaRegStickyNote />{" "}
                            <div className="lesson-detail">
                              <strong>Reading:</strong> {lesson.title}
                            </div>
                          </div>

                          <p className="lesson-duration">{lesson.duration}</p>
                        </div>

                        <div
                          /* className="lesson-video" */
                          className={`lesson-video ${
                            activeContent?.type === "lesson-video" &&
                            activeContent.index === index
                              ? "active-content"
                              : ""
                          }`}
                          onClick={() =>
                            handleContentLoad(
                              "lesson-video",
                              index,
                              lesson.videoTitle,
                              lesson.duration,
                              lesson.videoUrl
                            )
                          }
                        >
                          <div>
                            <FaVideo />{" "}
                            <div className="lesson-detail">
                              <strong>Video:</strong> {lesson.videoTitle}
                            </div>
                          </div>

                          <p className="lesson-duration">{lesson.duration}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="course-section">
              <div className="course-section-header">
                <h3>{quizzes.length} PRACTICE QUIZZES</h3>
                <p>1h 54min</p>
              </div>
              {/*  <ul className="course-quiz-list">
                {quizzes.map((quiz, i) => (
                  <li
                    key={i}
                    className={i === activeQuiz ? "course-active-lesson" : ""}
                    onClick={() =>
                      handleContentLoad("quiz", i, quiz.title, quiz.duration)
                    }
                  >
                    <div className="lesson-info-left">
                      <FaBookOpen className="lesson-icon" />
                      <div className="lesson-detail">
                        <strong>{quiz.title}</strong>
                      </div>
                    </div>
                    <p className="lesson-duration">{quiz.duration}</p>
                  </li>
                ))}
              </ul> */}
              <ul className="course-quiz-list">
                {quizzes.map((quiz, index) => (
                  <li key={index}>
                    <div
                      className="lesson-header"
                      /*  className={`lesson-header ${
                        expandedSections[`quiz-${index}`]
                          ? "course-active-lesson"
                          : ""
                      }`} */
                      onClick={() => toggleSection("quiz", index)}
                    >
                      <div className="lesson-info-left">
                        {/*  <FaBookOpen className="lesson-icon" /> */}
                        <div className="lesson-detail">
                          <strong>{quiz.title}</strong>
                        </div>
                      </div>
                      {/*  {expandedSections[`quiz-${index}`] ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )} */}
                    </div>
                    {expandedSections[`quiz-${index}`] && (
                      <div className="lesson-expanded-content">
                        <div
                          /* className="lesson-note" */
                          className={`lesson-note ${
                            activeContent?.type === "quiz-note" &&
                            activeContent.index === index
                              ? "active-content"
                              : ""
                          }`}
                          onClick={() =>
                            handleContentLoad(
                              "quiz-note",
                              index,
                              quiz.title,
                              quiz.duration
                            )
                          }
                        >
                          <div>
                            <FaRegStickyNote />{" "}
                            <div className="lesson-detail">
                              <strong>Reading:</strong> {quiz.title}
                            </div>
                          </div>

                          <p className="lesson-duration">{quiz.duration}</p>
                        </div>

                        <div
                          /* className="lesson-video" */
                          className={`lesson-video ${
                            activeContent?.type === "quiz-video" &&
                            activeContent.index === index
                              ? "active-content"
                              : ""
                          }`}
                          onClick={() =>
                            handleContentLoad(
                              "quiz-video",
                              index,
                              quiz.videoTitle,
                              quiz.duration,
                              quiz.videoUrl
                            )
                          }
                        >
                          <div>
                            <FaVideo />{" "}
                            <div className="lesson-detail">
                              <strong>Video:</strong> {quiz.videoTitle}
                            </div>
                          </div>

                          <p className="lesson-duration">{quiz.duration}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </aside>
      <main className="course-content">
        {selectedContent ? (
          <div>
            <h2>{selectedContent.title}</h2>
            <p>{selectedContent.body}</p>
            <p>
              <strong>Duration:</strong> {selectedContent.duration}
            </p>
            {selectedContent.videoUrl && (
              <p>
                <a
                  href={selectedContent.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </p>
            )}
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
    /*  const id = type === "lesson" ? lessons[index].id : type ==="video" ? "video url here" : quizzes[index].id; */
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
