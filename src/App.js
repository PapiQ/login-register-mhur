import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import logo from "./logo.jpg";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Router>
      {/*  <div className="App">
        <div>
          <img className="logo" src={logo} alt="Logo image" />
        </div>

        <div>
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
                to="/"
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
          <p>Unlock knowledge and skills with mhur</p> */}
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route exact="true" path="/home" element={<Home />}></Route>
        <Route
          path="/register"
          element={
            <Register
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          }
        ></Route>
      </Routes>
      {/*  </div>
      </div> */}
    </Router>
  );
}

export default App;
