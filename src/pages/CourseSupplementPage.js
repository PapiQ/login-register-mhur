import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CourseVideoTabs from "../components/CourseVideoTabs";
import "../styles/CourseSupplementPage.css";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  FaBookOpen,
  FaVideo,
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaRegStickyNote,
  FaAngleLeft,
  FaAngleRight,
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

  const [videoTime, setVideoTime] = useState("0:00");

  const [currentVideoId, setCurrentVideoId] = useState("PojLL3E-zk0");
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const isPlayerReady = useRef(false);
  const checkYouTubeAPITimer = useRef(null);

  const lessons = [
    {
      title: "Introduction to UI/UX Design (Week 1, Lecture 1)",
      duration: "10 min",
      videoTitle: "UI/UX Design Overview",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "User Research Methods (Week 1, Lecture 2)",
      duration: "12 min",
      videoTitle: "Understanding Your Users",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Wireframing and Prototyping (Week 1, Lecture 3)",
      duration: "15 min",
      videoTitle: "From Sketch to Prototype",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Visual Design Principles (Week 1, Lecture 4)",
      duration: "14 min",
      videoTitle: "Designing with Aesthetics",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Interaction Design Basics (Week 1, Lecture 5)",
      duration: "13 min",
      videoTitle: "Crafting Interactive Experiences",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Usability Testing (Week 1, Lecture 6)",
      duration: "11 min",
      videoTitle: "Evaluating User Experience",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Responsive Design (Week 1, Lecture 7)",
      duration: "9 min",
      videoTitle: "Designing for Multiple Devices",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "UI/UX Trends and Future Insights (Week 1, Lecture 8)",
      duration: "16 min",
      videoTitle: "What's Next in UI/UX",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Practice Questions (Week 1, Lecture 9)",
      duration: "16 min",
      videoTitle: "Practice Questions",
      videoUrl: "PojLL3E-zk0",
    },
  ];

  const quizzes = [
    {
      title: "Cybersecurity Quiz 1",
      duration: "5 min",
      videoTitle: "Cybersecurity Quiz 1",
      videoUrl: "PojLL3E-zk0",
    },
    {
      title: "Cybersecurity Quiz 2",
      duration: "7 min",
      videoTitle: "Cybersecurity Quiz 2",
      videoUrl: "PojLL3E-zk0",
    },
  ];

  const toggleSection = (type, index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [`${type}-${index}`]: !prev[`${type}-${index}`],
    }));
  };

  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
    checkIfYouTubeAPILoaded();
    /* return () => clearInterval(checkYouTubeAPITimer.current); */
  }, []);

  const initializePlayer = (retryCount = 0) => {
    if (isPlayerReady.current) {
      console.log("⏳ Player is already initialized. Skipping...");
      return;
    }

    if (!window.YT || !window.YT.Player) {
      console.error("❌ YouTube API is not available at initialization time!");
      return;
    }

    let container = document.getElementById("youtube-player");
    if (!container) {
      if (retryCount < 10) {
        console.error(
          `⚠️ YouTube player container not found. Retrying in 500ms... (Attempt ${
            retryCount + 1
          })`
        );
        setTimeout(() => initializePlayer(retryCount + 1), 500);
      } else {
        console.error(
          "Exceeded max retries for finding the YouTube player container."
        );
      }
      return;
    }

    /* if (!container) {
      console.error("⚠️ YouTube player container not found.");
      return;
    }
 */
    console.log("🎬 Initializing YouTube Player...");

    playerRef.current = new window.YT.Player(container, {
      height: "360",
      width: "640",
      videoId: currentVideoId || "PojLL3E-zk0",
      playerVars: {
        host: "https://www.youtube-nocookie.com", // ✅ Privacy-friendly domain
      },
      events: {
        onReady: (event) => {
          console.log("🎥 YouTube Player Ready!");
          isPlayerReady.current = true;
          playerRef.current = event.target; // ✅ Explicitly set playerRef.current
        },
        onError: (error) => console.error("❌ YouTube Player Error:", error),
      },
    });
  };

  const checkIfYouTubeAPILoaded = () => {
    let attempts = 0;

    checkYouTubeAPITimer.current = setInterval(() => {
      /* console.log(
        `⏳ Checking if YouTube API is available... Attempt ${++attempts}`
      ); */

      if (window.YT && window.YT.Player) {
        /* console.log("✅ YouTube API is now available. Initializing player..."); */

        clearInterval(checkYouTubeAPITimer.current);
        checkYouTubeAPITimer.current = null; // 🔥 Prevent it from running forever

        initializePlayer();
        return; // ✅ Ensure it exits and does NOT continue checking
      }

      if (attempts > 10) {
        console.error("❌ YouTube API did not load after 10 attempts.");
        clearInterval(checkYouTubeAPITimer.current);
        checkYouTubeAPITimer.current = null; // ✅ Prevent infinite checking
      }
    }, 1000); // 🔄 Check every 1 second, up to 10 times
  };

  useEffect(() => {
    if (isPlayerReady.current && playerRef.current && currentVideoId) {
      console.log(`🎞️ Reloading video: ${currentVideoId}`);

      if (!document.getElementById("youtube-player")) {
        console.warn("⚠️ Player missing from DOM. Recreating...");
        initializePlayer();
        setTimeout(() => {
          if (playerRef.current) {
            playerRef.current.loadVideoById(currentVideoId);
          }
        }, 1000);
      } else {
        playerRef.current.stopVideo(); // Stop any running video first
        playerRef.current.loadVideoById(currentVideoId);
      }
    }
  }, [currentVideoId]);

  // Fix Play/Pause Controls
  const playPauseVideo = () => {
    if (!playerRef.current || !isPlayerReady.current) {
      console.warn("Player is not ready.");
      return;
    }
    try {
      const state = playerRef.current.getPlayerState();
      // Pause if video is playing or buffering
      if (
        state === window.YT.PlayerState.PLAYING ||
        state === window.YT.PlayerState.BUFFERING
      ) {
        console.log("Pausing Video...");
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        console.log("Playing Video...");
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error controlling video:", error);
    }
  };

  const rewindVideo = () => {
    if (!playerRef.current) {
      console.warn("⚠️ Player is not initialized yet.");
      return;
    }

    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(Math.max(currentTime - 10, 0), true); // Prevent negative time
    console.log(`⏪ Rewound to: ${Math.max(currentTime - 10, 0)} sec`);
  };

  const fastForwardVideo = () => {
    if (!playerRef.current) {
      console.warn("⚠️ Player is not initialized yet.");
      return;
    }

    const currentTime = playerRef.current.getCurrentTime();
    const duration = playerRef.current.getDuration();

    playerRef.current.seekTo(Math.min(currentTime + 10, duration), true); // Prevent exceeding video length
    console.log(
      `⏩ Fast-forwarded to: ${Math.min(currentTime + 10, duration)} sec`
    );
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  /* const handleContentLoad = (type, index, title, duration, videoUrl = "") => {
    console.log("type", type);
    setActiveContent({ type, index });
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
    } else if (type === "quiz-note") {
      setSelectedContent({
        title: `Quiz: ${title}`,
        body: "This is the quiz content.",
        duration,
      });
    } else if (type === "quiz-video") {
      setSelectedContent({
        title: `Quiz: ${title}`,
        body: "This is the quiz content.",
        duration,
        videoUrl,
      });
    }
    if (type.includes("note")) {
      console.log("📖 Loading a note. Resetting video player...");

      // ✅ Reset video state & detach player
      setCurrentVideoId(null);

      if (playerRef.current) {
        playerRef.current.stopVideo();
        playerRef.current.destroy(); // ✅ Completely remove the player
        playerRef.current = null;
        isPlayerReady.current = false;
      }
    }
    if (type.includes("video") && videoUrl) {
      console.log("🎥 Setting new video:", videoUrl);

      if (playerRef.current && isPlayerReady.current) {
        console.log(`▶️ Loading video: ${videoUrl}`);
        playerRef.current.loadVideoById(videoUrl);
        playerRef.current.playVideo(); // ✅ Auto-start the new video
      } else {
        console.warn("⚠️ Player not ready. Initializing...");
        setCurrentVideoId(videoUrl);
        initializePlayer();
      }
    }

    // navigate(`/course/${type}/${index}`);  // Update the browser URL
  }; */

  const handleContentLoad = (type, index) => {
    console.log("index", index);
    setActiveContent({ type, index });

    setExpandedSections({ [`lesson-${index}`]: true });

    if (type === "lesson-note") {
      setSelectedContent({
        title: `Reading: ${lessons[index].title}`,
        body: "This is the note content for the lesson.",
        duration: lessons[index].duration,
        videoUrl: null,
      });
    } else if (type === "lesson-video") {
      setSelectedContent({
        title: `Video: ${lessons[index].videoTitle}`,
        body: "This is the video content for the lesson.",
        duration: lessons[index].duration,
        videoUrl: lessons[index].videoUrl,
      });
    }

    if (type.includes("note")) {
      console.log("📖 Loading a note. Resetting video player...");

      // ✅ Reset video state & detach player
      setCurrentVideoId(null);

      if (playerRef.current) {
        playerRef.current.stopVideo();
        playerRef.current.destroy(); // ✅ Completely remove the player
        playerRef.current = null;
        isPlayerReady.current = false;
      }
    }
    if (type.includes("video") && lessons[index].videoUrl) {
      console.log("🎥 Setting new video:", lessons[index].videoUrl);

      /* if (playerRef.current && isPlayerReady.current) {
        console.log(`▶️ Loading video: ${lessons[index].videoUrl}`);
        playerRef.current.loadVideoById(lessons[index].videoUrl);
        playerRef.current.playVideo(); // ✅ Auto-start the new video
      } else {
        console.warn("⚠️ Player not ready. Initializing...");
        setCurrentVideoId(lessons[index].videoUrl);
        initializePlayer();
      } */
      setCurrentVideoId(lessons[index].videoUrl);

      // ✅ Ensure player is initialized before trying to play
      if (playerRef.current && isPlayerReady.current) {
        console.log(
          `▶️ Loading and auto-playing video: ${lessons[index].videoUrl}`
        );
        playerRef.current.loadVideoById(lessons[index].videoUrl);
        playerRef.current.playVideo();
        setIsPlaying(true);
      } else {
        console.warn("⚠️ Player not ready. Initializing...");
        initializePlayer();

        // 🔥 Wait for the player to be ready before playing the video
        setTimeout(() => {
          if (
            playerRef.current &&
            typeof playerRef.current.playVideo === "function"
          ) {
            playerRef.current.loadVideoById(lessons[index].videoUrl);
            playerRef.current.playVideo();
            setIsPlaying(true);
          } else {
            console.error("❌ YouTube Player not initialized properly.");
          }
        }, 1500); // Small delay to ensure initialization
      }
    }
    // navigate(`/course/${type}/${index}`);  // Update the browser URL
  };

  const handlePrevious = () => {
    if (!activeContent) return;
    console.log("active content", activeContent);
    if (activeContent.type === "lesson-note") {
      // If currently on a note, go to the video of the next section
      handleContentLoad("lesson-video", activeContent.index);
    } else if (
      activeContent.type === "lesson-video" &&
      activeContent.index > 0
    ) {
      // If on a video, go to the note of the same section
      handleContentLoad("lesson-note", activeContent.index - 1);
    }
  };

  const handleNext = () => {
    if (!activeContent) return;

    if (activeContent.type === "lesson-video") {
      // If currently on a video, go to the note of the same section
      handleContentLoad("lesson-note", activeContent.index);
    } else if (
      activeContent.type === "lesson-note" &&
      activeContent.index < lessons.length - 1
    ) {
      // If on a note, go to the video of the next section
      handleContentLoad("lesson-video", activeContent.index + 1);
    }
  };

  return (
    <div className="course-page-container">
      <aside
        className={` ${
          sidebarVisible ? "course-sidebar" : "course-sidebar-hidden"
        }`}
      >
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          <FaBars /> {sidebarVisible ? <>&nbsp;Hide menu</> : null}
        </button>
        {sidebarVisible && (
          <div className="course-sidebar-content">
            <div className="course-section">
              {/* <div className="course-section-header">
                <h3>{lessons.length} Lessons</h3>
                <p>2h 54min</p>
              </div> */}
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
                        <div className="lesson-title">
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
                              <strong>Video:</strong>{" "}
                              <span className="lesson-detail-title">
                                {lesson.title}
                              </span>
                            </div>
                          </div>

                          <p className="lesson-duration">{lesson.duration}</p>
                        </div>
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
                              <strong>Reading:</strong>{" "}
                              <span className="lesson-detail-title">
                                {lesson.title}
                              </span>
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
            {/*<div className="course-section">
              <div className="course-section-header">
                <h3>{quizzes.length} PRACTICE QUIZZES</h3>
                <p>1h 54min</p>
              </div>
              <ul className="course-quiz-list">
                {quizzes.map((quiz, index) => (
                  <li key={index}>
                    <div
                      className="lesson-header"
                      onClick={() => toggleSection("quiz", index)}
                    >
                      <div className="lesson-info-left">
                        <div className="lesson-detail">
                          <strong>{quiz.title}</strong>
                        </div>
                      </div>
                    </div>
                    {expandedSections[`quiz-${index}`] && (
                      <div className="lesson-expanded-content">
                        <div
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
                        <div
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
                      </div>
                    )}
                  </li>
                ))}
              </ul> 
            </div>*/}
          </div>
        )}
      </aside>
      <main className="course-content">
        {selectedContent ? (
          <div>
            <div className="navigation-buttons">
              <button onClick={handlePrevious} className="prev-btn">
                <FaAngleLeft /> Previous
              </button>
              <button onClick={handleNext} className="next-btn">
                Next <FaAngleRight />
              </button>
            </div>
            {!selectedContent.videoUrl && (
              <>
                <h2>{selectedContent.title}</h2>
                <p>{selectedContent.body}</p>
                <p>
                  <strong>Duration:</strong> {selectedContent.duration}
                </p>
              </>
            )}
            {selectedContent.videoUrl && (
              <div className="video-section">
                <div id="youtube-player" key={currentVideoId}></div>

                {/* Video Controls */}
                <div className="video-controls">
                  <span>{videoTime}</span>
                  <button onClick={rewindVideo}>&#9664;&#9664;</button>
                  {/*  <button onClick={playPauseVideo}>&#9654;</button> */}
                  <button
                    onClick={playPauseVideo}
                    dangerouslySetInnerHTML={{
                      __html: isPlaying ? "&#10074;&#10074;" : "&#9654;",
                    }}
                  ></button>
                  <button onClick={fastForwardVideo}>&#9654;&#9654;</button>
                  <span>{selectedContent.duration}</span>
                </div>
              </div>
            )}
            {selectedContent.videoUrl && (
              <>
                {console.log("selectedcontent", selectedContent)}
                <h2>{selectedContent.title}</h2>
                <CourseVideoTabs
                  transcript="This is the transcript content."
                  notes="These are the notes."
                  downloads="These are the downloads."
                  discuss="This is where you can visit forum to discuss."
                />
              </>
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
  const [isFaded, setIsFaded] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [content, setContent] = useState(null);
  const [courseHeader, setCourseHeader] = useState(null);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const heroRef = useRef(null);

  /* useEffect(() => {
    fetch("https://api.example.com/courses/uiux")
      .then((response) => response.json())
      .then((data) => {
        setLessons(data.lessons);
        setQuizzes(data.quizzes);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []); */

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
      {/* <Navbar showStickyNavbar={!isMobile ? showStickyNavbar : false} /> */}
      <Navbar setIsFaded={setIsFaded} />
      {/* <HeroSection heroRef={heroRef} courseHeader={courseHeader} /> */}
      {/* {showStickyNavbar && !isMobile && (
        <StickyCourseNavbar
          courseTitle="UI/UX Design"
          isVisible={showStickyNavbar}
        />
      )} */}
      <div className={`page-content ${isFaded ? "faded" : ""}`}>
        <Course
          lessons={lessons}
          quizzes={quizzes}
          content={content}
          loadContent={loadContent}
        />
        <Footer />
      </div>
    </>
  );
};

export default CourseSupplementPage;
