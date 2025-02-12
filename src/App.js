import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/CoursesPage";
import { AuthProvider, useAuth } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import CoursePage from "./components/CoursePage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="App">
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
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <CoursesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course/1"
              element={
                <ProtectedRoute>
                  <CoursePage />
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
