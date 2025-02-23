import React from "react";
import "../styles/CertificateSubmenu.css"; // Ensure this CSS file is linked

const certificates = {
  "Data Science": [
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
  ],
  Business: [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_CC_Express_logo.svg",
      title: "Adobe Graphic Designer",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Google Project Management",
      details: "No prerequisites • Self-paced",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_CC_Express_logo.svg",
      title: "Adobe Marketing Specialist",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Google Digital Marketing & E-commerce",
      details: "No prerequisites • Self-paced",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Meta_Platforms_Inc._logo.svg",
      title: "Meta Social Media Marketing",
      details: "No prerequisites • Self-paced",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Microsoft Business Analyst",
    },
  ],
  "Computer Science": [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Microsoft Python Development",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Deep_Learning_AI_Logo.png",
      title: "Generative AI for Software Development",
    },
  ],
};

const morePrograms = [
  { name: "Launch your career", link: "#" },
  { name: "Prepare for a certification", link: "#" },
  { name: "Advance your career", link: "#" },
];

const CertificateSubmenu = ({ setToggleExploreDropdown }) => {
  return (
    <>
      {/* <div className="certificate-submenu"> */}
      <div className="submenu-header">
        <h2>Earn a Certificate</h2>
        <button
          className="close-btn"
          onClick={() => setToggleExploreDropdown(false)}
        >
          &times;
        </button>
      </div>
      <p className="subtitle">
        In 3-9 months, gain the skills to break into a new career or take your
        career to the next level.
      </p>

      <div className="certificate-columns">
        {Object.keys(certificates).map((category) => (
          <div key={category} className="certificate-category">
            <h3>{category}</h3>
            <ul>
              {certificates[category].map((certificate, index) => (
                <li key={index} className="certificate-item">
                  <img
                    src={certificate.logo}
                    alt={`${certificate.title} Logo`}
                  />
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
            <a href="#" className="view-all">
              View all {category} Certificates
            </a>
          </div>
        ))}
      </div>

      <div className="more-certificates">
        <h3>More Certificate Programs</h3>
        <div className="more-links">
          {morePrograms.map((program, index) => (
            <a key={index} href={program.link} className="more-program-link">
              {program.name}
            </a>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CertificateSubmenu;
