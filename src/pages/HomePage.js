import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import CourseCard from "../components/CourseCard";
import CoursesList from "../components/CoursesList";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

// Hero Section
const HeroSection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive((prev) => !prev); // Toggle state using the previous state
    console.log("isActive", isActive);
  };

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

  const data = [
    { title: "UI/UX Design" },
    { title: "AWS Certified Solutions Architect" },
    { title: "AWS Certified Solutions Architect" },
    { title: "UI/UX Design" },
    { title: "AWS Certified Solutions Architect" },
    { title: "AWS Certified Solutions Architect" },
  ];

  return (
    <div className="home-hero">
      <div className="home-hero-header">
        <h2>Welcome back, ready for your next lesson?</h2>
        <button onClick={toggleClass}>{`${
          isActive ? "View less" : "View all"
        }`}</button>
      </div>
      <div
        ref={containerRef}
        className={`${isActive ? "card-list-active" : "card-list"}`} // Add the active class when isActive is true
      >
        {/* <div className="card-list"> */}
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
        {/* </div> */}
      </div>

      {!isActive && (
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
    </div>
  );
};

// Category Section
const CategorySection = () => {
  const categories = [
    {
      name: "Design",
      description:
        "Graphic design, UI/UX, illustration, and more. Learn the tools and techniques to bring your ideas to life.",
      icon: "\ud83c\udfa8",
    },
    {
      name: "Programming",
      description:
        "Python, Java, and JavaScript. Build websites, apps, and software with expert-led courses.",
      icon: "\ud83d\udcbb",
    },
    {
      name: "Development",
      description:
        "Mindset, productivity, and leadership skills. Learn habits and strategies to grow personally and professionally.",
      icon: "\ud83d\udcc8",
    },
    {
      name: "Business",
      description:
        "Business skills in management, finance, and entrepreneurship. Turn your ideas into successful ventures.",
      icon: "\ud83d\udcbc",
    },
    {
      name: "Marketing",
      description:
        "Digital marketing, branding, and social media strategies to grow businesses and reach global audiences.",
      icon: "\ud83d\udce3",
    },
    {
      name: "Photography",
      description:
        "Capture stunning images with courses on camera techniques, editing, and visual storytelling.",
      icon: "\ud83d\udcf8",
    },
    {
      name: "Acting",
      description:
        "Enhance your performance skills with lessons in stage presence, script reading, and character development.",
      icon: "\ud83c\udfac",
    },
    {
      name: "Communication",
      description:
        "Learn new languages or improve your speaking and writing skills for personal and professional success.",
      icon: "\ud83d\udcac",
    },
  ];
  return (
    <div className="container">
      <section className="categories">
        <h2>Choose your favorite course from top category</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{category.icon}</div>
              <h4>{category.name}</h4>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Recommended Courses
/* const RecommendedCourses = () => {
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
    { title: "AWS Certified Solutions Architect", price: 80 },
    { title: "AWS Certified Developer", price: 75 },
    { title: "Google Cloud Professional", price: 85 },
    { title: "Microsoft Azure Fundamentals", price: 70 },
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
}; */

// Banner
const Banner = () => {
  return (
    <div className="banner-container">
      <h2 className="banner-title">
        <strong>
          Online personal development lessons for remote learning.
        </strong>
      </h2>
      <p className="banner-description">
        Unlock your full potential with expert-led personal development courses.
        Improve your productivity, confidence, leadership, and mindset—all at
        your own pace. With MHUR. <br />
        Start Growing Today!
      </p>
      <button className="banner-button">Start learning now</button>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <NavBar />

      <HeroSection />

      <CategorySection />

      {/* <RecommendedCourses /> */}

      <CoursesList title="Recommended Courses" />

      {/* <ProgrammingCourses /> */}

      <CoursesList title="Programming Courses" />

      <Banner />

      {/* <PersonalDevelopmentCourses /> */}

      <CoursesList title="Personal Development Courses" />

      {/* <DesignCourses /> */}

      <CoursesList title="Design Courses" backgroundColor="#ebf5ff" />

      <Footer />
    </>
  );
};

export default HomePage;
