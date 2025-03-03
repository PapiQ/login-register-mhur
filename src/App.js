import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import CourseLecturePage from "./pages/CourseLecturePage";
import CourseSupplementPage from "./pages/CourseSupplementPage";
import CourseOverviewPage from "./pages/CourseOverviewPage";
import MyLearning from "./pages/MyLearning";
import Browse from "./pages/Browse";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/NavBar";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isFaded, setIsFaded] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar
            onLoginClick={() => setIsLoginModalVisible(true)}
            onRegisterClick={() => setIsRegisterModalVisible(true)}
            setIsFaded={setIsFaded}
          />
          <Routes>
            {/* Public Route for Non-Logged-in Users */}
            {/* <Route path="/landing" element={<LandingPage />} /> */}

            {/*  <Route
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
            ></Route> */}
            <Route
              path="/learn/ui-ux-design"
              element={<CourseOverviewPage isFaded={isFaded} />}
            />
            {/* Protected Route for Logged-in Users */}
            {/*  <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            /> */}

            <Route
              path="browse"
              element={
                <ProtectedRoute>
                  <Browse isFaded={isFaded} />
                </ProtectedRoute>
              }
            />

            {/* <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <CoursesPage />
                </ProtectedRoute>
              }
            /> */}

            <Route
              path="/learn/ui-ux-design/lecture"
              element={
                <ProtectedRoute>
                  <CourseLecturePage isFaded={isFaded} />
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
                  <CourseSupplementPage isFaded={isFaded} />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="learn/ui-ux-design/supplement/:contentType/:lessonId"
              element={
                <ProtectedRoute>
                  <CourseSupplementPage isFaded={isFaded} />
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
            {/* Private Route for Authenticated Users */}
            <Route path="/" element={<ProtectedHome isFaded={isFaded} />} />
          </Routes>
          {isLoginModalVisible && (
            <LoginModal onClose={() => setIsLoginModalVisible(false)} />
          )}
          {isRegisterModalVisible && (
            <RegisterModal onClose={() => setIsRegisterModalVisible(false)} />
          )}
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

const ProtectedHome = ({ isFaded }) => {
  const { isAuthenticated } = useAuth(); // ✅ Now inside AuthProvider
  return isAuthenticated ? (
    <HomePage isFaded={isFaded} />
  ) : (
    <LandingPage isFaded={isFaded} />
  );
};
