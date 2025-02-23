import React from "react";
import "../styles/DegreeSubmenu.css"; // Ensure this CSS file is linked

const degrees = {
  "Data Science": [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Indian_Statistical_Institute_Logo.svg/120px-Indian_Statistical_Institute_Logo.svg.png",
      university: "Indian Statistical Institute",
      program: "Postgraduate Diploma in Applied Statistics",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Leeds_University_Crest.png/120px-Leeds_University_Crest.png",
      university: "University of Leeds",
      program: "MSc Data Science (Statistics)",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Northeastern_University_seal.svg",
      university: "Northeastern University",
      program: "Master of Science in Data Analytics Engineering",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Illinois_Institute_of_Technology_seal.svg",
      university: "Illinois Tech",
      program: "Master of Data Science",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/University_of_Pittsburgh_seal.svg/120px-University_of_Pittsburgh_seal.svg.png",
      university: "University of Pittsburgh",
      program: "Master of Data Science",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/8/88/IIT_Guwahati_Logo.svg",
      university: "Indian Institute of Technology Guwahati",
      program: "Bachelor of Science in Data Science & AI",
    },
  ],
  Business: [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/O.P._Jindal_Global_University_seal.svg/120px-O.P._Jindal_Global_University_seal.svg.png",
      university: "O.P. Jindal Global University",
      program: "MBA in Business Analytics",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/SPJIMR_logo.svg/120px-SPJIMR_logo.svg.png",
      university: "S.P. Jain Institute of Management and Research",
      program: "PG Diploma in Management (PGDM) Online",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/IIT_Roorkee_Logo.svg",
      university: "IIT Roorkee",
      program: "Executive MBA",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/3/38/University_of_Huddersfield_logo.svg",
      university: "University of Huddersfield",
      program: "MSc Management",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/HEC_Paris_logo.svg",
      university: "HEC Paris",
      program: "Executive MSc & MSc in Innovation and Entrepreneurship",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/UIUC_logo.svg",
      university: "University of Illinois Urbana-Champaign",
      program: "Master of Science in Management (iMSM)",
    },
  ],
  "Computer Science": [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/1/15/University_of_London_logo.svg",
      university: "University of London",
      program: "Master of Science in Cyber Security",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Heriot-Watt_University_logo.svg/120px-Heriot-Watt_University_logo.svg.png",
      university: "Heriot-Watt University",
      program: "MSc Computer Science",
    },
  ],
};

const moreDegrees = [
  { name: "Public Health", link: "#" },
  { name: "Engineering", link: "#" },
  { name: "Bachelor's Degrees", link: "#" },
  { name: "Master's Degrees", link: "#" },
];

const DegreeSubmenu = ({ programs, setToggleExploreDropdown }) => {
  return (
    <>
      {/* <div className="degree-submenu"> */}
      <div className="submenu-header">
        <h2>Earn a Degree</h2>
        <button
          className="close-btn"
          onClick={() => setToggleExploreDropdown(false)}
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
