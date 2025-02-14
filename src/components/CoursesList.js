import { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const CoursesList = ({
  title,
  scrollButtons,
  apiEndpoint,
  lesson,
  backgroundColor,
}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const temp_courses = [
    { title: "AWS Certified Solutions Architect", price: 80, trending: true },
    { title: "AWS Certified Developer", price: 75, trending: true },
    { title: "Google Cloud Professional", price: 85, trending: false },
    { title: "Microsoft Azure Fundamentals", price: 70, trending: false },
    { title: "AWS Certified Solutions Architect", price: 80, trending: false },
    { title: "AWS Certified Developer", price: 75, trending: true },
    { title: "Google Cloud Professional", price: 85, trending: true },
    { title: "Microsoft Azure Fundamentals", price: 70, trending: false },
  ];
  return (
    <section
      className="recommended"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            marginBottom: "0px",
            paddingBottom: "0px",
          }}
        >
          {title}
        </h2>
        <p style={{ alignContent: "end", color: "#49bbbd" }}>View all</p>
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
        {temp_courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            price={course.price}
            lesson={lesson}
            trending={course.trending}
          />
        ))}
      </div>
      {scrollButtons == null && (
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
      )}
    </section>
  );
};

export default CoursesList;
