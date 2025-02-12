import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import CourseCard from "./CourseCard";
import Footer from "./Footer";
import "../styles/HomePage.css";

const ITEM_WIDTH = 315;

const Courses = () => {
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

  const data = [{ title: "AWS Certified Solutions Architect" }];

  return (
    <>
      {/* <div className="home"> */}
      <NavBar />
      {/* <div className="main-title">
          <h1>Courses in design</h1>
          <p>See all</p>
        </div>
        <div
          ref={containerRef}
          style={{
            width: "1450px",
            maxWidth: "100%",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <div className="card-list">
            <CourseCard />
          </div>
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
      </div> */}
      <Footer />
    </>
  );
};

export default Courses;
