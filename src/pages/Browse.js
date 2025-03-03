import React from "react";
import { useState, useRef } from "react";
import Navbar from "../components/NavBar";

const Browse = ({ isFaded }) => {
  return (
    <>
      <div className={`page-content ${isFaded ? "faded" : ""}`}></div>
    </>
  );
};

export default Browse;
