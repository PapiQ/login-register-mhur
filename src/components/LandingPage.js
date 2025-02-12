import React from "react";
import { useState } from "react";
import "../styles/LandingPage.css";
import CourseCard from "./CourseCard";
/* import Testimonial from "./Testimonial"; */
import Footer from "./Footer";
import Navbar from "./NavBar";
import Student from "../assets/images/student.png";
import Classroom from "../assets/images/classroom.jpg";

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">Studying Online</span> is now much easier
        </h1>
        <p>
          Join our interactive platform to access top courses and live
          mentorship.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={Student} alt="Student" />
      </div>
    </section>
  );
};

// Category Navigation
const CategoryNav = () => {
  const categories = [
    "Design",
    "Development",
    "Programming",
    "Language",
    "Marketing",
    "Business",
  ];
  return (
    <div className="category-nav">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category} <span className="dropdown-arrow">▼</span>{" "}
          {/* <div className="arrow-down"></div> */}
        </div>
      ))}
    </div>
  );
};

// Description Section
const Description = () => {
  return (
    <div className="description-header">
      <h1 className="description-header-title">
        All-In-One <span className="highlight">Learning Platform</span>
      </h1>
      <p className="description-header-text">
        Everything you need to learn, grow, and succeed—all in one place. MHUR
        provides expert-led courses, interactive content, and seamless access to
        education anytime, anywhere.
      </p>
    </div>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      header: "Top-quality courses",
      text: "Learn from industry experts and top educators with well-structured, engaging courses designed to help you succeed.",
    },
    {
      header: "Learn at your own pace",
      text: "Study on your schedule with flexible courses that fit into your lifestyle—no deadlines, just progress at your speed.",
    },
    {
      header: "Anytime, anywhere",
      text: "Access world-class education from any device, wherever you are. Learning has never been more convenient!",
    },
  ];
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-card">
          <div className="feature-card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 13a10 10 0 1 1-10-10"></path>
              <path d="M2 15a10 10 0 0 0 20 0"></path>
              <path d="M6 10h12M6 10v4m12-4v4"></path>
            </svg>
          </div>
          <h2 className="feature-card-title">{feature.header}</h2>
          <p className="feature-card-description">{feature.text}</p>
        </div>
      ))}
    </section>
  );
};

// Recommended Courses
const RecommendedCourses = () => {
  const courses = [
    { title: "AWS Certified Solutions Architect", price: 80 },
    { title: "AWS Certified Developer", price: 75 },
    { title: "Google Cloud Professional", price: 85 },
    { title: "Microsoft Azure Fundamentals", price: 70 },
  ];

  return (
    <section className="recommended">
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h2 style={{ marginBottom: "0px", paddingBottom: "0px" }}>
          Recommended for you
        </h2>
        <p style={{ alignContent: "end" }}>View all</p>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} price={course.price} />
        ))}
      </div>
    </section>
  );
};

// Information Section
const InfoSection = () => {
  return (
    <section className="info">
      <div className="info-text">
        <p className="info-text-header">
          Everything you can do in a physical classroom,{" "}
          <span>you can do with Mhur</span>
        </p>
        <p>
          Engage in interactive lessons, collaborate with instructors and peers,
          take quizzes, complete assignments, and earn certificates—all from the
          comfort of your home. MHUR brings the full classroom experience
          online, giving you the flexibility to learn anytime, anywhere.
        </p>
        <a>Learn more</a>
      </div>
      <div className="info-image">
        <img src={Classroom} alt="Classroom" />
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonial = () => {
  const testimonials = [
    {
      text: "mhur has got more than 100k positive ratings from our users around the world.\n\nSome of the students and teachers were greatly helped by the Skilline.\n\nAre you too? Please give your assessment.",
      image: "testimonial1.jpg",
    },
    {
      text: "mhur has got more than 100k positive ratings from our users around the world.\n\nSome of the students and teachers were greatly helped by the Skilline.\n\nAre you too? Please give your assessment.",
      image: "testimonial1.jpg",
    },
    {
      text: "mhur has got more than 100k positive ratings from our users around the world.\n\nSome of the students and teachers were greatly helped by the Skilline.\n\nAre you too? Please give your assessment.",
      image: "testimonial1.jpg",
    },
  ];
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <h2>What They Say?</h2>
        <p>
          {testimonials[index].text.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <button className="assessment-btn">Write your assessment →</button>
      </div>
      <div className="testimonial-image-container">
        <img
          /* src={testimonials[index].image} */
          src={Student}
          alt="Testimonial"
          className="testimonial-image"
        />
        <button className="next-btn" onClick={nextTestimonial}>
          →
        </button>
      </div>
    </section>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryNav />
      <Description />
      <Features />
      <RecommendedCourses />
      <InfoSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
