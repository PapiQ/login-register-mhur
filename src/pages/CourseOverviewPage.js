import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CourseHeader from "../components/CourseOverviewPageHeader";
import CourseDetails from "../components/CourseOverviewPageDetails";

const CourseOverviewPage = ({ isFaded }) => {
  /*  const [isFaded, setIsFaded] = useState(false); */
  const [showStickyBottomBuyNowButton, setShowStickyBottomBuyNowButton] =
    useState(false);
  const courseHeaderRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (courseHeaderRef.current) {
        const heroBottom =
          courseHeaderRef.current.getBoundingClientRect().bottom;
        setShowStickyBottomBuyNowButton(heroBottom <= 0); // Show when Hero section is out of view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`page-content ${isFaded ? "faded" : ""}`}>
        <CourseHeader courseHeaderRef={courseHeaderRef} isMobile={isMobile} />
        <CourseDetails
          isMobile={isMobile}
          showStickyBottomBuyNowButton={showStickyBottomBuyNowButton}
        />
      </div>
    </>
  );
};

export default CourseOverviewPage;
