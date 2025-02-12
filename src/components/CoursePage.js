import { useEffect, useState, useLayoutEffect, useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LessonCard from "./LessonCard";
import "../styles/CoursePage.css";
import Itcourse from "../assets/images/it_course.png";

// Lessons Section
const Lessons = () => {
  const ITEM_WIDTH = 300;

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  const lessons = [
    { title: "Lesson 1: AWS Certified Solutions Architect" },
    { title: "Lesson 1: AWS Certified Developer" },
    { title: "Lesson 1: Google Cloud Professional" },
    { title: "Lesson 1: Microsoft Azure Fundamentals" },
    { title: "Lesson 1: AWS Certified Solutions Architect" },
    { title: "Lesson 1: AWS Certified Developer" },
    { title: "Lesson 1: Google Cloud Professional" },
    { title: "Lesson 1: Microsoft Azure Fundamentals" },
  ];
  return (
    <section className="lessons">
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h2 style={{ marginBottom: "0px", paddingBottom: "0px" }}>
          UX/UI Design
        </h2>
        <p style={{ alignContent: "end" }}>View all</p>
      </div>
      <div
        ref={containerRef}
        style={{
          width: "1450px",
          maxWidth: "100%",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
        className="card-list"
      >
        {lessons.map((lesson, index) => (
          <LessonCard key={index} title={lesson.title} />
        ))}
      </div>
      <div className="card-buttons">
        <button
          onClick={() => {
            handleScroll(-ITEM_WIDTH);
          }}
        >
          <div class="arrow-left"></div>
        </button>
        <button
          onClick={() => {
            handleScroll(ITEM_WIDTH);
          }}
        >
          <div class="arrow-right"></div>
        </button>
      </div>
    </section>
  );
};

const CoursePage = () => {
  /* const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }; */

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <NavBar />
      <div className="course-container">
        {/* Main Content Section */}
        <div className="main-content">
          <div className="header">
            <div className="back-card">
              <button className="back-button">&larr;</button>
            </div>
            <div className="course-header">
              <div className="course-info">
                <h2>UX/UI Design</h2>
                <p>9 Lessons 6h 30min</p>
              </div>
              <span className="settings">⚙️</span>
            </div>
          </div>
          <div className="video-section">
            <video className="video-player" controls>
              <source src="video.mp4" type="video/mp4" />
            </video>
            <div className="video-controls">
              <span>0:59</span>
              <button>&#9664;&#9664;</button>
              <button>&#9654;</button>
              <button>&#9654;&#9654;</button>
              <span>12:47</span>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="course-contents-card">
            <h3>Course Contents</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "40%" }}></div>
            </div>
            <div className="lesson-sections">
              {[
                {
                  title: "Get Started",
                  duration: "2 Hour",
                  lessons: [
                    {
                      title: "1. Lorem ipsum dolor sit amet",
                      time: "65:00",
                      locked: false,
                    },
                    {
                      title: "2. Lorem ipsum dolor",
                      time: "25:00",
                      locked: true,
                    },
                    {
                      title: "3. Lorem ipsum dolor sit amet",
                      time: "30:00",
                      locked: true,
                    },
                  ],
                },
                {
                  title: "Illustrator Structures",
                  duration: "2 Hour",
                  lessons: [
                    {
                      title: "1. Lorem ipsum dolor sit amet",
                      time: "65:00",
                      locked: false,
                    },
                    {
                      title: "2. Lorem ipsum dolor",
                      time: "25:00",
                      locked: true,
                    },
                    {
                      title: "3. Lorem ipsum dolor sit amet",
                      time: "30:00",
                      locked: true,
                    },
                  ],
                },
              ].map((section, index) => (
                <div className="lesson-card" key={index}>
                  <div
                    className="lesson-header"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="lesson-title-container">
                      <h4>{section.title}</h4>
                      <p className="lesson-meta">
                        ⏳ {section.duration} 📖 {section.lessons.length}{" "}
                        Lessons
                      </p>
                    </div>
                    <span>{openSection === index ? "▲" : "▼"}</span>
                  </div>
                  {openSection === index && (
                    <div className="lesson-details">
                      {section.lessons.map((lesson, i) => (
                        <div key={i} className="lesson-item">
                          <span
                            className={lesson.locked ? "locked" : "unlocked"}
                          >
                            {lesson.title}
                          </span>
                          <span>
                            {lesson.time} {lesson.locked && "🔒"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Book for You Section */}
          <div className="book-section">
            <h3>Book for you</h3>
            <div className="book-items">
              <div className="book-card">
                <img
                  src={Itcourse}
                  alt="All Benefits of PLUS"
                  className="book-image"
                />
                <p>
                  All Benefits of <br />
                  PLUS
                </p>
              </div>
              <div className="book-card">
                <img
                  src={Itcourse}
                  alt="All Benefits of PLUS"
                  className="book-image"
                />
                <p>
                  All Benefits of <br /> PLUS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lessons />
      <Footer />
    </>
  );
};

export default CoursePage;
