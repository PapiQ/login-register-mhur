import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import { AuthProvider, useAuth } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/Landing";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact="true" path="/" element={<Home />}></Route>
          <Route exact="true" path="/home" element={<Home />}></Route>
          <Route exact="true" path="/courses" element={<Courses />}></Route>
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
      </Router> */}

      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Route for Non-Logged-in Users */}
            <Route path="/" element={<LandingPage />} />
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

            {/* Protected Route for Logged-in Users */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
