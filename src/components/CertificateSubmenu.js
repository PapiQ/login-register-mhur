import React from "react";
import "../styles/CertificateSubmenu.css"; // Ensure this CSS file is linked

const CertificateSubmenu = ({
  certificates,
  morePrograms,
  handleCloseButtonClick,
}) => {
  return (
    <>
      {/* <div className="certificate-submenu"> */}
      <div className="submenu-header">
        <h2>Earn a Certificate</h2>
        <button className="close-btn" onClick={handleCloseButtonClick}>
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
