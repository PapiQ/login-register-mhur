import { useEffect, useState, useLayoutEffect, useRef } from "react";
import CourseCard from "./CourseCard";

const CoursesList = (props) => {
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

  const courses = [
    { title: "AWS Certified Developer", price: 75 },
    { title: "Google Cloud Professional", price: 85 },
    { title: "Microsoft Azure Fundamentals", price: 70 },
    { title: "AWS Certified Developer", price: 75 },
    { title: "Google Cloud Professional", price: 85 },
    { title: "Microsoft Azure Fundamentals", price: 70 },
  ];
  return (
    <section
      className="recommended"
      style={{ backgroundColor: props.backgroundColor }}
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
          {props.title}
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
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} price={course.price} />
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

export default CoursesList;
