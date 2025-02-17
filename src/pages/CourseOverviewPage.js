import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CourseOverviewPage.css";
import {
  FaStar,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Itcourse from "../assets/images/it_course.png";

// Hero Section
const HeroSection = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="course-overview-page-hero-section">
      {/* <img src={Itcourse} alt="Course Image" /> */}
      <h1>Course Title</h1>
    </section>
  );
};

// New Sticky Navbar for Course Overview Tabs
const StickyCourseNavbar = ({ isVisible }) => {
  return (
    <div
      className={`sticky-course-overview-navbar ${isVisible ? "visible" : ""}`}
    >
      <div className="sticky-course-overview-navbar-title">
        <h2>Course Title</h2>
      </div>
      <div className="sticky-overview-tabs-container">
        <div className="sticky-overview-tabs-div">
          <div className="sticky-overview-tabs">
            <button className="active-tab">Overview</button>
            <button>Overview</button>
            <button>Overview</button>
            <button>Overview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Course Overview Section
const CourseOverview = () => {
  return (
    <section className="course-overview-container">
      <div className="overview-tabs">
        <button className="active-tab">Overview</button>
        <button>Overview</button>
        <button>Overview</button>
        <button>Overview</button>
      </div>

      <div className="rating-review-section">
        <div className="rating-section">
          <div className="rating-box">
            <h2>4 out of 5</h2>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p>Top Rating</p>
          </div>

          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div className="rating-row" key={stars}>
                <span>{stars} Stars</span>
                <div className="rating-bar">
                  <div
                    className="filled-bar"
                    style={{ width: `${stars * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-section">
          {[1, 2].map((review, index) => (
            <div key={index} className="review">
              <div className="reviewer">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Reviewer"
                  className="reviewer-img"
                />
                <div>
                  <h4>Lina</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
              </div>
              <p>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <span className="review-time">3 Month</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Buy Now Section
const BuyNowSection = () => {
  return (
    <section className="buy-now-container">
      <h2>
        $49.65 <span className="old-price">$99.99</span>{" "}
        <span className="discount">50% Off</span>
      </h2>
      <p className="offer-time">11 hour left at this price</p>
      <button className="buy-now-btn">Buy Now</button>

      <div className="course-includes">
        <h3>This Course Includs</h3>
        <ul>
          <li>💰 Money Back Guarantee</li>
          <li>📱 Access on all devices</li>
          <li>📜 Certification of completion</li>
          <li>📚 32 Modules</li>
        </ul>
      </div>

      <div className="share-course">
        <h3>Share this course</h3>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaTelegram />
          <FaWhatsapp />
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const CourseOverviewPage = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const heroRef = useRef(null);

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
  return (
    <>
      <Navbar showStickyNavbar={showStickyNavbar} />
      <HeroSection heroRef={heroRef} />
      <div className="content-container">
        <CourseOverview />
        <BuyNowSection />
      </div>
      {showStickyNavbar && <StickyCourseNavbar isVisible={showStickyNavbar} />}
      <Footer />
    </>
  );
};

export default CourseOverviewPage;
