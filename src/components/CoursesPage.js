import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CoursesPage = () => {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default CoursesPage;
