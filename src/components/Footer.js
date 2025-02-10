import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoSmall from "../logo_small.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* Logo and Title */}
        <div className="footer-logo">
          <img src={LogoSmall} alt="Mhur Logo" />
          <div className="footer-separator"></div>
          <p>Online Class for Everyone</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-subscribe">
          <p>Subscribe to get our Newsletter</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <Link to="#">Careers</Link>
          <span>|</span>
          <Link to="#">Privacy Policy</Link>
          <span>|</span>
          <Link to="#">Terms & Conditions</Link>
        </div>

        {/* Copyright */}
        <p className="footer-copyright">© {new Date().getFullYear()} mhur</p>
      </div>
    </div>
  );
};

export default Footer;
