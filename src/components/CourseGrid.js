import { useState, useEffect, useRef } from "react";
import CourseCard from "./CourseCard";
import ProgressCard from "./ProgressCard";
import CourseCardAlternative from "./CourseCardAlternative";
import "../styles/CourseGrid.css";

const CourseGrid = ({ courses, cardType }) => {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 for large screens
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null); // 🟢 Reference to CourseGrid container
  const titleRef = useRef(null);

  // Adjust initial visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(2); // Small screens: Show 2 cards per row
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2); // Tablets: Show 2 cards per row
      } else {
        setVisibleCount(4); // Large screens: Show 4 cards per row
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const showMoreCourses = () => {
    if (expanded) {
      // 🟢 Collapse to initial view
      setVisibleCount(window.innerWidth > 1024 ? 4 : 2);
      setExpanded(false);

      setTimeout(() => {
        if (titleRef.current) {
          // Get navbar height dynamically
          /* const navbarHeight = navbarRef.current
            ? navbarRef.current.getBoundingClientRect().height
            : 0; */
          const navbarHeight = 130; // Set navbar height manually
          const titlePosition =
            titleRef.current.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            10; // Adjust for spacing

          // Scroll to course-grid-title right below navbar
          window.scrollTo({ top: titlePosition, behavior: "smooth" });
        }
      }, 300); // Small delay to allow collapse animation
    } else {
      // Expand by 8 cards or remaining cards
      setVisibleCount((prevCount) => Math.min(prevCount + 8, courses.length));

      // Only change to "Show Fewer" when all cards are shown
      if (visibleCount + 8 >= courses.length) {
        setExpanded(true);
      }
    }
  };

  return (
    <div className="course-grid-container">
      <h2 className="course-grid-title" ref={titleRef}>
        Personalized Specializations for You
      </h2>
      <div className="course-grid">
        {courses
          .slice(0, visibleCount)
          .map((course, index) =>
            cardType === "progress" ? (
              <ProgressCard key={index} course={course} />
            ) : (
              <CourseCardAlternative key={index} course={course} />
            )
          )}
      </div>

      {courses.length > visibleCount || expanded ? (
        <button className="course-grid-toggle-btn" onClick={showMoreCourses}>
          {expanded
            ? "Show Fewer"
            : `Show ${Math.min(8, courses.length - visibleCount)} More`}
        </button>
      ) : null}
    </div>
  );
};

export default CourseGrid;
