import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CourseHeader from "../components/CourseOverviewPageHeader";
import CourseDetails from "../components/CourseOverviewPageDetails";

const CourseOverviewPage = () => {
  const [isNavbarSticky, setNavbarSticky] = useState(true);
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
      {/* <Navbar showStickyNavbar={!isMobile ? showStickyNavbar : false} /> */}
      {(isNavbarSticky || isMobile) && <Navbar />}
      <CourseHeader
        courseHeaderRef={courseHeaderRef}
        setShowStickyBottomBuyNowButton={setShowStickyBottomBuyNowButton}
        isMobile={isMobile}
      />
      {isMobile && (
        <div className="course-stats">
          <div className="course-stat-item">
            <strong>5 modules</strong>
            <p>Gain insight into a topic and learn the fundamentals.</p>
          </div>
          <div className="course-stats-vertical-divider"></div>
          <div className="course-stat-item">
            <strong>
              4.6 <span className="course-stat-star">★</span>
            </strong>
            <p>(2,252 reviews)</p>
          </div>
          <div className="course-stats-vertical-divider"></div>
          <div className="course-stat-item">
            <strong>Beginner level</strong>
            <p>Recommended experience</p>
          </div>
          <div className="course-stats-vertical-divider"></div>
          <div className="course-stat-item">
            <strong>Flexible schedule</strong>
            <p>
              Approx. 14 hours <br /> Learn at your own pace
            </p>
          </div>
          <div className="course-stats-vertical-divider"></div>
          <div className="course-stat-item">
            <strong>
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                id="cds-react-aria8450610972-:r1f:"
                class="css-17st3jf"
              >
                <path
                  d="M17.5 7c.375 0 .719.153 1.031.458.313.306.469.653.469 1.042v1.187a1.348 1.348 0 01-.125.584l-2.48 5.812c-.11.278-.29.5-.54.667-.25.167-.536.25-.855.25H7c-.417 0-.77-.142-1.063-.427A1.437 1.437 0 015.5 15.5V7.625c0-.208.042-.406.125-.594a1.61 1.61 0 01.333-.49l4.188-4.187c.25-.25.555-.41.916-.479.362-.07.667-.028.917.125.32.18.525.444.615.792.09.347.1.687.031 1.02L12 7h5.5zm-15 10a1.44 1.44 0 01-1.052-.448A1.44 1.44 0 011 15.5v-7c0-.403.15-.753.448-1.052A1.44 1.44 0 012.5 7c.403 0 .753.15 1.052.448.299.299.448.65.448 1.052v7c0 .403-.15.753-.448 1.052A1.44 1.44 0 012.5 17z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="course-stat-percentage"> 96%</span>
            </strong>
            <p>Most learners liked this course</p>
          </div>
        </div>
      )}
      <CourseDetails
        setNavbarSticky={setNavbarSticky}
        isMobile={isMobile}
        showStickyBottomBuyNowButton={showStickyBottomBuyNowButton}
      />
      <Footer />
    </>
  );
};

export default CourseOverviewPage;
