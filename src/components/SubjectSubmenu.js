import React from "react";
import "../styles/SubjectSubmenu.css";

const DataScienceSubmenu = ({
  setToggleExploreDropdown,
  setIsFaded,
  title,
  degrees,
  certificates,
  getStartedLinks,
  popularSkills,
}) => {
  return (
    <>
      <div className="submenu-header">
        <h2>{title}</h2>
        <button
          className="close-btn"
          onClick={() => {
            setToggleExploreDropdown(false);
            setIsFaded(false);
          }}
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
