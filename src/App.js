import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
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
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  return (
    <AuthProvider>
      <Router>
        {" "}
        {/* ✅ Router wraps the entire app */}
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  /*  const [selectedIndex, setSelectedIndex] = useState(1); */
  const [isFaded, setIsFaded] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  const location = useLocation();

  const openLoginModal = () => {
    setIsLoginModalVisible(true);
    // Prevent Scrolling
    document.body.style.overflow = "hidden";
  };
  const closeLoginModal = () => {
    setIsLoginModalVisible(false);
    // Enable Scrolling
    document.body.style.overflow = "auto";
  };

  const openRegisterModal = () => {
    setIsRegisterModalVisible(true);
    // Prevent Scrolling
    document.body.style.overflow = "hidden";
  };
  const closeRegisterModal = () => {
    setIsRegisterModalVisible(false);
    // Enable Scrolling
    document.body.style.overflow = "auto";
  };

  const validRoutesForNavBar = [
    "/",
    "browse",
    "/learn/ui-ux-design",
    "/learn/ui-ux-design/lecture",
    "learn/ui-ux-design/supplement/:contentType/:lessonId",
    "/my-learning",
  ];

  const validRoutesForFooter = [
    "/",
    "browse",
    "/learn/ui-ux-design",
    "/learn/ui-ux-design/lecture",
    "/my-learning",
  ];

  const isValidRouteForNavbar = validRoutesForNavBar.includes(
    location.pathname
  );

  const isValidRouteForFooter = validRoutesForFooter.includes(
    location.pathname
  );

  return (
    <div className="App">
      {isValidRouteForNavbar && (
        <Navbar
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
          setIsFaded={setIsFaded}
        />
      )}
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
        <Route path="browse" element={<Browse isFaded={isFaded} />} />
        <Route
          path="/learn/ui-ux-design"
          element={<CourseOverviewPage isFaded={isFaded} />}
        />
        {/* Protected Route for Logged-in Users */}
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
        {/* <Route
              path="learn/ui-ux-design/supplement/:contentType/:lessonId"
              element={
                <ProtectedRoute>
                  <CourseSupplementPage isFaded={isFaded} />
                </ProtectedRoute>
              }
            ></Route> */}
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
        <Route
          path="/"
          element={
            <ProtectedHome
              isFaded={isFaded}
              onRegisterClick={openRegisterModal}
            />
          }
        />
      </Routes>
      {isValidRouteForFooter && <Footer />}
      {isLoginModalVisible && <LoginModal onClose={closeLoginModal} />}
      {isRegisterModalVisible && <RegisterModal onClose={closeRegisterModal} />}
    </div>
  );
}

export default App;

const ProtectedHome = ({ isFaded, onRegisterClick }) => {
  const { isAuthenticated } = useAuth(); // ✅ Now inside AuthProvider
  return isAuthenticated ? (
    <HomePage isFaded={isFaded} />
  ) : (
    <LandingPage isFaded={isFaded} onRegisterClick={onRegisterClick} />
  );
};
