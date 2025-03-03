import React, { useState } from "react";
import "../styles/MobileSearchScreen.css";

function MobileSearchScreen({ isVisible, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={`mobile-search-screen ${isVisible ? "visible" : ""}`}>
      <div className="mobile-search-container">
        <svg
          className="mobile-search-icon"
          xmlns="http://www.w3.org/2000/svg"
          /* viewBox="0 0 24 24" */
          viewBox="0 0 64 64"
          width="64"
          height="64"
          fill="#005357"
          stroke="#005357"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="0" y="0" width="64" height="64" fill="#005357" rx="8" />
          <circle cx="28" cy="28" r="12" fill="none" stroke="white"></circle>
          <line x1="36" y1="36" x2="45" y2="45" stroke="white"></line>
        </svg>
        {/* Search Input Field */}
        <input
          type="text"
          className="mobile-search-input"
          placeholder="Find your next course, topics, or instructors . . ."
          value={searchTerm}
          onChange={handleChange}
          autoFocus
        />

        {/* Clear (X) Button */}
        <button className="search-clear-icon" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default MobileSearchScreen;
