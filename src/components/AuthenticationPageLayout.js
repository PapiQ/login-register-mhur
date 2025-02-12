import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoBig from "../assets/images/logo_800x700.jpg";
import "../styles/AuthenticationPageLayout.css";

function AuthenticationPageLayout({
  /* selectedIndex,
  setSelectedIndex, */
  children,
}) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <>
      {/* <!-- Left column container with background--> */}
      <div>
        <img className="logo-big" src={LogoBig} alt="Logo image" />
      </div>

      {/* <!-- Right column container with form --> */}
      <div className="login-register-container">
        <h1>Welcome to mhur</h1>
        <ul className="segmented-control">
          <li className="segmented-control__item">
            <input
              className="segmented-control__input"
              type="radio"
              value="1"
              name="option"
              id="option-1"
              checked={1 === selectedIndex}
            />
            <Link
              onClick={() => {
                setSelectedIndex(1);
              }}
              class="segmented-control__label"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="segmented-control__item">
            <input
              className="segmented-control__input"
              type="radio"
              value="2"
              name="option"
              id="option-2"
              checked={2 === selectedIndex}
            />
            <Link
              onClick={() => {
                setSelectedIndex(2);
              }}
              class="segmented-control__label"
              to="/register"
            >
              Register
            </Link>
          </li>
        </ul>
        <p>We provide the tools and courses to help you succeed.</p>
        <p>Unlock knowledge and skills with mhur</p>
        {/* pass login component and register component as children */}
        {children}
      </div>
    </>
  );
}

export default AuthenticationPageLayout;
