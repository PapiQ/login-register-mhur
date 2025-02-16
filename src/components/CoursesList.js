import { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import "../styles/CoursesList.css";

const CoursesList = ({
  title,
  scrollButtons,
  apiEndpoint,
  isLesson,
  backgroundColor,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive((prev) => !prev); // Toggle state using the previous state
    console.log("isActive", isActive);
  };

  const ITEM_WIDTH = 300;

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCards, setVisibleCards] = useState(1); // Number of full cards visible

  useEffect(() => {
    // Function to fetch courses from the API
    const fetchCourses = async () => {
      try {
        const response = await axios.get(apiEndpoint); // Use the passed apiEndpoint prop
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [apiEndpoint]); // Re-fetch if apiEndpoint changes

  useEffect(() => {
    // Adjust number of cards visible based on screen size
    const updateVisibleCards = () => {
      const containerWidth = window.innerWidth;
      setVisibleCards(Math.floor(containerWidth / ITEM_WIDTH));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };
  /* const handleScroll = (direction) => {
    const scrollContainer = containerRef.current;
    const scrollAmount = direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH;
    const newScrollPosition = scrollContainer.scrollLeft + scrollAmount;

    // Snap scrolling to the nearest ITEM_WIDTH
    const snappedScrollPosition =
      Math.round(newScrollPosition / ITEM_WIDTH) * ITEM_WIDTH;

    scrollContainer.scrollLeft = snappedScrollPosition;
  }; */

  const courses_array = [
    {
      title: "AWS Certified Solutions Architect",
      price: 80,
      free: true,
    },
    { title: "AWS Certified Developer", price: 75, free: true },
    { title: "Google Cloud Professional", price: 85, free: false },
    { title: "Microsoft Azure Fundamentals", price: 70, free: false },
    {
      title: "AWS Certified Solutions Architect",
      price: 80,
      free: false,
    },
    { title: "AWS Certified Developer", price: 75, free: true },
    { title: "Google Cloud Professional", price: 85, free: true },
    { title: "Microsoft Azure Fundamentals", price: 70, free: false },
  ];
  return (
    <section
      className="courses-list-section"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="courses-list-header">
        <h2>{title}</h2>
        <button onClick={toggleClass}>{`${
          isActive ? "View less" : "View all"
        }`}</button>
      </div>
      <div
        ref={containerRef}
        className={`${isActive ? "card-list-active" : "card-list"}`}
      >
        {courses_array.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            price={course.price}
            isLesson={isLesson}
            free={course.free}
          />
        ))}
      </div>
      {scrollButtons == null && !isActive && (
        <div className="card-buttons">
          <button
            onClick={() => {
              handleScroll(-ITEM_WIDTH);
              /* handleScroll("left"); */
            }}
          >
            <div class="arrow-left"></div>
          </button>
          <button
            onClick={() => {
              handleScroll(ITEM_WIDTH);
              /* handleScroll("right"); */
            }}
          >
            <div class="arrow-right"></div>
          </button>
        </div>
      )}
    </section>
  );
};

export default CoursesList;
