import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useNavigate, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import useMediaQuery from "../hooks/useMediaQuery";
import "../styles/HomePage.css";
import CourseGrid from "../components/CourseGrid";
import InProgressCourseCard from "../components/InProgressCourseCard";

// Hero Section
const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive((prev) => !prev); // Toggle state using the previous state
    console.log("isActive", isActive);
  };

  const ITEM_WIDTH = 268;

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

  const visibleCards = !isActive && isMobile ? data.slice(0, 2) : data;

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
        className={`${isActive || isMobile ? "card-list-active" : "card-list"}`} // Add the active class when isActive is true
      >
        {/* <div className="card-list"> */}
        {visibleCards.map((item, index) => (
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
/* const CategorySection = () => {
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

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category.name}`);
    // Add your logic here, e.g., navigate to a category page or filter courses
    navigate(`/category/${category.name.toLowerCase()}`);
  };

  return (
    <div className="container">
      <section className="categories">
        <h2>Choose your favorite course from top category</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div
              className="category-card"
              onClick={() => handleCategoryClick(category)}
              key={index}
            >
              <div className="category-icon">{category.icon}</div>
              <h4>{category.name}</h4>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}; */

function CategorySection() {
  // Ordered to match the screenshot layout (4 columns, 3 rows = 12 slots total)
  const categories = [
    "Arts and Humanities",
    "Business",
    "Computer Science",
    "Health",
    "Data Science",
    "Information Technology",
    "Personal Development",
    "Physical Science and Engineering",
    "Math and Logic",
    "Language Learning",
    "Social Sciences",
  ];

  return (
    <div className="course-categories-container">
      <h2 className="course-categories-title">Categories</h2>
      <div className="course-categories-grid">
        {categories.map((category) => (
          <div key={category} className="course-category-card">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

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
/* const Banner = () => {
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
}; */

const HomePage = ({ isFaded }) => {
  const courses_array = [
    {
      title: "AWS Certified Architect",
      price: 80,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Developer",
      price: 75,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Google Cloud Professional",
      price: 85,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Microsoft Azure",
      price: 70,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Architect",
      price: 80,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Developer",
      price: 75,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Google Cloud Professional",
      price: 85,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Microsoft Azure Fundamentals",
      price: 70,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Solutions Architect",
      price: 80,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Developer",
      price: 75,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Google Cloud Professional",
      price: 85,
      bestseller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Microsoft Azure Fundamentals",
      price: 70,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Architect",
      price: 80,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "AWS Certified Developer",
      price: 75,
      bestSeller: true,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Google Cloud Professional",
      price: 85,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
    {
      title: "Microsoft Azure Fundamentals",
      price: 70,
      bestSeller: false,
      category: "Programming",
      duration: "3 Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instructor: "John Doe",
      oldPrice: 100,
      newPrice: 80,
      courseUrl: "/learn/ui-ux-design",
    },
  ];

  const progress_course = [
    {
      image: "https://via.placeholder.com/400x180",
      title: "UI/UX Design",
      instructor: "John Doe",
      instructorImage: "https://via.placeholder.com/50",
      completedLessons: 5,
      totalLessons: 7,
      category: "Design",
      price: 80,
      oldPrice: 100,
      bestSeller: true,
    },
    {
      image: "https://via.placeholder.com/400x180",
      title: "AWS Certified Solutions Architect",
      instructor: "John Doe",
      instructorImage: "https://via.placeholder.com/50",
      completedLessons: 3,
      totalLessons: 10,
      category: "Cloud Computing",
      price: 120,
      oldPrice: 150,
      bestSeller: false,
    },
    {
      image: "https://via.placeholder.com/400x180",
      title: "UI/UX Design",
      instructor: "John Doe",
      instructorImage: "https://via.placeholder.com/50",
      completedLessons: 5,
      totalLessons: 7,
      category: "Design",
      price: 80,
      oldPrice: 100,
      bestSeller: true,
    },
    {
      image: "https://via.placeholder.com/400x180",
      title: "AWS Certified Solutions Architect",
      instructor: "John Doe",
      instructorImage: "https://via.placeholder.com/50",
      completedLessons: 3,
      totalLessons: 10,
      category: "Cloud Computing",
      price: 120,
      oldPrice: 150,
      bestSeller: false,
    },
    {
      image: "https://via.placeholder.com/400x180",
      title: "UI/UX Design",
      instructor: "John Doe",
      instructorImage: "https://via.placeholder.com/50",
      completedLessons: 5,
      totalLessons: 7,
      category: "Design",
      price: 80,
      oldPrice: 100,
      bestSeller: true,
    },
    {
      image: "https://via.placeholder.com/400x180",
      title: "AWS Certified Solutions Architect",
      instructor: "John Doe",
      instructorImage: "https://via.placeholder.com/50",
      completedLessons: 3,
      totalLessons: 10,
      category: "Cloud Computing",
      price: 120,
      oldPrice: 150,
      bestSeller: false,
    },
  ];

  /* const [isFaded, setIsFaded] = useState(false); */

  const navbarRef = useRef(null);

  return (
    <>
      {/* <NavBar setIsFaded={setIsFaded} /> */}

      <div className={`page-content ${isFaded ? "faded" : ""}`}>
        {/* <HeroSection /> */}
        <div className="home-hero">
          {/* <CourseGrid courses={progress_course} cardType="progress" /> */}
          <h2>Continue learning</h2>
          <InProgressCourseCard />
        </div>
        <div className="main-page">
          {/* <RecommendedCourses /> */}

          {/* <CoursesList title="Recommended Courses" /> */}

          <CourseGrid courses={courses_array} cardType="course" />

          {/* <ProgrammingCourses /> */}

          {/*  <CoursesList title="Programming Courses" /> */}

          <CourseGrid courses={courses_array} cardType="course" />

          {/* <Banner /> */}
          <CategorySection />

          {/* <PersonalDevelopmentCourses /> */}

          {/*  <CoursesList title="Personal Development Courses" /> */}

          <CourseGrid courses={courses_array} cardType="course" />

          {/* <DesignCourses /> */}

          {/* <CoursesList title="Design Courses" backgroundColor="#ebf5ff" /> */}

          <CourseGrid courses={courses_array} cardType="course" />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
