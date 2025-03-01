import React from "react";
import "../styles/DegreeSubmenu.css"; // Ensure this CSS file is linked

const DegreeSubmenu = ({
  setToggleExploreDropdown,
  setIsFaded,
  degrees,
  moreDegrees,
}) => {
  return (
    <>
      {/* <div className="degree-submenu"> */}
      <div className="submenu-header">
        <h2>Earn a Degree</h2>
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
      <p className="subtitle">
        Breakthrough pricing on 100% online degrees designed to fit into your
        life.
      </p>

      <div className="degree-columns">
        {Object.keys(degrees).map((category) => (
          <div key={category} className="degree-category">
            <h3>{category}</h3>
            <ul>
              {degrees[category].map((degree, index) => (
                <li key={index} className="degree-item">
                  <img src={degree.logo} alt={`${degree.university} Logo`} />
                  <div>
                    <span className="university-name">{degree.university}</span>
                    <p className="degree-name">{degree.program}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#" className="view-all">
              View all {category} degrees
            </a>
          </div>
        ))}
      </div>

      <div className="more-degrees">
        <h3>More Degrees</h3>
        <div className="more-links">
          {moreDegrees.map((degree, index) => (
            <a key={index} href={degree.link} className="more-degree-link">
              {degree.name}
            </a>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default DegreeSubmenu;
