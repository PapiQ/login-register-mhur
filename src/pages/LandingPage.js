import React from "react";
import { useState } from "react";
import "../styles/LandingPage.css";
import CourseCard from "../components/CourseCard";
/* import Testimonial from "./Testimonial"; */
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import CoursesList from "../components/CoursesList";
import Student from "../assets/images/student.png";
import Classroom from "../assets/images/classroom.jpg";

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Find your next course, topics, or instructors . . ."
          />
          <button className="search-button">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="#fbc02d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="16" y1="16" x2="22" y2="22"></line>
            </svg>
          </button>
        </div>
        <h1>
          <span className="highlight">Studying Online</span> is now <br />
          much easier
        </h1>
        <p>
          Mhur is an interesting platform that will teach
          <br /> you in a more interactive way
        </p>
        <div className="hero-content-buttons">
          <button className="cta-btn">Get Started</button>
          <button className="watch-button">
            <span className="play-icon">▶</span>
            Watch how it works
          </button>
        </div>
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
        Everything you need to learn, grow, and succeed—all in one place. <br />{" "}
        MHUR provides expert-led courses, interactive content, and seamless{" "}
        <br />
        access to education anytime, anywhere.
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
      {/* {features.map((feature, index) => ( */}
      <div className="feature-card">
        <div className="feature-card-icon">
          <svg
            /* xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round" */
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            fill="currentColor"
          >
            <path d="M32 4L2 18l30 14 30-14L32 4zm0 4.5L54.5 18 32 27.5 9.5 18 32 8.5zM10 30v12c0 6.6 9.3 12 22 12s22-5.4 22-12V30l-6 2.8V42c0 4.4-7.2 8-16 8s-16-3.6-16-8V32.8L10 30zm6 4.8V42c0 3.3 6.3 6 14 6s14-2.7 14-6V34.8l-14 6.5-14-6.5z" />
            <path d="M48 31c-2.2 0-4 1.8-4 4 0 1.5.8 2.8 2 3.5V46h4v-7.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4z" />
          </svg>
        </div>
        <h2 className="feature-card-title">Top-quality courses</h2>
        <p className="feature-card-description">
          Learn from industry experts and top educators with well-structured,
          engaging courses designed to help you succeed.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-card-icon">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            fill="currentColor"
          >
            <rect x="12" y="4" width="40" height="6" rx="2" />
            <rect x="12" y="54" width="40" height="6" rx="2" />
            <path d="M20 10h24c0 12-8 12-8 22s8 10 8 22H20c0-12 8-8 8-22s-8-10-8-22z" />
            <path d="M32 12c5 5 6 7 6 10H26c0-3 1-5 6-10z" />
            <path d="M32 52c-5-5-6-7-6-10h12c0 3-1 5-6 10z" />
          </svg>
        </div>
        <h2 className="feature-card-title">Learn at your own pace</h2>
        <p className="feature-card-description">
          Study on your schedule with flexible courses that fit into your
          lifestyle—no deadlines, just progress at your speed.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-card-icon">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            fill="currentColor"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="black"
              stroke-width="2"
              fill="none"
            />
            <path
              d="M32 2C22 2 14 15 14 32s8 30 18 30 18-13 18-30S42 2 32 2z"
              fill="none"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M10 20h44M10 44h44"
              fill="none"
              stroke="black"
              stroke-width="2"
            />
            <path d="M32 2v60" fill="none" stroke="black" stroke-width="2" />
          </svg>
        </div>
        <h2 className="feature-card-title">Anytime, anywhere</h2>
        <p className="feature-card-description">
          Access world-class education from any device, wherever you are.
          Learning has never been more convenient!
        </p>
      </div>
      {/* ))} */}
    </section>
  );
};

// Recommended Courses
/* const RecommendedCourses = () => {
  const courses = [
    { title: "AWS Certified Solutions", price: 80, trending: true },
    { title: "AWS", price: 75 },
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
        <p style={{ alignContent: "end", color: "#49bbbd" }}>View all</p>
      </div>
      <div className="card-list">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} price={course.price} />
        ))}
      </div>
    </section>
  );
}; */

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
/* const Testimonial = () => {
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
        
        <button className="assessment-button">
          <span className="button-text">Write your assessment</span>
          <span className="arrow-container">
            <span className="arrow">&rarr;</span>
          </span>
        </button>
      </div>
      <div className="testimonial-image-container">
        <img
          
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
}; */

const Testimonial = () => {
  const testimonials = [
    {
      text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
      name: "Gloria Rose",
      rating: 5,
      reviews: "12 reviews at Yelp",
      image: Student, // Example image
    },
    {
      text: "This service has been life-changing! The support and resources provided helped my students achieve more than ever before. Highly recommended!",
      name: "John Doe",
      rating: 5,
      reviews: "20 reviews at Google",
      image: Student,
    },
    {
      text: "Skilline has been an amazing tool for my learning experience. Everything is well-organized and easy to use.",
      name: "Emma Wilson",
      rating: 4,
      reviews: "8 reviews at Trustpilot",
      image: Student,
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
          TOTC has got more than 100k positive ratings from our users around the
          world.
          <br />
          Some of the students and teachers were greatly helped by Skilline.
          <br />
          Are you too? Please give your assessment.
        </p>
        <button className="assessment-button">
          <span className="button-text">Write your assessment</span>
          <span className="arrow-container">
            <span className="arrow">&rarr;</span>
          </span>
        </button>
      </div>

      {/* Testimonial Card Over Image */}
      <div className="testimonial-image-container">
        <img
          src={testimonials[index].image}
          alt="Testimonial"
          className="testimonial-image"
        />

        {/* Testimonial Card */}
        <div className="testimonial-card">
          <p className="testimonial-text">"{testimonials[index].text}"</p>
          <div className="testimonial-footer">
            <h4>{testimonials[index].name}</h4>
            <div className="rating">
              {"⭐".repeat(testimonials[index].rating)}
            </div>
            <span className="review-count">{testimonials[index].reviews}</span>
          </div>
        </div>

        {/* Next Button */}
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
      {/* <RecommendedCourses /> */}
      <CoursesList title="Recommended" scrollButtons={false} />
      <InfoSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
