import React from "react";
import "../styles/DatascienceSubmenu.css"; // Ensure this CSS file is linked

const degrees = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    university: "O.P. Jindal Global University",
    title: "MBA in Business Analytics",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Illinois_Tech_logo.svg/120px-Illinois_Tech_logo.svg.png",
    university: "Illinois Tech",
    title: "Master of Data Science",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Northeastern_University_seal.svg",
    university: "Northeastern University",
    title: "Master of Science in Data Analytics Engineering",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/5/58/University_of_Pittsburgh_seal.svg",
    university: "University of Pittsburgh",
    title: "Master of Data Science",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/3/34/University_of_Leeds_logo.svg",
    university: "University of Leeds",
    title: "MSc Data Science (Statistics)",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Indian_Statistical_Institute_logo.png",
    university: "Indian Statistical Institute",
    title: "Postgraduate Diploma in Applied Statistics",
  },
];

const certificates = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Deep_Learning_AI_Logo.png",
    title: "DeepLearning.AI Data Engineering",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    title: "IBM Data Analyst",
    details: "No prerequisites • Self-paced",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "Google Data Analytics",
    details: "No prerequisites • Self-paced",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "Google Advanced Data Analytics",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    title: "IBM Data Science",
    details: "No prerequisites • Self-paced",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Microsoft Power BI Data Analyst",
  },
];

const getStartedLinks = [
  "Launch your career",
  "Free courses",
  "Most popular",
  "New courses",
  "Guided Projects under 2 hours",
];

const popularSkills = [
  "Python",
  "SQL",
  "Microsoft Excel",
  "Excel",
  "Machine Learning",
  "Data Science",
  "Data Analytics",
  "Power BI",
  "Artificial Intelligence",
];

const DataScienceSubmenu = ({ setToggleExploreDropdown }) => {
  return (
    <>
      <div className="submenu-header">
        <h2>Data Science</h2>
        <button
          className="close-btn"
          onClick={() => setToggleExploreDropdown(false)}
        >
          &times;
        </button>
      </div>

      <div className="submenu-columns">
        {/* Degrees Column */}
        <div className="submenu-column">
          <h3>Degrees</h3>
          <p className="degree-description">
            Breakthrough pricing on 100% online degrees designed to fit into
            your life.
          </p>
          <ul>
            {degrees.map((degree, index) => (
              <li key={index} className="degree-item">
                <img src={degree.logo} alt={degree.university} />
                <div>
                  <p className="university-name">{degree.university}</p>
                  <p className="degree-title">{degree.title}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="view-all-btn">View all degrees</button>
        </div>

        {/* Certificates Column */}
        <div className="submenu-column">
          <h3>Certificate programs</h3>
          <p className="certificate-description">
            In 3-9 months, gain the skills to break into a new career or take
            your career to the next level.
          </p>
          <ul>
            {certificates.map((certificate, index) => (
              <li key={index} className="certificate-item">
                <img src={certificate.logo} alt={certificate.title} />
                <div>
                  <p className="certificate-title">{certificate.title}</p>
                  {certificate.details && (
                    <span className="certificate-details">
                      {certificate.details}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <button className="view-all-btn">View all Certificates</button>
        </div>

        {/* Get Started & Skills Column */}
        <div className="submenu-column">
          <h3>Get started</h3>
          <ul className="simple-list">
            {getStartedLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <h3>Popular skills</h3>
          <ul className="simple-list">
            {popularSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DataScienceSubmenu;
