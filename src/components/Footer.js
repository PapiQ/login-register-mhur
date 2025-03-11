import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Mhur Section */}
        <div className="footer-column">
          <h3>Mhur</h3>
          <ul>
            <li>About</li>
            <li>What We Offer</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>Catalog</li>
            <li>Coursera Plus</li>
            <li>Professional Certificates</li>
            <li>MasterTrack® Certificates</li>
            <li>Degrees</li>
            <li>For Enterprise</li>
            <li>For Government</li>
            <li>For Campus</li>
            <li>Become a Partner</li>
            <li>Social Impact</li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>Learners</li>
            <li>Partners</li>
            <li>Beta Testers</li>
            <li>Blog</li>
            <li>The Mhur Podcast</li>
            <li>Tech Blog</li>
            <li>Teaching Center</li>
          </ul>
        </div>

        {/* More Section */}
        <div className="footer-column">
          <h3>More</h3>
          <ul>
            <li>Press</li>
            <li>Investors</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Accessibility</li>
            <li>Contact</li>
            <li>Articles</li>
            <li>Directory</li>
            <li>Affiliates</li>
            <li>Modern Slavery Statement</li>
            <li>Manage Cookie Preferences</li>
          </ul>
        </div>

        {/* Mobile App Section */}
        <div className="footer-column">
          <h3>Mobile App</h3>
          <div className="app-links">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="app-badge"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
            />
          </div>
          {/* <div className="bcorp">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/B_Corporation_logo.svg/200px-B_Corporation_logo.svg.png"
              alt="Certified B Corporation"
            />
          </div> */}
        </div>
      </div>

      {/* Footer Bottom with Social Icons */}
      <div className="footer-bottom">
        <p>© 2025 Mhur Inc. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaYoutube />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoSmall from "../assets/images/logo_85x48.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          <img src={LogoSmall} alt="Mhur Logo" />
          <div className="footer-separator"></div>
          <p>Online Class for Everyone</p>
        </div>


        <div className="footer-subscribe">
          <p>Subscribe to get our Newsletter</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>


        <div>
          <div className="footer-links">
            <Link to="#">Careers</Link>
            <span>|</span>
            <Link to="#">Privacy Policy</Link>
            <span>|</span>
            <Link to="#">Terms & Conditions</Link>
          </div>


          <p className="footer-copyright">© {new Date().getFullYear()} mhur</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
 */
