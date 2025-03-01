import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import CourseLecturePage from "./pages/CourseLecturePage";
import CourseSupplementPage from "./pages/CourseSupplementPage";
import CourseOverviewPage from "./pages/CourseOverviewPage";
import MyLearning from "./pages/MyLearning";
import NotFoundPage from "./pages/NotFoundPage";

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
                <RegisterComponent
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <LoginComponent
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            ></Route>
            <Route
              path="/learn/ui-ux-design"
              element={<CourseOverviewPage />}
            />
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
              path="/learn/ui-ux-design/lecture"
              element={
                <ProtectedRoute>
                  <CourseLecturePage />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="learn/ui-ux-design/supplement"
              element={
                <ProtectedRoute>
                  <CourseSupplementPage />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="learn/ui-ux-design/supplement/:contentType/:lessonId"
              element={
                <ProtectedRoute>
                  <CourseSupplementPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="learn/ui-ux-design/supplement/:contentType/:lessonId"
              element={
                <ProtectedRoute>
                  <CourseSupplementPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="my-learning"
              element={
                <ProtectedRoute>
                  <MyLearning />
                </ProtectedRoute>
              }
            />
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
