import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CourseHeader from "../components/CourseOverviewPageHeader";
import CourseDetails from "../components/CourseOverviewPageDetails";

const CourseOverviewPage = () => {
  const [isNavbarSticky, setNavbarSticky] = useState(true);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* <Navbar showStickyNavbar={!isMobile ? showStickyNavbar : false} /> */}
      {(isNavbarSticky || isMobile) && <Navbar />}
      <CourseHeader />
      <CourseDetails setNavbarSticky={setNavbarSticky} isMobile={isMobile} />
      <Footer />
    </>
  );
};

export default CourseOverviewPage;
