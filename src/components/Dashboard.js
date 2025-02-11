import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";
import "../styles/Dashboard.css";

const ITEM_WIDTH = 300;

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  /* const initialRenderRef = useRef(true);
  const [authenticated, setauthenticated] = useState(null);

  if (initialRenderRef.current) {
    initialRenderRef.current = false;
    // executes before render
    const loggedInUser = localStorage.getItem("authenticated");
    console.log("loggedInUser", loggedInUser);
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  } */

  const data = [
    { title: "UI/UX Design" },
    { title: "AWS Certified Solutions Architect" },
    { title: "AWS Certified Solutions Architect" },
    { title: "UI/UX Design" },
    { title: "AWS Certified Solutions Architect" },
    { title: "AWS Certified Solutions Architect" },
  ];

  /*   if (!authenticated) {
    // Redirect
    console.log("authenticated", authenticated);
    return <Navigate replace to="/login" />;
  } else { */
  return (
    <>
      <div className="home">
        <NavBar />
        <div className="main-title">
          <h1>Welcome back, ready for your next lesson?</h1>
          <p>View history</p>
        </div>
        <div
          ref={containerRef}
          style={{
            width: "1450px",
            maxWidth: "100%",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <div className="card-list">
            {data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="card-buttons">
          <button
            onClick={() => {
              handleScroll(-ITEM_WIDTH);
            }}
          >
            <div class="arrow-left"></div>
          </button>
          <button
            onClick={() => {
              handleScroll(ITEM_WIDTH);
            }}
          >
            <div class="arrow-right"></div>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
  /*   } */
};

export default Home;
