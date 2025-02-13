import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import AuthenticationPageLayout from "./AuthenticationPageLayout";
import "../styles/AuthenticationPageLayout.css";

function RegisterComponent({ selectedIndex, setSelectedIndex }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  /* console.log("selected index register", selectedIndex.selectedIndex); */
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register email:", email, "password:", password);
  };

  return (
    <div className="auth-container">
      <AuthenticationPageLayout
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <div>
          <form onSubmit={handleRegister}>
            {/* <!-- Email input --> */}
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* <!-- Username input --> */}
            <div className="field">
              <label htmlFor="username">User name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/* <!--Password input--> */}
            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <input
                  className="form-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <AiFillEye
                    className="eye-icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="eye-icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
            </div>

            {/* <!-- Register button --> */}
            <button className="login-register-button" type="submit">
              Register
            </button>
          </form>
        </div>
      </AuthenticationPageLayout>
    </div>
  );
}

export default RegisterComponent;
