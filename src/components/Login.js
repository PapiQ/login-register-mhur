import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import "../styles/LoginRegister.css";

function Login({ selectedIndex, setSelectedIndex }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );

  const navigate = useNavigate();

  const users = [{ username: "Anania", password: "testpassword" }];

  const handleLogin = (e) => {
    e.preventDefault();
    // Login authentication logic
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/");
    }
  };

  console.log("authenticated", authenticated);

  /* if (authenticated) {
    navigate("/");
    return null; // Don't render anything else
  } */

  return (
    <div className="auth-container">
      <AuthContainer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <div>
          <form onSubmit={handleLogin}>
            {/* <!-- Username input --> */}
            <div className="field">
              <label htmlFor="email">User name</label>
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

              {/* <!-- Remember me checkbox --> */}
              <div className="field-bottom">
                <div>
                  <input type="checkbox" value="" id="remember-me" />
                  <label htmlFor="remember-me"> Remember me </label>
                </div>

                {/* <!-- Forgot password link --> */}
                <a href="#!"> Forgot Password? </a>
              </div>
            </div>
            {/* <!-- Login button --> */}
            <button className="login-register-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </AuthContainer>
      {/* {authenticated && <Navigate to="/" replace={true} />} */}
    </div>
  );
}

export default Login;
