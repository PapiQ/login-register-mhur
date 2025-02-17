import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CourseVideoPage.css";
import {
  FaClock,
  FaBookOpen,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import CoursesList from "../components/CoursesList";
import Itcourse from "../assets/images/it_course.png";
import axios from "axios"; // Import axios for API fetching

const CourseVideoPage = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [videoTime, setVideoTime] = useState("0:00");
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentVideoId, setCurrentVideoId] = useState("PojLL3E-zk0");
  const [player, setPlayer] = useState(null);
  const videoRef = useRef(null); // Reference to the video element

  // Fetch data from API
  /* useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get("https://api.example.com/course/ux-ui");
        setCourseData(response.data);
      } catch (err) {
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []); */

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
      }

      window.onYouTubeIframeAPIReady = () => {
        const newPlayer = new window.YT.Player("youtube-player", {
          videoId: currentVideoId,
          events: {
            onReady: (event) => setPlayer(event.target),
          },
        });
      };
    };

    loadYouTubeAPI();
  }, []);

  useEffect(() => {
    const fakeData = {
      title: "UX/UI Design",
      totalLessons: 9,
      completedLessons: 2,
      duration: "6h 30min",
      sections: [
        {
          title: "Get Started",
          duration: "2 Hour",
          lessons: [
            {
              title: "1. Introduction",
              time: "65:00",
              locked: false,
              videoUrl: "PojLL3E-zk0",
            },
            {
              title: "2. Basics",
              time: "25:00",
              locked: false,
              videoUrl: "ScMzIvxBSi4",
            },
            {
              title: "3. Advanced Techniques",
              time: "30:00",
              locked: true,
              videoUrl: "",
            },
          ],
        },
      ],
    };
    setCourseData(fakeData);
    setLoading(false);
    setCurrentVideo(fakeData.videoUrl); // Set default video
  }, []);

  // ✅ 2️⃣ Handle Lesson Click Correctly
  const handleLessonClick = (lesson) => {
    if (!lesson.locked && lesson.videoUrl) {
      setSelectedLesson(lesson);
      setCurrentVideoId(lesson.videoUrl);

      if (player) {
        player.loadVideoById(lesson.videoUrl);
      } else {
        console.warn("YouTube Player is not ready yet.");
      }
    }
  };

  // ✅ 3️⃣ Fix Play/Pause Controls
  const playPauseVideo = () => {
    if (player) {
      const state = player.getPlayerState();
      if (state === 1) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    } else {
      console.warn("YouTube Player is not ready yet.");
    }
  };

  const rewindVideo = () => {
    if (player) {
      player.seekTo(player.getCurrentTime() - 10, true);
    }
  };

  const fastForwardVideo = () => {
    if (player) {
      player.seekTo(player.getCurrentTime() + 10, true);
    }
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Handle loading state
  if (loading) {
    return <div className="loading">Loading course...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="error">{error}</div>;
  }

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
                <h2>{courseData.title}</h2>
                <p>
                  {courseData.totalLessons} Lessons • {courseData.duration}
                </p>
              </div>
              <span className="settings">⚙️</span>
            </div>
          </div>
          {/* Video Section */}
          <div className="video-section">
            <div id="youtube-player"></div>

            {/* Video Controls */}
            <div className="video-controls">
              <span>{videoTime}</span>
              <button onClick={rewindVideo}>&#9664;&#9664;</button>
              <button onClick={playPauseVideo}>&#9654;</button>
              <button onClick={fastForwardVideo}>&#9654;&#9654;</button>
              <span>{courseData.videoDuration}</span>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="course-video-sidebar">
          <div className="course-contents-card">
            <h3>Course Contents</h3>

            {/* Course Progress */}
            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-text">
                  {courseData.completedLessons}/{courseData.totalLessons}{" "}
                  COMPLETED
                </span>
                <span>📅</span>
              </div>
              <div className="progress-bar">
                {Array.from({ length: courseData.totalLessons }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className={`progress-chunk ${
                        index < courseData.completedLessons ? "completed" : ""
                      }`}
                    ></div>
                  )
                )}
              </div>
            </div>

            {/* Lessons Section */}
            <div className="lesson-sections">
              {courseData.sections.map((section, index) => (
                <div
                  className={`lesson-card ${
                    openSection === index ? "open" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="lesson-header"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="lesson-title">
                      <span>{section.title}</span>
                      {openSection === index ? (
                        <FaChevronUp className="icon" />
                      ) : (
                        <FaChevronDown className="icon" />
                      )}
                    </div>
                    <div className="lesson-info">
                      <div className="lesson-detail">
                        <FaClock className="icon" />
                        <span>{section.duration}</span>
                      </div>
                      <div className="lesson-detail">
                        <FaBookOpen className="icon" />
                        <span>{section.lessons.length} Lessons</span>
                      </div>
                    </div>
                  </div>
                  {openSection === index && (
                    <div className="lesson-details">
                      {section.lessons.map((lesson, i) => (
                        <div
                          key={i}
                          className={`lesson-item ${
                            lesson.locked ? "locked" : "clickable"
                          } ${selectedLesson === lesson ? "selected" : ""}`}
                          onClick={() => handleLessonClick(lesson)}
                        >
                          <span>{lesson.title}</span>
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
            <div className="book-header">
              <h3>Books for you</h3>
              <span className="progress-icon">📅</span>
            </div>
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
      <CoursesList title={courseData.title} isLesson={true} />
      <Footer />
    </>
  );
};

export default CourseVideoPage;

/* Helper Functions */
/* const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const rewindVideo = () => {
  const video = document.querySelector(".video-player");
  if (video) {
    video.currentTime = Math.max(0, video.currentTime - 10);
  }
};

const playPauseVideo = () => {
  const video = document.querySelector(".video-player");
  if (video) {
    if (video.paused) {
      video
        .play()
        .catch((error) => console.error("Play request interrupted:", error));
    } else {
      video.pause();
    }
  }
};

const fastForwardVideo = () => {
  const video = document.querySelector(".video-player");
  if (video) {
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  }
}; */
