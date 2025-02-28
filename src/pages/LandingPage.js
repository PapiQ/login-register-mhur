import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/LandingPage.css";
/* import Testimonial from "./Testimonial"; */
import CourseGrid from "../components/CourseGrid";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Student from "../assets/images/student.png";
import Classroom from "../assets/images/classroom.jpg";

// Hero Section
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Prevent Scrolling
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsOpen(false);
    // Enable Scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <section className="hero">
      <div className="hero-content">
        {/* <div className="search-container">
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
        </div> */}
        <h1>
          <span className="highlight">Studying Online</span>
          <br /> is now much easier
        </h1>
        <p>
          Mhur is an interesting platform that will teach
          <br /> you in a more interactive way
        </p>
        <div className="hero-content-buttons">
          <button className="cta-btn">Get Started</button>
          <button className="watch-button" onClick={openModal}>
            <span className="play-icon">▶</span>
            Watch how it works
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Student} alt="Student" />
      </div>
      {/* Video Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close-btn" onClick={closeModal}>
              &times;
            </span>
            {/* YouTube Embedded Video */}
            <iframe
              width="600"
              height="340"
              src="https://www.youtube.com/embed/PojLL3E-zk0?autoplay=1" // AutoPlay when modal opens
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

// Category Navigation
const CategoryNav = ({ navbarRef }) => {
  const categories = [
    "Design",
    "Development",
    "Programming",
    "Language",
    "Marketing",
    "Business",
  ];
  const subcategories = {
    Design: ["Graphic Design", "UI/UX", "Illustration"],
    Development: ["Web Development", "Mobile Development", "Game Development"],
    Programming: ["Python", "JavaScript", "Java"],
    Language: ["English", "Spanish", "French"],
    Marketing: ["Digital Marketing", "SEO", "Content Marketing"],
    Business: ["Management", "Finance", "Entrepreneurship"],
  };

  const [activeCategory, setActiveCategory] = useState(null);
  const dropdownRefs = useRef({}); // Use an object instead of an array

  useEffect(() => {
    if (activeCategory !== null) {
      adjustDropdownPosition(activeCategory);
    }
  }, [activeCategory]);

  const handleMouseEnter = (category, index) => {
    /* setActiveCategory(category); */
    if (window.innerWidth > 768) {
      setActiveCategory(category);
    }
  };

  const handleMouseLeave = () => {
    /* setActiveCategory(null); */
    if (window.innerWidth > 768) {
      setActiveCategory(null);
    }
  };

  const adjustDropdownPosition = (category) => {
    const dropdown = dropdownRefs.current[category];
    if (!dropdown) return;

    const dropdownRect = dropdown.getBoundingClientRect();

    // Reset styles
    dropdown.style.left = "50%";
    dropdown.style.transform = "translateX(-50%)";
    dropdown.style.right = "auto";

    // If dropdown goes off the left edge
    if (dropdownRect.left < 0) {
      dropdown.style.left = "0";
      dropdown.style.transform = "translateX(0)";
    }

    // If dropdown goes off the right edge
    if (dropdownRect.right > window.innerWidth) {
      dropdown.style.left = "auto";
      dropdown.style.right = "0";
      dropdown.style.transform = "translateX(0)";
    }
  };

  const categoryNavRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(50); // Default height
  const [categoryNavTop, setCategoryNavTop] = useState(null); // Store initial category nav position

  useEffect(() => {
    if (navbarRef?.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    if (categoryNavRef.current) {
      setCategoryNavTop(categoryNavRef.current.offsetTop); // Store category nav position dynamically
    }

    const handleScroll = () => {
      if (categoryNavRef.current && navbarRef?.current) {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const navBottom = navbarRef.current.getBoundingClientRect().bottom;

        // If scrolling down past category nav, make it sticky
        if (scrollY >= categoryNavTop - navbarHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false); // Reset when scrolling back up
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef, categoryNavTop]);

  return (
    <div
      ref={categoryNavRef}
      className={`category-nav-container ${isSticky ? "sticky" : ""}`}
      style={
        isSticky
          ? { top: `${navbarHeight}px`, position: "fixed" }
          : { position: "relative" }
      }
    >
      {/* Navbar for Desktop & Mobile */}
      <div className="category-nav">
        {categories.map((category) => (
          <div
            key={category}
            className="category-item"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveCategory(
                  activeCategory === category ? null : category
                );
              }
            }}
          >
            {category}
            <div className="arrow-down"></div>

            {/* Dropdown Menu */}
            {activeCategory === category && (
              <div
                className="dropdown-menu"
                ref={(el) => (dropdownRefs.current[category] = el)}
              >
                <div className="dropdown-content">
                  {subcategories[category].map((subcategory) => (
                    <div key={subcategory} className="subcategory-item">
                      {subcategory}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
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

// Explore Mhur
function ExploreMhur() {
  // Replace these image URLs with the actual background images or placeholders
  const categories = [
    {
      title: "Data Science",
      courses: 415,
      imageUrl:
        "https://images.unsplash.com/photo-1581091870620-3a6ada9f60bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Business",
      courses: 1005,
      imageUrl:
        "https://images.unsplash.com/photo-1581093448791-6b4bfc48f7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Computer Science",
      courses: 668,
      imageUrl:
        "https://images.unsplash.com/photo-1591696205602-2c8abecfc771?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Health",
      courses: 411,
      imageUrl:
        "https://images.unsplash.com/photo-1584036561584-b03c19da874c?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Social Sciences",
      courses: 395,
      imageUrl:
        "https://images.unsplash.com/photo-1573164574397-288b0f2eb177?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Personal Development",
      courses: 1273,
      imageUrl:
        "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Arts and Humanities",
      courses: 338,
      imageUrl:
        "https://images.unsplash.com/photo-1516280030429-27679b3d9b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      title: "Physical Science and Engineering",
      courses: 413,
      imageUrl:
        "https://images.unsplash.com/photo-1617095801971-d68668efcc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
  ];

  return (
    <div className="explore-mhur-container">
      <h2 className="explore-mhur-heading">Explore Mhur</h2>
      <div className="explore-mhur-grid">
        {categories.map((category) => (
          <div key={category.title} className="explore-mhur-card">
            <div
              className="explore-mhur-image"
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            />
            <div className="explore-mhur-info">
              <h3>{category.title}</h3>
              <p>{category.courses} courses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        {/* <video width="600" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </section>
  );
};

// Testimonial Section
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
        {/* Title with Line at the Top */}
        <div className="testimonial-header">
          <div className="testimonial-line"></div>
          <span className="testimonial-heading">TESTIMONIAL</span>
        </div>

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
            <div className="rating-container">
              <div className="rating">
                {"⭐".repeat(testimonials[index].rating)}
              </div>
              <span className="review-count">
                {testimonials[index].reviews}
              </span>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button className="testimonial-next-btn" onClick={nextTestimonial}>
          {/* → */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#005357"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

// Main Landing Page Component
const LandingPage = () => {
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
    },
  ];

  const [isFaded, setIsFaded] = useState(false);

  /* const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      const handler = (e) => setMatches(e.matches);

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
  };

  const isMobile = useMediaQuery("(max-width: 768px)"); */

  const navbarRef = useRef(null);

  return (
    <div>
      {/* Navbar */}
      <Navbar navbarRef={navbarRef} setIsFaded={setIsFaded} />
      <div className={`page-content ${isFaded ? "faded" : ""}`}>
        <HeroSection />
        {/* {!isMobile && <CategoryNav navbarRef={navbarRef} />} */}
        <div className="main-page">
          <Description />
          <Features />
          {/* <RecommendedCourses /> */}
          <CourseGrid courses={courses_array} />
          <ExploreMhur />
          <InfoSection />
          <Testimonial />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
