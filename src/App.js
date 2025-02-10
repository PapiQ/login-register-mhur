import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
