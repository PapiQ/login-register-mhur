import "../styles/CourseOverviewPageHeader.css";

const CourseHeader = ({ courseHeaderRef, isMobile }) => {
  return (
    <>
      {/* Background Image (Optional: Use an <img> if needed) */}
      {/*  <div className="course-header-bg"></div> */}
      <div className="course-header-container" ref={courseHeaderRef}>
        <div className="course-header-content">
          {/* IBM Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM Logo"
            className="course-logo"
          />

          {/* Course Title & Instructor Info */}
          <h1 className="course-header-title">
            Introduction to Web Development with HTML, CSS, JavaScript
          </h1>
          <p className="course-subtext">
            This course is part of multiple programs. <a href="#">Learn more</a>
          </p>

          <div className="instructors">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Instructor"
              className="instructor-img"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Instructor"
              className="instructor-img"
            />
            <span className="more-instructors">+2 more</span>
          </div>

          {/* Enroll Section */}
          <div className="enroll-section">
            <button className="enroll-btn">
              Buy Now {/* <span>Starts Feb 19</span> */}
            </button>
            <p className="enroll-text">
              Try for Free: Enroll to start your 7-day full access free trial.{" "}
              <br />
              {/* <span className="financial-aid">Financial aid available</span> */}
            </p>
          </div>

          {/* Course Info */}
          <p className="enrolled-stats">
            <strong>166,505</strong> already enrolled
          </p>
          {/* <p className="included-plus">
          Included with{" "}
          <span className="coursera-plus">
            coursera<span>PLUS</span>
          </span>{" "}
          • <a href="#">Learn more</a>
        </p> */}
        </div>
      </div>
      {/* Course Stats */}
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
    </>
  );
};

export default CourseHeader;
